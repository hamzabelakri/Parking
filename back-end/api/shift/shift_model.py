from mongoengine import DynamicDocument, StringField, ListField, DateTimeField, EmailField

class Shift_Mongo_Document(DynamicDocument):
    email = EmailField()
    start_shift = DateTimeField(required=True)
    end_shift = DateTimeField()
    transactions = ListField()
    events = ListField()
    