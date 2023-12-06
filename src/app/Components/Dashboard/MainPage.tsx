import {Mixed} from '../../modules/widgets/components/Mixed'
import Payment from './Payment'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'
import Table from './Table'

const MainPage = () => {
  return (
    <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
      <div className='d-flex flex-column flex-column-fluid'>
        <div id='kt_app_content' className='app-content flex-column-fluid'>
          <div id='kt_app_content_container' className='app-container container-xxl'>
            <div className='d-flex flex-column flex-xl-row'>
              <div className='d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0'>
                <Table />
              </div>
              <div className='flex-row-auto w-xl-450px'>
                <Payment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
