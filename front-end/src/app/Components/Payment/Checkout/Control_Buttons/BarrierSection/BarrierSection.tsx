import React from 'react'
import {ButtonsData} from '../BarrierSection/ButtonsData'
import {useIntl} from 'react-intl'

const BarrierSection: React.FC = () => {
  const intl = useIntl()

  interface Icon {
    img: string
    title: string
  }

  const renderIconRow = (icons: Icon[]) => (
    <div className='row'>
      {icons.map((icon: Icon, index: number) => (
        <div key={index} className='col-md-6 my-1'>
          <label
            className='btn btn-outline btn-active-color-primary btn-active-light-primary border border-1 border-primary w-100 p-4'
            data-kt-button='true'
          >
            
            <img src={icon.img} alt='' className='icon-img' />
            <span className='fs-8 fw-bold'>{intl.formatMessage({id: icon.title})}</span>
          </label>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <div className='card mb-5 shadow-sm '>
        <div
          className='d-flex flex-column gap-xxl-0 px-4 py-4'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {renderIconRow(ButtonsData.slice(0, 2))}
          {renderIconRow(ButtonsData.slice(2, 4))}
        </div>
      </div>
      <div className='modal fade" tabIndex={-1}' id='kt_modal_1'>
        <div className='modal-dialog modal-dialog-centered mw-900px'>
          <div className='modal-content'></div>
        </div>
      </div>
    </>
  )
}

export default BarrierSection
