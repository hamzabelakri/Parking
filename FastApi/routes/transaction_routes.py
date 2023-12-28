import json
from fastapi import APIRouter, WebSocket,WebSocketDisconnect, HTTPException
from routes.websocket_connection import manager
import base64
from models.transaction_models import body_update_transaction_data_gui
import random,os
router=APIRouter()

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            
            #await websocket_manager.send_message(f"Message from WebSocket: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)


@router.post("/update_transaction_data_gui")
async def update_transaction_data_gui(body: body_update_transaction_data_gui):
    print(type(body.model_dump_json()))
    await manager.send_message(body.model_dump_json())
    return body

@router.post("/update_transaction_data_gui2")
async def update_transaction_data_gui(body: body_update_transaction_data_gui):
    random_file=random.choice(os.listdir("./car-plates"))
    with open(f'./car-plates/{random_file}', "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")
    print("selected img : ",random_file)
    body.ticket_data.image=f'data:image/jpeg;base64,{image_data}'
    #print(type(body.model_dump_json()))
    await manager.send_message(body.model_dump_json())
    return {'sent successfully'}
    

@router.get("/test_ink_status")
async def test_ink_status():

    try:
        message = {"ink_status": "ink_out"}
        await manager.send_message(json.dumps(message))
        return {"message": "Test ink status message sent"}
    except WebSocketDisconnect:
        raise HTTPException(status_code=500, detail="WebSocket is not connected")




'''@router.get("/get_transaction_data/{message}")
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
    return {"message_sent": data_to_send}'''