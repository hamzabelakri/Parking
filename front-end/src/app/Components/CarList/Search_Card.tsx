import React from 'react'
import {useIntl} from 'react-intl'
import { Pick_Time_bar } from '../Payment/Transaction/SearchBar/Pick_Time_bar'

const Search_Card: React.FC = () => {
  const intl = useIntl()

  return (
    <>
      <div className='card'>
        <div className='card-body '>
          <div className='container'>
            <div className='row '>
              <div className='row col  justify-content-center'>
                <div className='col-auto'>
                  <label className='col-form-label'>
                    {intl.formatMessage({id: 'INPUT.LICENCEPLATE'})}
                  </label>
                </div>
                <div className='col-7'>
                  <input type='text' className='form-control' placeholder='FV...' />
                </div>
              </div>
              <div className='row col  justify-content-center'>
                <div className='col-auto'>
                  <label className='col-form-label'>
                    {intl.formatMessage({id: 'INPUT.TIMEINTERVAL'})}
                  </label>
                </div>
                <div className='col-7'>
                  <Pick_Time_bar />
                </div>
              </div>
              <div
                className='col-2  d-flex justify-content-end'
                data-kt-button='true'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_1'
              >
                <button type='submit' className='btn btn-primary '>
                  {intl.formatMessage({id: 'SEARCH.BUTTON'})}
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Search_Card
