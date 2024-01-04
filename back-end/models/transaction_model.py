from pydantic import BaseModel

class Ticket_Body_Model(BaseModel):
    epan : str
    licence_plate : str
    entry_time : str
    entry_unit : str
    card_type : str
    duration_stay : str
    image : str = "data:image/jpeg;base64,"

