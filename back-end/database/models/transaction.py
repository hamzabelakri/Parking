from mongoengine import ListField, ReferenceField, Document, DynamicDocument, StringField, IntField, DateTimeField
from datetime import datetime

class Ticket_Data(DynamicDocument):
    epan = StringField(required=True)
    licence_plate = StringField(required=True)
    created_at = DateTimeField(default=datetime.now)
    entry_time = StringField(required=True)
    card_type = StringField(required=True)
    duration_stay = StringField(required=True)
    image = StringField(required=True)
    
class Article(DynamicDocument):
    name = StringField(required=True)
    price = IntField(required=True)    

class Transaction_Bill(DynamicDocument):
    subtotal = IntField(required=True)
    discounts = IntField(required=True)
    tax = IntField(required=True)
    discounts_total = IntField(required=True)  

class Articles_Data(DynamicDocument):
    article_1 = ListField(ReferenceField(Article), required=True)
    article_2 = ListField(ReferenceField(Article), required=True)
    transaction_bill = ListField(ReferenceField(Transaction_Bill), required=True)

class Transaction_Document(DynamicDocument):
    ticket_data = ListField(ReferenceField(Ticket_Data), required=True)
    articles_data = ListField(ReferenceField(Articles_Data), required=True)
