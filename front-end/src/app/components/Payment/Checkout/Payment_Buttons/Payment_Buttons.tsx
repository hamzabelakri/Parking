import React, {useState} from 'react'
import {ButtonsData} from './ButtonsData'
import {useIntl} from 'react-intl'
import {useDispatch, useSelector} from 'react-redux'
import {add_Transaction_To_Shift} from '../../../../../redux/Shift/Shift_Action'

const Payment_Buttons: React.FC = () => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const {shifts} = useSelector((state: any) => state.Shift_Reducers)
  const {data} = useSelector((state: any) => state.Websocket_Reducers)
  const articles_data = data.articles_data
  const shift_id = shifts?.at(-1)?.id
  const {filtered_data} = useSelector((state: any) => state.Transaction_Reducers)
  const payload = {articles_data, filtered_data}
  console.log(payload)
  const handleClick = () => {
    dispatch(add_Transaction_To_Shift(payload, shift_id))
  }
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

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
              className={`btn btn-color-gray-600 btn-active-text-gray-800 w-100 px-4 py-2 ${selectedButton === index
                ? 'border-2 border-blue-500 btn-outline '
                : 'border-1'
                }`}
              style={{
                backgroundColor: selectedButton === index ? '#EEF6FF' : '#F1F1F2',
                color: selectedButton === index ? '#3E97FF' : '',
                border: selectedButton === index ? '1px solid #3E97FF' : '1.58px solid #D8D8E5',
              }}
              onClick={() => handleButtonClick(index)}
            >
              <input className='btn-check' type='radio' name='method' defaultValue={0} />
              {data.img}
              <span className='fs-7 fw-bold d-block'>{intl.formatMessage({ id: data.title })}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  )
}

export default Payment_Buttons
