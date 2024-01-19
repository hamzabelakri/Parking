from mongoengine import DynamicDocument, IntField, ListField, DateTimeField, FloatField, StringField,BooleanField

class Payment_Model(DynamicDocument):
    zr_produce_syn: BooleanField()
    zr_flow_sync: BooleanField()
    back_office_synch: BooleanField()
    article_id: IntField()
    amount_paid: FloatField()
    payment_type: StringField()
    ticket_type: StringField()


class Shift_Mongo_Document(DynamicDocument):
    operator_id = IntField()
    start_shift = DateTimeField(required=True)
    end_shift = DateTimeField()
    transactions = ListField(Payment_Model)
    events = ListField()
    zr_shift_id=IntField()
    shift_sync_zr = BooleanField()
    shift_sync_back_office = BooleanField()
