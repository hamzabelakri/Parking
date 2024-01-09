import First_Article_Buttons from './Transaction/Article_Buttons/First_Article_Buttons/First_Article_Buttons'
import Second_Article_Buttons from './Transaction/Article_Buttons/Second_Article_Buttons/Second_Article_Buttons'
import Checkout from './Checkout/Chekout'
import Transaction_Details from './Transaction/Transaction_Details'
import {useEffect} from 'react'
import {Toaster} from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import {open_Web_Socket} from '../../../redux/WebSocket/WebSocket_Actions'

const Main_Page: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(open_Web_Socket())
  }, [])

  return (
    <>
      <div className='row g-5 g-xl-8'>
        <Toaster position='top-center' reverseOrder={false} />
        <div className='col-xl-8'>
          <div>
            <Transaction_Details className='card-xl-stretch mb-5 mb-xl-8' />
            <First_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' />
            <Second_Article_Buttons className='card-xl-stretch mb-5 mb-xl-8' />
          </div>
        </div>
        <div className='col-xl-4'>
          <Checkout className='card-xl-stretch mb-xl-8' />
        </div>
      </div>
    </>
  )
}

export default Main_Page
