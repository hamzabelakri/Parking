/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Search from './Search'
import { useIntl } from 'react-intl'

type Props = {
  className: string
}

const Transaction_Details: React.FC<Props> = ({className}) => {
  const intl = useIntl()

  return (
    <div className={`card ${className}`}>
     <div className='card-body'>
        <div className='row mb-3'>
          <div className='col-md-5'>
            <img
              id='kt_contact_map'
              className='img-fluid object-fit-cover h-100 rounded mb-2 mb-lg-0'
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
                  <label className='form-label fs-6 fw-bold text-gray-700'>{intl.formatMessage({id: 'INPUT.LICENCEPLATE'})}</label>

                  <div className='mb-5'>
                    <input type='text' className='form-control ' placeholder='FV64XST' />
                  </div>
                </div>

                <div className='col-lg-6'>
                  <label className='form-label fs-6 fw-bold text-gray-700'>{intl.formatMessage({id: 'INPUT.CARDTYPE'})}</label>

                  <div className='mb-5'>
                    <input type='text' className='form-control ' placeholder='Short Term Parker' />
                  </div>
                </div>
              </div>
              <div className='row gx-10'>
                <div className='col-lg-6'>
                  <label className='form-label fs-6 fw-bold text-gray-700'>{intl.formatMessage({id: 'INPUT.ENTRYTIME'})}</label>

                  <div className='mb-5'>
                    <input type='text' className='form-control ' placeholder='10/11/23 10:02:02' />
                  </div>
                </div>

                <div className='col-lg-6'>
                  <label className='form-label fs-6 fw-bold text-gray-700'>{intl.formatMessage({id: 'INPUT.DURATIONSTAY'})}</label>

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
        <Search/>
        </div>
      </div>
    </div>
  )
}

export default Transaction_Details
