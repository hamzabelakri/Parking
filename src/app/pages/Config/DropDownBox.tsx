import React, {useState} from 'react'

const DropDownBox = ({name, value, label, data, optionlabel, setOption}) => {
  const [selectedServer, setSelectedServer] = useState(null)
  const handleChange = (event) => {
    setOption(event.target.value)
  }
  
  // console.log(value)
  return (
    <div className='row mb-6'>
      <label className='col-lg-2 col-form-label required fw-bold fs-6'>{label}</label>
      <div className='col-lg-4 fv-row'>
        <select
          className='form-select form-select-solid form-select-lg'
          name={name}
          value={value}
          onChange={handleChange}
        >
          <option>{optionlabel}</option>
          {data &&
            data.map((elt) => (
              <option key={elt.id} value={elt.id}>
                {elt.rowtext}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default DropDownBox
