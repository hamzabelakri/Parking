import React, {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Config = () => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({ID: '', PORT: ''})
  const [option, setOption] = useState('')

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
        toast.success('Request successful !')
      } else {
        console.error('Request failed')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }

    //setInput({ID: '', PORT: ''})
  }

  const fetchData = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:8000/config', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log('Response status:', response.status)

      if (response.ok) {
        const data = await response.json()
        console.log('Data received:', data)
      } else {
        console.error('Request failed')
        toast.error('Failed to fetch data!')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('An error occurred while fetching configuration data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='card mb-5 mb-xl-10 mx-15'>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Configuration</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Server Setting
              </label>
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

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server POS</label>

              <div className='col-lg-4 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  name='option'
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value=''>Select a currency..</option>
                </select>
              </div>
              <div className='col-lg-4 fv-row'>
                <button className='btn btn-primary' onClick={fetchData}>
                  Fetch
                </button>
              </div>
            </div>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Server POS</label>

              <div className='col-lg-4 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  name='option'
                  value={option}
                >
                  <option value=''>Select a currency..</option>
                </select>
              </div>
              <div className='col-lg-4 fv-row'>
                <button className='btn btn-primary'>Select</button>
              </div>
            </div>
          </div>
          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button className='btn btn-light btn-active-light-primary me-2'>Discard</button>
            <button className='btn btn-primary'>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Config
