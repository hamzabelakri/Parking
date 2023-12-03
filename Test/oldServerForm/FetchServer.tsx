import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const FetchServer = ({setConfigOption, configOption, data}) => {
  const initialValues = {
    selectedZR: '',
    selectedPos: '',
  }

  const validationSchema = Yup.object().shape({
    selectedZR: Yup.string().required('ZR is required'),
    selectedPos: Yup.string().required('Pos is required'),
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {},
  })

  const {oneServerData} = useSelector((state: any) => state.ServerReducer)
  useEffect(() => {}, [oneServerData])

  const handleZROptionChange = (event) => {
    const selectedZR = event.target.value
    formik.handleChange(event)
    setConfigOption(selectedZR)
  }

  const handlePosOptionChange = (event) => {
    const selectedPos = event.target.value
    formik.handleChange(event)
    setConfigOption(selectedPos)
  }

  //console.log(data)

  /*   useEffect(() => {
    if (oneServerData) {
      setConfigOption({selectedZR: formik.values.selectedZR.name, selectedPos: formik.values.selectedPos.name})
    }
  }, [oneServerData])  */

  return (
    <div>
      <div className='row mb-6'>
        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server</label>
        <div className='col-lg-6 fv-row'>
          <select
            className='form-select form-select-solid form-select-lg'
            {...formik.getFieldProps('selectedZR')}
            name='selectedZR'
            onChange={handleZROptionChange}
            value={formik.values.selectedZR}
       
            required
          >
            <option value=''>Select ZR</option>
            {Array.isArray(oneServerData) &&
              oneServerData.map((item) => (
                <option key={item.id} value={item.name} id={item.selected ? '' : 'selected'}>
                  {item.name}
                </option>
              ))}
          </select>
          {formik.touched.selectedZR && formik.errors.selectedZR && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.selectedZR}</div>
            </div>
          )}
        </div>
      </div>
      <div className='row mb-6'>
        <label className='col-lg-4 col-form-label required fw-bold fs-6'>POS</label>
        <div className='col-lg-6 fv-row'>
          <select
            className='form-select form-select-solid form-select-lg'
            {...formik.getFieldProps('selectedPos')}
            name='selectedPos'
            onChange={handlePosOptionChange}
            value={formik.values.selectedPos}
            required
          >
            <option value=''>SelectPos</option>
            {Array.isArray(oneServerData) &&
              oneServerData
                .find((item) => item.name === formik.values.selectedZR)
                ?.pos.map((pos) => <option key={pos.id} value={pos.name} label={pos.name} />)}
          </select>
          {formik.touched.selectedPos && formik.errors.selectedPos && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.selectedPos}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FetchServer
