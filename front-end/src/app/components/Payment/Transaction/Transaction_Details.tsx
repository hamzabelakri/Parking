/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import Transaction_Table from './Transaction_Table/Transaction_Table'
import Search_Card from './Search_Bar/Search_Card'
import {useSelector} from 'react-redux'

type Props = {
  className: string
}
const Transaction_Details: React.FC<Props> = ({className}) => {
  const {data} = useSelector((state: any) => state.Websocket_Reducers)
  const image = data?.ticket_data?.image
  
  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
       
              <div
                className='bgi-position-center h-100 bgi-no-repeat bgi-size-contain'
                style={{backgroundImage: image ? `url("${image}")` : `url('media/svg/files/blank-image.svg')`}}
              />
            </div>
            <div className='col-7'>
              <Transaction_Table />
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
