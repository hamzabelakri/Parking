import React from 'react'
import {useIntl} from 'react-intl'

const Search: React.FC = () => {
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
                  <input type='password' className='form-control' placeholder='FV...' />
                </div>
              </div>
              <div className='row col  justify-content-center'>
                <div className='col-auto'>
                  <label className='col-form-label'>
                    {intl.formatMessage({id: 'INPUT.TIMEINTERVAL'})}
                  </label>
                </div>
                <div className='col-7'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='3/15 08:00 PM - 4/18 04:00 AM'
                  />
                </div>
              </div>
              <div className='col-2  d-flex justify-content-end'>
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

export default Search
