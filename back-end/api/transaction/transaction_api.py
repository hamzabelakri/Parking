from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.transaction_models import body_update_transaction_data_gui, Item
from database.models.report import Query_document
from database.models.transaction import Transaction_Document
import base64
import random,os

transaction_router = APIRouter()

@transaction_router.get("/transaction", response_model=list[body_update_transaction_data_gui])
def get_transaction_data():
    try:
        documents = Transaction_Document.objects()
     
        transaction_list = [body_update_transaction_data_gui(**document.to_mongo()) for document in documents]
    except Exception as Ex:
        raise HTTPException(status=500, details=f' error {Ex} ')
        # print('An exception occurred')
    
    return transaction_list


@transaction_router.post("/transaction")
def add_transaction_data(RequestBody: body_update_transaction_data_gui, request: Request):
    try:
        # Create Query_document directly from Item model
        New_Document = Transaction_Document(**RequestBody.model_dump())
        random_file=random.choice(os.listdir("./car-plates"))
        with open(f'./car-plates/{random_file}', "rb") as image_file:
         image_data = base64.b64encode(image_file.read()).decode("utf-8")
        print("selected img : ",random_file)
        RequestBody.ticket_data.image=f'data:image/jpeg;base64,{image_data}'
        New_Document.save()
        return 'saved successfully'
    except Exception as ex:
        # Handle exceptions, log, or return an error response
        raise HTTPException(status_code=500, detail=f'Error: {ex}')


