import Checkout from './Checkout/Chekout'
import First_set_buttons from './ControlButtons/First_set_buttons/First_set_buttons'
import Second_set_buttons from './ControlButtons/Second_set_buttons/Second_set_buttons'
import Form from './Form'

const MainPage: React.FC = () => {
  return (
    <>
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-8'>
          <div>
            <Form className='card-xl-stretch mb-5 mb-xl-8' />
            <First_set_buttons className='card-xl-stretch mb-5 mb-xl-8' />
            <Second_set_buttons className='card-xl-stretch mb-5 mb-xl-8' />
          </div>
        </div>
        <div className='col-xl-4'>
          <Checkout className='card-xl-stretch mb-xl-8' />
        </div>
      </div>
    </>
  )
}

export default MainPage
