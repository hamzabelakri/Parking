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
  console.log("payload",payload)
  
  
const shift_transaction = {
  action_time: "2022-01-20T12:00:00",
  ticket_price: 25.0,
  licence_plate: "ABC123",
  epan: "example_epan",
  entry_time: "2022-01-20T11:30:00",
  duration_stay: "2 hours",
  card_type: "example_card_type",
  image: null,
  payments: {
    article_id: "example_article_id",
    amount_paid: 20.0,
    payment_type: "Cash",
    ticket_type: "Regular",
    zr_produce_syn: false,
    zr_flow_sync: false,
    back_office_synch: false,
  },
};


  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
    dispatch(add_Transaction_To_Shift(shift_transaction, shift_id))

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
              
            >
              <input className='btn-check' type='radio' name='method' defaultValue={0} onClick={() => handleButtonClick(index)}/>
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
