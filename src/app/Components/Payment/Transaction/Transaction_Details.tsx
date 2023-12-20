/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useIntl} from 'react-intl'
import Transaction_Table from './Transaction_Table/Transaction_Table'
import SearchBar from './SearchBar/Search_Card'

type Props = {
  className: string
}

const Transaction_Details: React.FC<Props> = ({className}) => {
  const intl = useIntl()

  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <div className='row mb-3'>
          <div className='col-md-5'>
            {/* <img
              id='kt_contact_map'
              className='img-fluid object-fit-cover h-100 rounded mb-2 mb-lg-0'
              src='https://images.unsplash.com/photo-1627936354732-ffbe552799d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJtdyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
            /> */}
             <div
                className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100"
                style={{
                  backgroundSize: "100% 100%",
                  backgroundImage: 'url("https://images.unsplash.com/photo-1627936354732-ffbe552799d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJtdyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
                }}
              />
          </div>

          <div className='col-md-7 d-flex align-items-center'>
          <Transaction_Table/>
          </div>
        </div>
        {/* second form */}
        <div className='separator separator mt-8'></div>
        <div className='mb-4 mt-6'>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Transaction_Details
