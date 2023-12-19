import First_Article_Buttons from './Transaction/Article_Buttons/First_Article_Buttons/First_Article_Buttons'
import Second_Article_Buttons from './Transaction/Article_Buttons/Second_Article_Buttons/Second_Article_Buttons'
import Checkout from './Checkout/Chekout'
import Transaction_Details from './Transaction/Transaction_Details'

const MainPage: React.FC = () => {
  return (
    <>
      <div className='row g-5 g-xl-8'>
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

export default MainPage
