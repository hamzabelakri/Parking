from pydantic import BaseModel
from datetime import datetime

class Ticket_Body_Model(BaseModel):
    epan : str
    licence_plate : str
    entry_time : datetime
    entry_unit : str
    card_type : str
    duration_stay : str
    image : str = "data:image/jpeg;base64,"

