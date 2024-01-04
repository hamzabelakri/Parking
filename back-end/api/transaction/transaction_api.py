from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.websocket_models import body_update_transaction_data_gui, Item
from api.transaction.transaction_model import Transaction_Document
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
        
    
    return transaction_list


@transaction_router.get("/transaction/{transaction_id}", response_model=body_update_transaction_data_gui)
def get_one_transaction_data(transaction_id: str):
    try:
        
        document = Transaction_Document.objects(id=transaction_id).first()

        if document:
            
            response_model_instance = body_update_transaction_data_gui(**document.to_mongo())
            return response_model_instance
        else:
            
            raise HTTPException(status_code=404, detail=f'Transaction with ID {transaction_id} not found')

    except Exception as ex:
        
        raise HTTPException(status_code=500, detail=f'Error: {ex}')



@transaction_router.post("/transaction")
def add_transaction_data(RequestBody: body_update_transaction_data_gui, request: Request):
    try:
        
        New_Document = Transaction_Document(**RequestBody.model_dump())
        random_file=random.choice(os.listdir("./car-plates"))
        with open(f'./car-plates/{random_file}', "rb") as image_file:
         image_data = base64.b64encode(image_file.read()).decode("utf-8")
        print("selected img : ",random_file)
        RequestBody.ticket_data.image=f'data:image/jpeg;base64,{image_data}'
        New_Document.save()
        return 'saved successfully'
    except Exception as ex:
        
        raise HTTPException(status_code=500, detail=f'Error: {ex}')


@transaction_router.put("/transaction/{transaction_id}")
def update_transaction_data(transaction_id: str, request_body: body_update_transaction_data_gui):
    try:
        
        existing_document = Transaction_Document.objects(id=transaction_id).first()

        if existing_document:
            
            existing_document.modify(**request_body.model_dump())

            return f'Transaction with ID {transaction_id} updated successfully'
        else:
            raise HTTPException(status_code=404, detail=f'Transaction with ID {transaction_id} not found')

    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')


@transaction_router.delete("/transaction/{transaction_id}")
def delete_transaction_data(transaction_id:str):
    try:
        
        deleted_document = Transaction_Document.objects(id=transaction_id).delete()
        
        if deleted_document:
            return f'Transaction with ID {transaction_id} deleted successfully'
        else:
            raise HTTPException(status_code=404, detail=f'Transaction with ID {transaction_id} not found')
            
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f'Error: {ex}')