
from fastapi import HTTPException, APIRouter
from config.log_config import logger
from models.shift_model import Shift_Body_Model
from api.shift.shift_model import Shift_Mongo_Document
from bson import ObjectId 

shift_router = APIRouter(tags=["SHIFT_API"])

@shift_router.get("/shift/", response_model=list[Shift_Body_Model])
def get_all_shifts():
    try:
        documents = Shift_Mongo_Document.objects()
        logger.info(f"Total shifts: {len(documents)}")
        shifts = [Shift_Body_Model(**document.to_mongo()) for document in documents]
        return shifts
    except Exception as Ex:
        raise HTTPException(status_code=500, detail=f'Error: {Ex}')


@shift_router.get("/shift/{shift_id}", response_model=Shift_Body_Model)
def get_shift_by_id(shift_id: str):
    try:
        document = Shift_Mongo_Document.objects(id=ObjectId(shift_id)).first()
        if not document:
            raise HTTPException(status_code=404, detail='shift not found')
        staff = Shift_Body_Model(**document.to_mongo())
        return staff
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    

@shift_router.post("/shift/add-transaction/{shift_id}")
def add_transaction_to_shift(shift_id: str, transaction_data: str):
    try:
        shift = Shift_Mongo_Document.objects(id=shift_id).first()
        if not shift:
            raise HTTPException(status_code=404, detail=f'Shift with id {shift_id} not found')
        shift.transactions.append(transaction_data)
        shift.save()
        logger.info(f"Transaction added to shift {shift_id}")
        return {"detail": "Transaction added successfully"}
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
  
    
@shift_router.post("/shift/add-event/{shift_id}")
def add_transaction_to_shift(shift_id: str, event_data: str):
    try:
        shift = Shift_Mongo_Document.objects(id=shift_id).first()
        if not shift:
            raise HTTPException(status_code=404, detail=f'Shift with id {shift_id} not found')
        shift.events.append(event_data)
        shift.save()
        logger.info(f"Event added to shift {shift_id}")
        return {"detail": "Event added successfully"}
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
