/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import Transaction_Table from './Transaction_Table/Transaction_Table'
import SearchBar from './SearchBar/Search_Card'
import Search_Card from './SearchBar/Search_Card'

type Props = {
  className: string
}

const Transaction_Details: React.FC<Props> = ({className}) => {
  const intl = useIntl()
  const [image_Data, setImage_Data] = useState('')
  const [transaction_Data, setTransaction_Data] = useState(null);


  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:8000/ws')

    ws.onopen = () => {
      console.log('WebSocket connection opened')
    }

    ws.onmessage = (event) => {
      const data = event.data
      const parsed_data = JSON.parse(data)

      setImage_Data(parsed_data.image)
      setTransaction_Data(parsed_data);

      console.log('Received Data', parsed_data)
    }

    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event.reason)
    }

   
    return () => {
      ws.close()
    }
  }, [])

  const backgroundImageStyle = {
    backgroundSize: '100% 100%',
    backgroundImage: image_Data ? `url("${image_Data}")` : '',
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              {/* <img
              id='kt_contact_map'
              className='img-fluid object-fit-cover h-100 rounded mb-2 mb-lg-0'
              src='https://images.unsplash.com/photo-1627936354732-ffbe552799d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJtdyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
            /> */}
              <div
                className='bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100'
                style={backgroundImageStyle}
              />
            </div>
            <div className='col-7'>
              <Transaction_Table transaction_Data={transaction_Data}/>
            </div>
          </div>
          <div className='separator separator mt-8'></div>
          <div className='mb-4 mt-6'>
            <Search_Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction_Details
