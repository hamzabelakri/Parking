import React, {useEffect, useState} from 'react'
import {CustomToast, Toast} from './CustomToast'
import DropDownBox from './DropDownBox'

const SelectServer = ({data}) => {
  const [option, setOption] = useState('')
  const [loading, setLoading] = useState(false)

  interface ConfigData {
    ID: number
    name: string
    port: number
  }

  return (
    <div>
      <DropDownBox label='Server' name={option} value={option} data={data} />

      {/* 
      <div className='row mb-6'>
        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server POS</label>
        <div className='col-lg-4 fv-row'>
          <select
            className='form-select form-select-solid form-select-lg'
            name='option'
            value={option}
          >
            <option value=''>Select a server..</option>
          </select>
        </div>
        <div className='col-lg-4 fv-row'>
          <button className='btn btn-primary'>Select</button>
        </div>
      </div> */}
    </div>
  )
}

export default SelectServer
