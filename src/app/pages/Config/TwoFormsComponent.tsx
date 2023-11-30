import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const initialValues = {
  selectedZR: '',
  selectedPos: '',
}

const validationSchema = Yup.object().shape({
  selectedZR: Yup.string().required('Select a ZR'),
  selectedPos: Yup.string().required('Select a Pos'),
})
const TwoFormsComponent = () => {
  const {data} = useSelector((state: any) => state.ServerReducer)
  console.log('TwoFormsComponent Rendered', data);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      
      // Handle form submission
      console.log('Form Submitted:', values)
    },
  })

 
  return (
    <div>
      <div className='row mb-6'>
        <label className='col-lg-2 col-form-label required fw-bold fs-6'>Server</label>
        <div className='col-lg-4 fv-row'>
          <select className='form-select form-select-solid form-select-lg'
             name="selectedZR" 
             onChange={formik.handleChange}  
           
             value={formik.values.selectedZR} 
          >
            <option>Select ZR</option>
            {data.map((item) => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='row mb-6'>
        <label className='col-lg-2 col-form-label required fw-bold fs-6'>POS</label>
        <div className='col-lg-4 fv-row'>
          <select className='form-select form-select-solid form-select-lg'
            name="selectedPos"  
            onChange={formik.handleChange}  
        
            value={formik.values.selectedPos} 
          >
            <option>SelectPos</option>
            {data
                .find((item) => item.name === formik.values.selectedZR)
                ?.pos.map((pos) => (
                  <option key={pos.id} value={pos.name} label={pos.name} />
                ))}
          </select>
        </div>
      </div>
   
    </div>
  )
}

export default TwoFormsComponent
