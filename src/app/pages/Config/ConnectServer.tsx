import React, {useState} from 'react'
import {CustomToast, Toast} from './CustomToast'
import {useDispatch} from 'react-redux'
import {getAllData} from '../../../Redux/Server/ServerAction'

const ConnectServer = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({ID: '', PORT: ''})
  const [data, setData] = useState<ConfigData[]>([])

  interface ConfigData {
    ID: number
    name: string
    port: number
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({...input, [event.target.name]: event.target.value})
  }
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(getAllData())
    event.preventDefault()
  }
  //console.log(data)
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
