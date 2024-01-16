from pydantic import BaseModel

class Staff_Body_Model(BaseModel):
    id:str
    name: str
    email: str
    password: str

class Staff_Register_Model(BaseModel):
    name: str
    email: str
    password: str

class Staff_Login_Model(BaseModel):
    email: str
    password: str

class Staff_Logout_Model(BaseModel):
    email: str
      