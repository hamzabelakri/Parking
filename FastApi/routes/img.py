from fastapi import APIRouter, WebSocket
import base64

router=APIRouter()


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    print('Connected to Client')
    await websocket.accept()

    with open("car2.jpg", "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")

    await websocket.send_text(f"data:image/jpeg;base64,{image_data}")
    print("Image sent")
    