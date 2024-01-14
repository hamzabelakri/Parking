from pydantic import BaseModel
from typing import List

class Shift_Body_Model(BaseModel):
    
    transaction: List[str]
    events: List[str]

