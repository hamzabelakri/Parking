from pydantic import BaseModel

class ticket_data(BaseModel):
    epan : str
    licence_plate : str
    entry_time : str
    card_type : str
    duration_stay : str
    image : str = "data:image/jpeg;base64,"

class article(BaseModel):
    name: str
    price: int

class transaction_bill(BaseModel):
    subtotal: str
    discounts: str
    tax: str
    total: str

class articles_data(BaseModel):
    article_1: article
    article_2: article
    transaction_bill: transaction_bill

class body_update_transaction_data_gui(BaseModel):
    ticket_data: ticket_data
    articles_data: articles_data

class Item(BaseModel):
    name: str
    description: str = None