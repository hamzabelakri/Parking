import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {getAllData, getOneServer, postAllData} from '../../../Redux/Server/ServerAction'
import {Toast} from './CustomToast'
import {Container} from 'react-bootstrap'
import {useIntl} from 'react-intl'
import {serverFormSchema, initialValues} from './utilities'
import {Toaster} from 'react-hot-toast'
import { useAuth } from '../../modules/auth'

const ServerForm: React.FC = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state: any) => state.ServerReducer)
  const {oneServerData} = useSelector((state: any) => state.ServerReducer)
  //console.log(oneServerData)

  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: serverFormSchema,
    onSubmit: (values) => {
      formik.setErrors({port: ''})
      formik.setTouched({port: false})
      dispatch(postAllData(formik.values))
    },
  })

  const handleClick = (event) => {
    dispatch(getOneServer({ip: formik.values.ip, port: formik.values.port}))
    event.preventDefault()
  }

  const handleDiscard = () => {
    formik.resetForm()
    formik.setErrors({})
  }

  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])

  useEffect(() => {
    if (data) {
      formik.setFieldValue('ip', data.serverip ||'')
      formik.setFieldValue('port', data.serverport || '')
      const selectedZR = data.lrgeometry?.find((zr) => zr.selected)?.name ?? ''
      // formik.setFieldValue('selectedZR', selectedZR)
      console.log(selectedZR)
    }
  }, [data])

  const intl = useIntl()
  const {currentUser, logout} = useAuth()

  return (
    <Container className='w-900px'>
      <div className='card mb-5 mb-xl-10'>
        <Toast />
        <Toaster position='top-center' reverseOrder={false} />
        <div
          className='card-header border-0'
          role=''
          data-bs-toggle=''
          data-bs-target='#kt_account_profile_details'
          aria-expanded='true'
          aria-controls='kt_account_profile_details'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{intl.formatMessage({id: 'CONFIG.CONFIGURATION'})}</h3>
          </div>
        </div>

        {/* // ---------------------- Connect Server ------------------------------------ // */}

        <div id='kt_account_profile_details' className='collapse show'>
          <form onSubmit={formik.handleSubmit} noValidate className='form px-15'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                  {' '}
                  {intl.formatMessage({id: 'CONFIG.SERVERSETTING'})}
                </label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-5 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder={intl.formatMessage({id: 'CONFIG.ZRIP'})}
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
                        placeholder={intl.formatMessage({id: 'CONFIG.PORT'})}
                        {...formik.getFieldProps('port')}
                      />
                      {formik.touched.port && formik.errors.port && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.port}</div>
                        </div>
                      )}
                    </div>
                    <div className='col-lg-3 fv-row'>
                      <button className='btn btn-primary' onClick={handleClick}>
                        {intl.formatMessage({id: 'CONFIG.CONNECT'})}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* // ---------------------- DropDownBoxes ------------------------------------ // */}

              <div className='row mb-6 '>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                  {intl.formatMessage({id: 'CONFIG.SERVERSELECT'})}
                </label>

                <div className='col-lg-6 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg'
                    {...formik.getFieldProps('selectedZR')}
                  >
                    <option value=''>{intl.formatMessage({id: 'CONFIG.ZROPTION'})}</option>
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
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                  {intl.formatMessage({id: 'CONFIG.POSSELECT'})}
                </label>

                <div className='col-lg-6 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg'
                    {...formik.getFieldProps('selectedPos')}
                  >
                    <option value=''>{intl.formatMessage({id: 'CONFIG.POSOPTION'})}</option>
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
            </div>

            {/* // ---------------------- Submit Button ------------------------------------ // */}

            <div className='card-footer d-flex justify-content-center py-6 px-9'>
              <button
                className='btn btn-light btn-active-light-primary me-2'
                onClick={logout}
              >
                {intl.formatMessage({id: 'CONFIG.DISCARD'})}
              </button>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={loading || !formik.isValid}
              >
                {!loading ? (
                  intl.formatMessage({id: 'CONFIG.SAVECHANGES'})
                ) : (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    {intl.formatMessage({id: 'AUTH.LOGIN.WAIT'})}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default ServerForm
