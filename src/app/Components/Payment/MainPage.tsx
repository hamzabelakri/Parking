import Checkout from './Checkout/Checkout'
import Form from './Form'
import _Actions from './ControlButtons/Second_set_buttons'
import Second_set_buttons from './ControlButtons/Second_set_buttons'
import First_set_buttons from './ControlButtons/Actions'

const MainPage = () => {
  return (
    <>
      <div className='row gy-5 g-xl-8'>
        <div className='col-xl-8'>
          <div className='card-xl mb-xl-8'>
            <Form />
            <First_set_buttons />
            <Second_set_buttons />
          </div>
        </div>
        <div className='col-xl-4 '>
          <div className='card-xl mb-xl-8 '>
            <Checkout />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
