import React, {useState} from 'react'
import {ButtonsData} from '../BarrierSection/ButtonsData'
import {useIntl} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import {add_Event_To_Shift} from '../../../../../../redux/Shift/Shift_Action'

interface Icon {
  img: string
  title: string
}

const BarrierSection: React.FC = () => {
  const intl = useIntl()
  const [clickedButton, setClickedButton] = useState<number | null>(null)
  const dispatch = useDispatch()
  const {shifts} = useSelector((state: any) => state.Shift_Reducers)
  const shift_id = shifts?.at(-1)?.id
  const handleButtonClick = (index: number) => {
    setClickedButton((prevIndex) => (prevIndex === index ? null : index))
    const event = 'close'
    dispatch(add_Event_To_Shift(event, shift_id))
  }

  const renderIconRow = (icons: Icon[], startIndex: number) => (
    <div className='row'>
      {icons.map((icon: Icon, index: number) => (
        <div key={index} className='col-md-6 my-1'>
          <label
            className={`btn w-100 p-4 d-flex justify-content-center align-items-center gap-3 ${
              clickedButton === startIndex + index ? 'clicked' : ''
            }`}
            style={{
              boxSizing: 'border-box',
              border:
                clickedButton === startIndex + index ? '3px solid #3E97FF' : '1px solid #D8D8E5',
            }}
            onClick={() => handleButtonClick(startIndex + index)}
          >
            <img src={icon.img} alt='' className='icon-img' />
            <span className='fw-bold' style={{fontSize: '14px'}}>
              {intl.formatMessage({id: icon.title})}
            </span>
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
          {renderIconRow(ButtonsData.slice(0, 2), 0)}
          {renderIconRow(ButtonsData.slice(2, 4), 2)}
        </div>
      </div>
      <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
        <div className='modal-dialog modal-dialog-centered mw-900px'>
          <div className='modal-content'></div>
        </div>
      </div>
    </>
  )
}

export default BarrierSection
