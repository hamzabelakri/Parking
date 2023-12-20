import {useState} from 'react'
import Flatpickr from 'react-flatpickr'

export const Pick_Time_bar: React.FC = () => {
  const [dateState, setDateState] = useState<any>({
    startDate: new Date(),
    endDate: new Date(),
  })

  return (
    <>
      <Flatpickr
        value={dateState.date}
        onChange={([startDate, endDate]) => {
          setDateState({startDate, endDate})
        }}
        options={{
          mode: 'range',
        }}
        className='form-control'
        placeholder='Pick date'
      />
    </>
  )
}
