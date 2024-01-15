from pydantic import BaseModel

class Staff_Body_Model(BaseModel):
    
    email: str
    password: str
