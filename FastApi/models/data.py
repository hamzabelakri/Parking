from pydantic import BaseModel

class Data(BaseModel):
    name: str
    description: str
    complete: bool


class PostData(BaseModel):
    
    ip: str
    port: int
    selectedZR: str
    selectedPos: str