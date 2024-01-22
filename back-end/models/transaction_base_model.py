from pydantic import BaseModel
from datetime import datetime

class Ticket_Body_Model(BaseModel):
    image : str = "data:image/jpeg;base64,"
    epan : str
    licence_plate : str
    card_type : str
    entry_unit : str
    entry_time : datetime
    duration_stay : str
    

