from mongoengine import DynamicDocument, StringField, ListField

class Shift_Mongo_Document(DynamicDocument):
    
    transaction = ListField()
    events = ListField()
