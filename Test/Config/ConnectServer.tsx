import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getAllData} from '../../../Redux/Server/ServerAction'

const ConnectServer = ({setServerOption}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({ID: '', PORT: ''})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({...input, [event.target.name]: event.target.value})
  }
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(getAllData())
    setServerOption(input)
    event.preventDefault()
  }

  return (
    <div className='row mb-6'>
      <label className='col-lg-2 col-form-label required fw-bold fs-6'>Server Setting</label>
      <div className='col-lg-8'>
        <div className='row'>
          <div className='col-lg-4 fv-row'>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
              placeholder='Server ID'
              name='ID'
              value={input.ID}
              required
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-2 fv-row'>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder='Port'
              name='PORT'
              value={input.PORT}
              required
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-4 fv-row'>
            <button className='btn btn-primary' onClick={handleClick}>
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectServer
