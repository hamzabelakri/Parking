from fastapi import APIRouter
from config.database import collection_name
from models.data import Data, PostData
from schema.schema  import list__serial
from bson import ObjectId

router=APIRouter()



@router.get("/")
async def get_data():
    data=list__serial(collection_name.find())
    return data

@router.post("/")
async def post_data(data: Data):
    collection_name.insert_one(dict(data))
    
@router.put("/{id}")
async def put_data(id:str, data: Data):
    collection_name.find_one_and_update({"_id":ObjectId(id)},{"$set":dict(data)})

@router.delete("/{id}")
async def delete_data(id:str):
    collection_name.find_one_and_delete({"_id":ObjectId(id)})

@router.delete("/")
async def delete_all_data():
    collection_name.delete_many({})    