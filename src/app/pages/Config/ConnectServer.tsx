import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getAllData, getOneServer} from '../../../Redux/Server/ServerAction'
import {useIntl} from 'react-intl'
const ConnectServer = ({setServerOption}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({ID: '', PORT: ''})
  const intl = useIntl()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({...input, [event.target.name]: event.target.value})
  }
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(getAllData(input))
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
              placeholder={intl.formatMessage({id: 'CONFIG.ZRID'})}
              name='ID'
              value={input.ID}
              required
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-4 fv-row'>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={intl.formatMessage({id: 'CONFIG.PORT'})}
              name='PORT'
              value={input.PORT}
              required
              onChange={handleChange}
            />
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
