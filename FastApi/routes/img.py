import json
from fastapi import APIRouter, WebSocket,WebSocketDisconnect
import base64
from time import sleep
from datetime import datetime

router=APIRouter()

class ConnectionManager:
    def __init__(self):
        self.active_connections = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_message(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

manager = ConnectionManager()

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            
            #await websocket_manager.send_message(f"Message from WebSocket: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)

@router.get("/get_transaction_data/{message}")
async def send_message(message: str):
    with open(message, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")

    data_to_send = {
        'ticket_data':{
           "epan":"text",
           "licence_plate":"plate",
           "entry_time":"datetime",
           "card_type":"card_type",
           "duration_stay":"duration",
           "image":f"data:image/jpeg;base64,{image_data}",
        },
        'articles_data':{
           "article_1":{
               "name":"Short Term Parker", 
               "price":66.00
               },
           "article_2":{
               "name":"Lost Ticket", 
               "price":100.00
               },
           "transaction_bill":{
               "subtotal":"100.50",
               "discounts":"8.00",
               "tax":"11.20",
               "total":"93.46",
           }    
           
        },
    }
    await manager.send_message(json.dumps(data_to_send))
    #await manager.send_message(f"data:image/jpeg;base64,{image_data}")
    print("data sent")
    return {"message_sent": data_to_send}


