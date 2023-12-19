import React from 'react'
import {useIntl} from 'react-intl'

const Transaction_Table = () => {
  const intl = useIntl()
  return (
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
          <label className='form-label fs-6 fw-bold text-gray-700'>
            {intl.formatMessage({id: 'INPUT.LICENCEPLATE'})}
          </label>

          <div className='mb-5'>
            <input type='text' className='form-control ' placeholder='FV64XST' />
          </div>
        </div>

        <div className='col-lg-6'>
          <label className='form-label fs-6 fw-bold text-gray-700'>
            {intl.formatMessage({id: 'INPUT.CARDTYPE'})}
          </label>

          <div className='mb-5'>
            <input type='text' className='form-control ' placeholder='Short Term Parker' />
          </div>
        </div>
      </div>
      <div className='row gx-10'>
        <div className='col-lg-6'>
          <label className='form-label fs-6 fw-bold text-gray-700'>
            {intl.formatMessage({id: 'INPUT.ENTRYTIME'})}
          </label>

          <div className='mb-5'>
            <input type='text' className='form-control ' placeholder='10/11/23 10:02:02' />
          </div>
        </div>

        <div className='col-lg-6'>
          <label className='form-label fs-6 fw-bold text-gray-700'>
            {intl.formatMessage({id: 'INPUT.DURATIONSTAY'})}
          </label>

          <div className='mb-5'>
            <input type='text' className='form-control ' placeholder='4h' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction_Table
