import React, {useEffect, useState} from 'react'
import {CustomToast, Toast} from './CustomToast'
import DropDownBox from './DropDownBox'

const SelectServer = ({data}) => {
  const [option, setOption] = useState('')
  const [loading, setLoading] = useState(false)

console.log("data : ",data)

  return (
    <div>
      <DropDownBox label='Server' name={option} 
      value={option} data={data} setOption=''/> 

   
      {/* <div className='row mb-6'>
        <label className='col-lg-2 col-form-label required fw-bold fs-6'>Server POS</label>
        <div className='col-lg-4 fv-row'>
          <select
            className='form-select form-select-solid form-select-lg'
            name='option'
            value=""
          >
            <option value=''>Select a server..</option>
            {data.map((elt)=>
            
            <option key={elt.ID} value={elt.ID}>{elt.name} : {elt.port}</option>)}
          </select>
        </div>
        
      </div>  */}
    </div>
  )
}

export default SelectServer
