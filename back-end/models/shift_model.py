from pydantic import BaseModel,EmailStr
from typing import List
from bson import ObjectId
from datetime import datetime

class Shift_Body_Model(BaseModel):
    id: str 
    email: str
    start_time: datetime
    end_time: datetime = None
    transactions: List[str]
    events: List[str]

class Shift_Transaction_Body_Model(BaseModel):
    transaction: dict

class Shift_List_Transaction_Body_Model(BaseModel):
    transactions: List

class Shift_Event_Body_Model(BaseModel):
    event: str

class Shift_List_Events_Body_Model(BaseModel):
    events: List[str]