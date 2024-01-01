from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.transaction_models import body_update_transaction_data_gui, Item
from database.models.report import Query_document

data_query = APIRouter()




@data_query.get("/items/", response_model=list[Item])
def find_items():
    try:
        documents = Query_document.objects()
     
        retlist = [Query_document(
            **document.to_mongo()) for document in documents]
    except Exception as Ex:
        raise HTTPException(status=500, details=f' error {Ex} ')
        # print('An exception occurred')
    
    return retlist


@data_query.post("/items")
def create_item(RequestBody: Item, request: Request):
    try:
        # Create Query_document directly from Item model
        R1 = Query_document(**RequestBody.model_dump())
        R1.save()
        return 'saved successfully'
    except Exception as ex:
        # Handle exceptions, log, or return an error response
        raise HTTPException(status_code=500, detail=f'Error: {ex}')


'''@data_query.post("/items/")
def create_item(RequestBody: body_update_transaction_data_gui, request: Request):
    R1 = Report_document(user=str(RequestBody.userid),
                         shift=RequestBody.shiftid,
                         clientip=request.client.host
                         )
    R1.save()
    return 'saved successfully' '''
