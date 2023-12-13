import React from 'react'
import {BarrierIcons} from '../CheckoutIcons'

const BarrierSection = () => {
  return (
    
      <div className='card mb-5 '>
        <div
          className='d-flex flex-equal gap-5 gap-xxl-9 px-2 py-2'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {BarrierIcons.map((icon, index) => (
            <label
              key={index}
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
            >
              <input className='btn-check' type='radio' name='method' defaultValue={0} />

              <img src={icon.img} alt={icon.title} className='icon-img' />

              <span className='fs-7 fw-bold d-block'>{icon.title}</span>
            </label>
          ))}
        </div>
      </div>
      
 
  )
}

export default BarrierSection
