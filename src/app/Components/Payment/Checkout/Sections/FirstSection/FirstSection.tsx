import React, {useState} from 'react'
import BarrierSection from '../BarrierSection/BarrierSection'
import {ButtonsData} from './ButtonsData'
import {useIntl} from 'react-intl'

const FirstSection: React.FC = () => {
  const [showBarrierSection, setShowBarrierSection] = useState(false)

  const handleButtonClick = (icon) => {
    if (icon.title === 'Barrier') {
    }

    setShowBarrierSection(icon)
  }
  const intl = useIntl()

  return (
    <>
      <div className='card mb-5 shadow-sm'>
        <div
          className='d-flex flex-equal  gap-xxl-4 px-4 py-4'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {ButtonsData.map((data, index: number) => (
            <label
              key={index}
              className='btn bg-light btn-color-gray-600 btn-active-light-primary border border-1 border-primary border-active-primary w-100 px-4 py-5'
              data-kt-button='true'
              onClick={handleButtonClick}
            >
              <input className='btn-check svg-icon svg-icon-1"' type='radio' name='method' defaultValue={index} />

              {data.img}
              <span className='fs-7 fw-bold d-block mt-2'>{intl.formatMessage({id: data.title})}</span>
            </label>
          ))}
        </div>
      </div>

      {showBarrierSection && <BarrierSection />}
    </>
  )
}

export default FirstSection
