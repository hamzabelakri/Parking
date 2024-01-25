from fastapi import HTTPException, APIRouter
from config.log_config import logger
from models.operator_base_model import Operator_Register_Model,Operator_Login_Model,Operator_Logout_Model
from api.auth.auth_mongo_model import Operator_Mongo_Document
from api.shift.shift_mongo_model import  Shift_Mongo_Document
from datetime import datetime
from mongoengine.errors import NotUniqueError

auth_router = APIRouter(prefix='/auth/operator', tags=["AUTH_API"])


@auth_router.post("/sign-up", response_model=Operator_Register_Model)
def create_operator(sign_up_body: Operator_Register_Model):
    try:
        operator = Operator_Mongo_Document(**sign_up_body.model_dump())
        operator.save()
    except NotUniqueError:
        raise HTTPException(status_code=400, detail="operator already exists")
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    return operator

@auth_router.post("/sign-in", response_model=Operator_Register_Model)
def sign_in_operator(sign_in_body: Operator_Login_Model):
    try:
        email=sign_in_body.email
        password=sign_in_body.password
        operator = Operator_Mongo_Document.objects(email=email).first()
        if not operator:
            raise HTTPException(status_code=401, detail='operator not found')
        if not (email and password):
            raise HTTPException(status_code=401, detail='Invalid email or password')
        create_shift_document(email=email)

        return operator
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    
def create_shift_document(email: str):
    shift_document = Shift_Mongo_Document(
        start_shift = datetime.now(), 
        end_shift = None, 
        transactions = [], 
        events = [],  
        zr_shift_id = None,
        shift_sync_zr = False,
        shift_sync_back_office = False,
        email = email
        )
    shift_document.save()

@auth_router.post("/sign-out/", response_model=Operator_Logout_Model)
def sign_out_operator(sign_out_body: Operator_Logout_Model):
    try:
        email=sign_out_body.email
        operator = Operator_Mongo_Document.objects(email=email).first()
        if not operator:
            raise HTTPException(status_code=404, detail='operator not found')
        shift_document = Shift_Mongo_Document.objects(email=email, end_shift=None).first()
        if shift_document:
            shift_document.end_shift = datetime.now()
            shift_document.save()
        return operator
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    

@auth_router.put("/pause-shift", response_model=Operator_Logout_Model)
def pause_shift(pause_body: Operator_Logout_Model):
    try:
        email = pause_body.email
        operator = Operator_Mongo_Document.objects(email=email).first()
        if not operator:
            raise HTTPException(status_code=404, detail='Operator not found')

        shift_document = Shift_Mongo_Document.objects(email=email, end_shift=None).first()
        if not shift_document:
            raise HTTPException(status_code=400, detail='Shift not found or already paused')

        # Check if there's an existing pause time
        if not shift_document.pause_resume_times or "resume" in shift_document.pause_resume_times[-1]:
            # Record the pause time only if there's no existing pause time or it's already resumed
            pause_time = datetime.now()
            shift_document.pause_resume_times.append({"pause": pause_time})
            shift_document.save()

        return operator
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')


@auth_router.put("/resume-shift", response_model=Operator_Logout_Model)
def resume_shift(resume_body: Operator_Logout_Model):
    try:
        email = resume_body.email
        operator = Operator_Mongo_Document.objects(email=email).first()
        if not operator:
            raise HTTPException(status_code=404, detail='Operator not found')

        shift_document = Shift_Mongo_Document.objects(email=email).first()
        if not shift_document:
            raise HTTPException(status_code=400, detail='Shift not found or not paused')

        # Record the resume time related to the last pause time
        if shift_document.pause_resume_times:
            last_pause_time = shift_document.pause_resume_times[-1]["pause"]
            shift_document.pause_resume_times[-1]["resume"] = datetime.now()
        else:
            raise HTTPException(status_code=400, detail='No pause time recorded')

        shift_document.end_shift = None
        shift_document.save()

        return operator
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
