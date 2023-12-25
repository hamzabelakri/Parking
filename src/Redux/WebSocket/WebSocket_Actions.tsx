import {SET_WEBSOCKET} from './Types'
export const setWebSocket = (ws) => ({
    type: 'SET_WEBSOCKET',
    payload: ws,
  });
  
  export const createWebSocket:any = () => {
    const ws = new WebSocket('ws://127.0.0.1:8000/ws');
  
    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };
  
    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event.reason);
    };
  
    return ws;
  };
  