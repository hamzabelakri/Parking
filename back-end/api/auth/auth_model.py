from mongoengine import  DynamicDocument, StringField, EmailField

class Staff_Mongo_Document(DynamicDocument):
    name = StringField
    email = EmailField(required=True, unique=True)
    password = StringField(required=True)
