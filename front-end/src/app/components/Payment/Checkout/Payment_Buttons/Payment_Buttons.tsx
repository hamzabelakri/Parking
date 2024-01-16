import React, {useState} from 'react'
import {ButtonsData} from './ButtonsData'
import {useIntl} from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { add_transaction_to_shift } from '../../../../../redux/Transaction/Transaction_Action'

const Payment_Buttons: React.FC = () => {
  const dispatch=useDispatch()
  const intl = useIntl()
  const shift_id='65a5458a508567c39949a5b6'
  const {filtered_data} = useSelector((state: any) => state.Transaction_Reducers)
  console.log(filtered_data)
  const handleClick = (state: any) =>{
    dispatch(add_transaction_to_shift(filtered_data,shift_id))
  }
  return (
    <>
      <div className='card shadow-sm' onClick={handleClick}>
        <div
          className='d-flex flex-equal gap-4 px-4 py-4'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {ButtonsData.map((data, index: number) => (
            <label
              key={index}
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-1 border-primary border-active-primary btn-active-light-primary w-100 px-4 py-2'
            >
              <input className='btn-check' type='radio' name='method' defaultValue={0} />

              {data.img}

              <span className='fs-7 fw-bold d-block'>{intl.formatMessage({id: data.title})}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  )
}

export default Payment_Buttons
