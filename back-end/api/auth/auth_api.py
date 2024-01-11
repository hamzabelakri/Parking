from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.staff_model import Staff_Body_Model
from api.auth.auth_model import Staff_Mongo_Document
from api.shift.shift_model import Shift_Mongo_Document
from datetime import datetime

auth_router = APIRouter(prefix='/auth', tags=["AUTH_API"])


@auth_router.post("/sign-up/", response_model=Staff_Body_Model)
def create_staff(user_data: Staff_Body_Model):
    try:
        user = Staff_Mongo_Document(**user_data.model_dump())
        user.save()
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    return user


@auth_router.post("/sign-in/", response_model=Staff_Body_Model)
def sign_in_staff(request: Request, staff_data: Staff_Body_Model):
    try:
        staff = Staff_Mongo_Document.objects(email=staff_data.email, password=staff_data.password).first()

        if not staff:
            raise HTTPException(status_code=401, detail='Invalid email or password')
        shift_document = Shift_Mongo_Document(staff=staff,transaction=[], events=[])
        shift_document.save()
        return staff
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')