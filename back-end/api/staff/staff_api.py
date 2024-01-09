from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.staff_model import Staff_Body_Model
from api.auth.auth_model import Staff_Mongo_Document

staff_router = APIRouter(tags=["STAFF_API"])


@staff_router.get("/staff/", response_model=list[Staff_Body_Model])
def get_all_staff():
    try:
        documents = Staff_Mongo_Document.objects()
        print(documents.count())
        staff_list = [Staff_Body_Model(**document.to_mongo()) for document in documents]
    except Exception as Ex:
        raise HTTPException(status=500, details=f' error {Ex} ')
        
    
    return staff_list