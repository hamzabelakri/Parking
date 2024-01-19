from mongoengine import ListField, ReferenceField, Document, DynamicDocument, StringField, IntField, DateTimeField
from datetime import datetime

class Entry_Ticket_Mongo_Document(DynamicDocument):
    epan = StringField(required=True)
    licence_plate = StringField(required=True)
    created_at = DateTimeField(default=datetime.now)
    entry_time = DateTimeField()
    entry_unit = StringField()
    card_type = StringField()
    duration_stay = StringField()
    image = StringField()

