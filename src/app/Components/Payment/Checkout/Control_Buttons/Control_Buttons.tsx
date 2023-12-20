import React, {useState} from 'react'
import {ButtonsData} from './ButtonsData'
import {useIntl} from 'react-intl'
import BarrierSection from './BarrierSection/BarrierSection'

const Control_Buttons: React.FC = () => {
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
          className='d-flex flex-equal gap-4 px-4 py-4'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {ButtonsData.map((data, index: number) => (
            <label
              key={index}
              data-bs-target='#kt_accordion_1_body_1'
              data-bs-toggle='collapse'
              className='btn bg-light btn-color-gray-600 btn-active-light-primary border border-1 border-primary border-active-primary  w-100 px-4 py-5 '
              onClick={handleButtonClick}
            >
              <input className='btn-check' type='radio' name='method' defaultValue={0} />

              <img src={data.img} />

              <span className='fs-7 fw-bold d-block'>{intl.formatMessage({id: data.title})}</span>
            </label>
          ))}
        </div>
      </div>
      <div id='kt_accordion_1_body_1' className='accordion-collapse collapse'>
        <BarrierSection />
      </div>
    </>
  )
}

export default Control_Buttons
