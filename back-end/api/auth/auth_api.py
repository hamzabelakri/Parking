from fastapi import HTTPException, APIRouter
from config.log_config import logger
from models.operator_base_model import Operator_Register_Model,Operator_Login_Model,Operator_Logout_Model
from api.auth.auth_mongo_model import Operator_Mongo_Document
from api.shift.shift_mongo_model import  Shift_Mongo_Document
from datetime import datetime
from mongoengine.errors import NotUniqueError

auth_router = APIRouter(prefix='/auth', tags=["AUTH_API"])

@auth_router.post("/sign-up/", response_model=Operator_Register_Model)
def create_operator(sign_up_body: Operator_Register_Model):
    try:
        operator = Operator_Mongo_Document(**sign_up_body.model_dump())
        operator.save()
    except NotUniqueError:
        raise HTTPException(status_code=400, detail="operator already exists")
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    return operator

@auth_router.post("/sign-in/", response_model=Operator_Register_Model)
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
        start_shift=datetime.now(), 
        end_shift=None, 
        transactions=[], 
        events=[],  
        zr_shift_id=None,
        shift_sync_zr = False,
        shift_sync_back_office = False,
        email=email
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