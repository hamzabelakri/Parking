import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllData, getOneServer} from '../../../Redux/Server/ServerAction'
import {useIntl} from 'react-intl'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const ConnectServer = ({setServerOption}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({id: '', port: ''})

  const initialValues = {
    id: '',
    port: '',
  }

  const validationSchema = Yup.object().shape({
    id: Yup.string().required('id is required'),
    port: Yup.number().typeError("Must be a number").required('port is required'),
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {},
  })

  const intl = useIntl()
  const {data} = useSelector((state: any) => state.ServerReducer)

  useEffect(() => {
    if (data) {
      setInput({id: data.serverip, port: data.serverport})
    }
  }, [data])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({...input, [event.target.name]: event.target.value})
  }

  const handleIPChange = (event) => {
    const selectedIP = event.target.value
    formik.handleChange(event)
    setInput(selectedIP)
  }

  const handlePortChange = (event) => {
    const selectedPort = event.target.value
    formik.handleChange(event)
    setInput(selectedPort)
  }

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(getOneServer(input))
    setServerOption(input)
    event.preventDefault()
  }

  return (
    <div className='row mb-6'>
      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
        {intl.formatMessage({id: 'CONFIG.SERVERSETTING'})}
      </label>
      <div className='col-lg-8'>
        <div className='row'>
          <div className='col-lg-5 fv-row'>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
              {...formik.getFieldProps('id')}
              placeholder={intl.formatMessage({id: 'CONFIG.ZRID'})}
              name='id'
              value={input.id}
              required
              onChange={handleIPChange}
            />
            {formik.touched.id && formik.errors.id && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>{formik.errors.id}</div>
              </div>
            )}
          </div>

          <div className='col-lg-4 fv-row'>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              {...formik.getFieldProps('port')}
              placeholder={intl.formatMessage({id: 'CONFIG.PORT'})}
              name='port'
              value={input.port}
              required
              onChange={handlePortChange}
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
  )
}

export default ConnectServer
