import React, {useState} from 'react'
import {CustomToast, Toast} from './CustomToast'

const ConnectServer = () => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({ID: '', PORT: ''})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({...input, [event.target.name]: event.target.value})
  }
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:8000/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ID: input.ID,
          PORT: input.PORT,
        }),
      })

      if (response.ok) {
        console.log('Request successful')
        CustomToast('Request successful!', 'success')
      } else {
        console.error('Request failed')
        CustomToast('Request failed!', 'error')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='row mb-6'>
      <Toast />
      <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server Setting</label>
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
              placeholder='S.Port'
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
