from mongoengine import ListField, ReferenceField, Document, DynamicDocument, StringField, IntField, DateTimeField
from datetime import datetime

class Entry_Ticket_Mongo_Document(DynamicDocument):
    epan = StringField(required=True)
    licence_plate = StringField(required=True)
    created_at = DateTimeField(default=datetime.now)
    entry_time = StringField()
    entry_unit = StringField()
    card_type = StringField()
    duration_stay = StringField()
    image = StringField()
    
""" class Article(DynamicDocument):
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

class Transaction_Document(Document):
    ticket_data = ReferenceField(Ticket_Mongo_Document, required=True)
    articles_data = ReferenceField(Articles_Data, required=True) """