import React from 'react'

const Search = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body '>
          <div className='container'>
            <div className='row '>
              <div className='row col  justify-content-center'>
                <div className='col-auto'>
                  <label className='col-form-label'>Licence Plate</label>
                </div>
                <div className='col-7'>
                  <input type='password' className='form-control' placeholder='FV...' />
                </div>
              </div>
              <div className='row col  justify-content-center'>
                <div className='col-auto'>
                  <label className='col-form-label'>Time Interval</label>
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
                  Search
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
