from mongoengine import DynamicDocument, IntField, ListField, DateTimeField, FloatField, StringField,BooleanField

class Shift_Mongo_Document(DynamicDocument):
    operator_id = IntField()
    start_shift = DateTimeField(required=True)
    end_shift = DateTimeField()
    transactions = ListField()
    events = ListField()
    zr_shift_id=IntField()
    shift_sync_zr = BooleanField()
    shift_sync_back_office = BooleanField()