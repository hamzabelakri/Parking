
from fastapi import HTTPException, APIRouter
from config.log_config import logger
from models.shift_model import Shift_Body_Model,Shift_Transaction_Body_Model,Shift_Event_Body_Model,Shift_List_Transaction_Body_Model,Shift_List_Events_Body_Model
from api.shift.shift_model import Shift_Mongo_Document
from bson import ObjectId 

shift_router = APIRouter(tags=["SHIFT_API"])

@shift_router.get("/shift/", response_model=list[Shift_Body_Model])
def get_all_shifts():
    try:
        documents = Shift_Mongo_Document.objects()
        print(documents[0].id)
        logger.info(f"Total shifts: {len(documents)}")
        shifts = [Shift_Body_Model(id=str(document.id), **document.to_mongo()) for document in documents]
        return shifts
    except Exception as Ex:
        raise HTTPException(status_code=500, detail=f'Error: {Ex}')


@shift_router.get("/shift/{shift_id}", response_model=Shift_Body_Model)
def get_shift_by_id(shift_id: str):
    try:
        document = Shift_Mongo_Document.objects(id=ObjectId(shift_id)).first()
        if not document:
            raise HTTPException(status_code=404, detail='shift not found')
        shift = Shift_Body_Model(id=str(document.id), **document.to_mongo())
        return shift
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
    

@shift_router.put("/shift/add-transaction/{shift_id}", response_model=Shift_List_Transaction_Body_Model)
def add_transaction_to_shift(shift_id: str, transaction_body: Shift_Transaction_Body_Model):
    try:
        document = Shift_Mongo_Document.objects(id=shift_id).first()
        if not document:
            raise HTTPException(status_code=404, detail=f'Shift not found')
        document.transactions.append(transaction_body.transaction)
        document.save()
        transactions = Shift_List_Transaction_Body_Model(transactions=list((document.transactions)))
        logger.info(f"Transaction added")
        return transactions
    except HTTPException as http_ex:
        raise http_ex
    except Exception as Ex:
        raise HTTPException(status_code=500, detail=f'Error: {Ex}')

  
    
@shift_router.put("/shift/add-event/{shift_id}",response_model=Shift_List_Events_Body_Model)
def add_event_to_shift(shift_id: str, event_body: Shift_Event_Body_Model):
    try:
        document = Shift_Mongo_Document.objects(id=shift_id).first()
        if not document:
            raise HTTPException(status_code=404, detail=f'Shift not found')
        document.events.append(event_body.event)
        document.save()
        events = Shift_List_Events_Body_Model(events=list((document.events)))
        logger.info(f"Event added")
        return events
    except HTTPException as http_ex:
        raise http_ex
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')
