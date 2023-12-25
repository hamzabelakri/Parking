// webSocketReducer.ts
const initialState = {
    ws: null,
  };
  
  const webSocketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_WEBSOCKET':
        return {
          ...state,
          ws: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default webSocketReducer;
  