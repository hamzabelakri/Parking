/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import Transaction_Table from './Transaction_Table/Transaction_Table'
import Search_Card from './SearchBar/Search_Card'

type Props = {
  className: string
  data
}

const Transaction_Details: React.FC<Props> = ({className, data}) => {
  const image = data?.ticket_data.image
  const backgroundImageStyle = {
    backgroundSize: '100% 100%',
    backgroundImage: image ? `url("${image}")` : `url('media/svg/files/blank-image.svg')`,
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
              <Transaction_Table data={data}/>
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
