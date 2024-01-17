from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.staff_model import Staff_Register_Model,Staff_Login_Model,Staff_Logout_Model
from api.auth.auth_model import Staff_Mongo_Document
from api.shift.shift_model import  Shift_Mongo_Document
from datetime import datetime

auth_router = APIRouter(prefix='/auth', tags=["AUTH_API"])

@auth_router.post("/sign-up/", response_model=Staff_Register_Model)
def create_staff(sign_up_body: Staff_Register_Model):
    try:
        user = Staff_Mongo_Document(**sign_up_body.model_dump())
        user.save()
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    return user

@auth_router.post("/sign-in/", response_model=Staff_Login_Model)
def sign_in_staff(sign_in_body: Staff_Login_Model):
    try:
        email=sign_in_body.email
        password=sign_in_body.password
        staff = Staff_Mongo_Document.objects(email=email).first()
        if not staff:
            raise HTTPException(status_code=401, detail='Staff not found')
        if not (email and password):
            raise HTTPException(status_code=401, detail='Invalid email or password')
        create_shift_document(email=email)

        return staff
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    
def create_shift_document(email: str):
    shift_document = Shift_Mongo_Document(start_shift=datetime.now(), end_shift=None, transactions=[], events=[],  email=email)
    shift_document.save()

@auth_router.post("/sign-out/", response_model=Staff_Logout_Model)
def sign_out_staff(sign_out_body: Staff_Logout_Model):
    try:
        email=sign_out_body.email
        staff = Staff_Mongo_Document.objects(email=email).first()
        if not staff:
            raise HTTPException(status_code=404, detail='Staff not found')
        shift_document = Shift_Mongo_Document.objects(email=email, end_shift=None).first()
        if shift_document:
            shift_document.end_shift = datetime.now()
            shift_document.save()
        return shift_document
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')