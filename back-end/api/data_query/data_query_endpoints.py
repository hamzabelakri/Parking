from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.transaction_models import body_update_transaction_data_gui, Item
from database.models.report import Query_document
from database.models.transaction import Transaction_Document

data_query = APIRouter()




@data_query.get("/transaction/", response_model=list[body_update_transaction_data_gui])
def get_transaction_data():
    try:
        documents = Transaction_Document.objects()
     
        transaction_list = [Query_document(
            **document.to_mongo()) for document in documents]
    except Exception as Ex:
        raise HTTPException(status=500, details=f' error {Ex} ')
        # print('An exception occurred')
    
    return transaction_list


@data_query.post("/transaction")
def add_transaction_data(RequestBody: body_update_transaction_data_gui, request: Request):
    try:
        # Create Query_document directly from Item model
        R1 = Transaction_Document(**RequestBody.model_dump())
        R1.save()
        return 'saved successfully'
    except Exception as ex:
        # Handle exceptions, log, or return an error response
        raise HTTPException(status_code=500, detail=f'Error: {ex}')



