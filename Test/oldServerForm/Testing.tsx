import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {getAllData, getOneServer, postAllData} from '../../../Redux/Server/ServerAction'
import {Toast} from './CustomToast'
import {Container} from 'react-bootstrap'
import {useIntl} from 'react-intl'

const profileDetailsSchema = Yup.object().shape({
  ip: Yup.string().required('IP is required'),
  port: Yup.number().typeError('Must be a number').required('Port is required'),
  selectedZR: Yup.string().required('ZR is required'),
  selectedPos: Yup.string().required('Pos is required'),
})

const Testing: React.FC = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state: any) => state.ServerReducer)
  const {oneServerData} = useSelector((state: any) => state.ServerReducer)
  console.log(oneServerData)

  const initialValues = {
    ip: '',
    port: '',
    selectedZR: '',
    selectedPos: '',
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      dispatch(postAllData(formik.values))
      //console.log(formik.values)
    },
  })

  const handleClick = (event) => {
    dispatch(getOneServer({ip: formik.values.ip, port: formik.values.port}))
    event.preventDefault()
  }

  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])

  useEffect(() => {
    if (data) {
      formik.setFieldValue('ip', data.serverip)
      formik.setFieldValue('port', data.serverport)
    }
  }, [data])

  const intl = useIntl()
  //console.log(data)
  return (
    <Container className='w-900px'>
      <div className='card mb-5 mb-xl-10 '>
        <Toast />
        <div
          className='card-header border-0 '
          data-bs-target='#kt_account_profile_details'
          aria-controls='kt_account_profile_details'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{intl.formatMessage({id: 'CONFIG.CONFIGURATION'})}</h3>
          </div>
        </div>

        <div id='kt_account_profile_details' className='collapse show'>
          <form onSubmit={formik.handleSubmit} noValidate className='form px-15'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server</label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-5 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder='IP'
                        {...formik.getFieldProps('ip')}
                      />
                      {formik.touched.ip && formik.errors.ip && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.ip}</div>
                        </div>
                      )}
                    </div>

                    <div className='col-lg-4 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='PORT'
                        {...formik.getFieldProps('port')}
                      />
                      
                    </div>
                    {/* // ---------------------- Connect Button ------------------------------------ // */}

                    <div className='col-lg-3 fv-row'>
                      <button className='btn btn-primary' onClick={handleClick}>
                        {intl.formatMessage({id: 'CONFIG.CONNECT'})}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* // ---------------------- DropDownBox ------------------------------------ // */}

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server</label>
                <div className='col-lg-6 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg'
                    {...formik.getFieldProps('selectedZR')}
                  >
                    <option value=''>Select a ZR</option>
                    {oneServerData &&
                      oneServerData.map((item) => (
                        <option key={item.id} value={item.value}>
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
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Pos</label>
                <div className='col-lg-6 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg'
                    {...formik.getFieldProps('selectedPos')}
                  >
                    <option value=''>Select a Pos</option>
                    {oneServerData &&
                      oneServerData
                        .find((item) => item.name === formik.values.selectedZR)
                        ?.pos.map((pos) => (
                          <option key={pos.id} value={pos.value}>
                            {pos.name}
                          </option>
                        ))}
                  </select>{' '}
                  {formik.touched.selectedPos && formik.errors.selectedPos && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.selectedPos}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* // ---------------------- Submit Button ------------------------------------ // */}

              <div className='card-footer d-flex justify-content-center py-6 px-9'>
                <button className='btn btn-light btn-active-light-primary me-2'>
                  {intl.formatMessage({id: 'CONFIG.DISCARD'})}
                </button>
                <button type='submit' className='btn btn-primary' disabled={loading}>
                  {!loading && 'Save Changes'}
                  {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Testing
