import React, {useState} from 'react'
import {CustomToast, Toast} from './CustomToast'

const ConnectServer = () => {
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
    event.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:8000/config', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setData(data)
        console.log('Data received:', data)
      } else {
        CustomToast('Failed to fetch data!', 'error')
      }
    } catch (error) {
      console.error('Error:', error)
      CustomToast('An error occurred while fetching configuration data!', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='row mb-6'>
      <Toast />
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
