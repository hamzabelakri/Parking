import React, {useEffect} from 'react'
import {ButtonsData} from '../BarrierSection/ButtonsData'
import {useIntl} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import {add_Event_To_Shift, fetch_All_Shifts} from '../../../../../../redux/Shift/Shift_Action'

const BarrierSection: React.FC = () => {
  const intl = useIntl()
  const dispatch = useDispatch()
  interface Icon {img: string, title: string}
  const {shifts} = useSelector((state: any) => state.Shift_Reducers)
  const shift_id = shifts[0].id
  const handleClick = () => {
    const event = 'close'
    dispatch(add_Event_To_Shift(event, shift_id))
  }

  useEffect(() => {
    dispatch(fetch_All_Shifts())
  }, [])

  const renderIconRow = (icons: Icon[]) => (
    <div className='row'>
      {icons.map((icon: Icon, index: number) => (
        <div key={index} className='col-md-6 my-1'>
          <label
            className='btn btn-outline btn-active-color-primary btn-active-light-primary border border-1 border-primary w-100 p-4'
            data-kt-button='true'
            onClick={handleClick}
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
