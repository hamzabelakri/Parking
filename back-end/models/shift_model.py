from pydantic import BaseModel

class Shift_Body_Model(BaseModel):
    
    transaction: list
    events: list
