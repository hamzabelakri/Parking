import Checkout from './Checkout'
import Form from './Form'
import Actions from './Actions'

const MainPage = () => {
  return (
    <>
      <div className='row gy-5 g-xl-8'>
        <div className='col-xl-8'>
          <div className='card-xl mb-xl-8'>
            <Form />
            <Actions />
          </div>
        </div>
        <div className='col-xl-4'>
          <div className='card-xl mb-xl-8'>
            <Checkout />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
