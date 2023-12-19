import React, {useState} from 'react'
import CarTable from '../../../../CarList/CarTable'
import {ButtonsData} from './ButtonsData'
import {useIntl} from 'react-intl'

const SecondSection: React.FC = () => {
  const intl = useIntl()

  return (
    <>
      <div className='card shadow-sm'>
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

export default SecondSection
