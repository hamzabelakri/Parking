import First_Article_Buttons from './Transaction/Article_Buttons/First_Article_Buttons/First_Article_Buttons'
import Second_Article_Buttons from './Transaction/Article_Buttons/Second_Article_Buttons/Second_Article_Buttons'
import Checkout from './Checkout/Chekout'
import Transaction_Details from './Transaction/Transaction_Details'
import {useEffect, useState} from 'react'
import {toast,Toaster} from 'react-hot-toast'

const MainPage: React.FC = () => {
  const [transaction_Data, setTransaction_Data] = useState(null)

  const handleWebSocket = () => {
    let ws = new WebSocket('ws://127.0.0.1:8000/ws');
  
    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };
  
    ws.onmessage = (event) => {
      const data = event.data;
      const parsed_data = JSON.parse(data);
      console.log('Received Data', parsed_data);
  
      setTransaction_Data(parsed_data);
    };
  
    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event.reason);
      toast.loading('WebSocket connection closed. Reconnecting...')
      setTimeout(() => {
        handleReconnect();
      }, 5000);
    };
  
    const handleReconnect = () => {
      ws = new WebSocket('ws://127.0.0.1:8000/ws');
      handleWebSocket(); 
    };
  
    return () => {
      ws.close();
    };
  };
  

  useEffect(() => {
    handleWebSocket()
  }, [])

  return (
    <>
      <div className='row g-5 g-xl-8'>
      <Toaster position='top-center' reverseOrder={false} />
        <div className='col-xl-8'>
          <div>
            <Transaction_Details data={transaction_Data} className='card-xl-stretch mb-5 mb-xl-8' />
            <First_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' />
            <Second_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' />
          </div>
        </div>
        <div className='col-xl-4'>
          <Checkout data={transaction_Data} className='card-xl-stretch mb-xl-8' />
        </div>
      </div>
    </>
  )
}

export default MainPage
