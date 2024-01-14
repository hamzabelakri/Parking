from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.staff_model import Staff_Body_Model
from api.auth.auth_model import Staff_Mongo_Document
from bson import ObjectId 

staff_router = APIRouter(tags=["STAFF_API"])


@staff_router.get("/staff/", response_model=list[Staff_Body_Model])
def get_all_staff():
    try:
        documents = Staff_Mongo_Document.objects()
        logger.info(f"Number of staffs: {documents.count()}")
        staff_list = [Staff_Body_Model(**document.to_mongo()) for document in documents]
    except Exception as Ex:
        raise HTTPException(status=500, details=f' error {Ex} ')
    return staff_list


@staff_router.get("/staff/{staff_id}", response_model=Staff_Body_Model)
def get_staff_by_id(staff_id: str):
    try:
        document = Staff_Mongo_Document.objects(id=ObjectId(staff_id)).first()

        if not document:
            raise HTTPException(status_code=404, detail='Staff not found')

        staff = Staff_Body_Model(**document.to_mongo())
        return staff
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')

