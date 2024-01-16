from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.staff_model import Staff_Body_Model,Staff_Login_Model
from api.auth.auth_model import Staff_Mongo_Document
from api.shift.shift_model import  Shift_Mongo_Document
from datetime import datetime

auth_router = APIRouter(prefix='/auth', tags=["AUTH_API"])
def create_shift_document():

    shift_document = Shift_Mongo_Document(start_time=datetime.now(), end_time=None, transactions=[], events=[])
    shift_document.save()

@auth_router.post("/sign-up/", response_model=Staff_Body_Model)
def create_staff(user_data: Staff_Body_Model):
    try:
        user = Staff_Mongo_Document(**user_data.model_dump())
        user.save()
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    return user


@auth_router.post("/sign-in/", response_model=Staff_Login_Model)
def sign_in_staff(request: Request, staff_data: Staff_Login_Model):
    try:
        email=staff_data.email
        password=staff_data.password
        staff = Staff_Mongo_Document.objects(email=email).first()
        print(staff.email)
        if not staff:
            raise HTTPException(status_code=401, detail='Staff not found')
        if not (email and password):
            raise HTTPException(status_code=401, detail='Invalid email or password')
        create_shift_document()

        return staff
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    



