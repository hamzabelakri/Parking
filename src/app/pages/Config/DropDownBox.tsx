import React, { useState } from 'react'

const DropDownBox = ({name, value, label, data, setOption}) => {
  const [selectedServer, setSelectedServer]=useState(null);
 // console.log(value)
  return (
    <div className='row mb-6'>
      
      <label className='col-lg-2 col-form-label required fw-bold fs-6'>{label}</label>

      <div className='col-lg-4 fv-row'>
        <select
          className='form-select form-select-solid form-select-lg'
          name={name}
          value={value}
          onChange={(e) => setOption(e.target.value)}
        >
          <option>Select a server..</option>
          {data &&
            data.map((elt) => (
              <option key={elt.ID} value={elt.ID}>
                {elt.name} : {elt.port}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default DropDownBox
