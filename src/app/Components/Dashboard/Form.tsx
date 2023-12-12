import React from 'react'
import Search from './Search'

const Form: React.FC = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='row mb-3'>
          <div className='col-md-5'>
            <img
              id='kt_contact_map'
              className='img-fluid object-fit-cover h-100 rounded mb-2 mb-lg-0 mt-2'
              src='https://images.unsplash.com/photo-1627936354732-ffbe552799d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJtdyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
            />
          </div>

          <div className='col-md-7 d-flex align-items-center'>
            <div className='mb-0'>
              <div className='row gx-10'>
                <div className='col-lg-12'>
                  <label className='form-label fs-6 fw-bold text-gray-700'>EPAN</label>

                  <div className='mb-5'>
                    <input type='text' className='form-control ' placeholder='123456789123456789???' />
                  </div>
                </div>
              </div>
              <div className='row gx-10'>
                <div className='col-lg-6'>
                  <label className='form-label fs-6 fw-bold text-gray-700'>Licence Plate</label>

                  <div className='mb-5'>
                    <input type='text' className='form-control ' placeholder='FV64XST' />
                  </div>
                </div>

                <div className='col-lg-6'>
                  <label className='form-label fs-6 fw-bold text-gray-700'>Card Type</label>

                  <div className='mb-5'>
                    <input type='text' className='form-control ' placeholder='Short Term Parker' />
                  </div>
                </div>
              </div>
              <div className='row gx-10'>
                <div className='col-lg-6'>
                  <label className='form-label fs-6 fw-bold text-gray-700'>Entry Time</label>

                  <div className='mb-5'>
                    <input type='text' className='form-control ' placeholder='10/11/23 10:02:02' />
                  </div>
                </div>

                <div className='col-lg-6'>
                  <label className='form-label fs-6 fw-bold text-gray-700'>Duration Stay</label>

                  <div className='mb-5'>
                    <input type='text' className='form-control ' placeholder='4h' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second form */}
        <div className="separator separator mt-8"></div>
        <div className='mb-4 mt-6'>
          <Search />
        </div>
      </div>
      {/*end::Body*/}
    </div>
  )
}

export default Form
