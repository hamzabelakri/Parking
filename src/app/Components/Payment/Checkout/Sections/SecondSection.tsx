import React, {useState} from 'react'
import {PaymentIcons} from '../CheckoutIcons'
import CarTable from '../../../CarList/CarTable'

const SecondSection = () => {
  return (
    <>
      <div className='card'>
        <div
          className='d-flex flex-equal gap-5 gap-xxl-9 px-2 py-2'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {PaymentIcons.map((icon, index) => (
            <label
              key={index}
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_1'
            >
              <input className='btn-check' type='radio' name='method' defaultValue={0} />

              {icon.img}

              <span className='fs-7 fw-bold d-block'>{icon.title}</span>
            </label>
          ))}
        </div>
      </div>
      <div className='modal fade" tabIndex={-1}' id='kt_modal_1'>
        <div className='modal-dialog modal-dialog-centered mw-900px'>
          <div className='modal-content'>
            <CarTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondSection
