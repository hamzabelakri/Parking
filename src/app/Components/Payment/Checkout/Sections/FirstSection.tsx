import React, {useState} from 'react'
import {Icons} from '../CheckoutIcons'
import BarrierSection from './BarrierSection'

const FirstSection = () => {
  const [showBarrierSection, setShowBarrierSection] = useState(false)

  const handleButtonClick = (icon) => {
    if (icon.title === 'Barrier') {
    }

    setShowBarrierSection(icon)
  }
  return (
    <>
      <div className='card mb-5'>
        <div
          className='d-flex flex-equal gap-5 gap-xxl-9 px-2 py-2'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {Icons.map((icon, index) => (
            <label
              key={index}
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
              onClick={handleButtonClick}
            >
              <input className='btn-check' type='radio' name='method' defaultValue={index} />

              {icon.img}
              <span className='fs-7 fw-bold d-block'>{icon.title}</span>
            </label>
          ))}
        </div>
      </div>

      {showBarrierSection && <BarrierSection />}
    </>
  )
}

export default FirstSection
