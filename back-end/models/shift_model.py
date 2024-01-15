from pydantic import BaseModel
from typing import List
from datetime import datetime

class Shift_Body_Model(BaseModel):
    
    start_time: datetime
    end_time: datetime = None
    transactions: List[str]
    events: List[str]

