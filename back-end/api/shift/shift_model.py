from mongoengine import DynamicDocument, StringField, ListField, DateTimeField, EmailField

class Shift_Mongo_Document(DynamicDocument):
    
    start_time = DateTimeField(required=True)
    end_time = DateTimeField()
    transactions = ListField()
    events = ListField()
    
