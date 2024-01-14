
from fastapi import HTTPException, APIRouter
from config.log_config import logger
from models.shift_model import Shift_Body_Model
from api.shift.shift_model import Shift_Mongo_Document
from bson import ObjectId 

shift_router = APIRouter(tags=["SHIFT_API"])

@shift_router.get("/shift/", response_model=list[Shift_Body_Model])
def get_all_shifts():
    try:
        shift = Shift_Mongo_Document.objects()
        shift_count = len(shift)
        logger.info(f"Total shifts: {shift_count}")
        return shift 
    except Exception as Ex:
        raise HTTPException(status_code=500, detail=f'Error: {Ex}')


@shift_router.get("/shift/{shift_id}", response_model=Shift_Body_Model)
def get_shift_by_id(shift_id: str):
    try:
        shift = Shift_Mongo_Document.objects(id=ObjectId(shift_id)).first()
        if not shift:
            raise HTTPException(status_code=404, detail='shift not found')
        return shift
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    


