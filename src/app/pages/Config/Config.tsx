import React, {useState} from 'react'
import ConnectServer from './ConnectServer'
import FetchServer from './FetchServer'
import {useDispatch} from 'react-redux'
import {postAllData} from '../../../Redux/Server/ServerAction'
const Config = () => {
  const [loading, setLoading] = useState(false)
  const [serverOption, setServerOption] = useState("")
  const [configOption, setConfigOption] = useState("")

  const dispatch = useDispatch()
  console.log(configOption)

  const onsubmit = (event) => {
    dispatch(postAllData(configOption))
    event.preventDefault()
  }
  return (
    <div className='card mb-5 mb-xl-10 mx-15' onSubmit={onsubmit}>
      <div
        className='card-header border-0'
        data-bs-target='#kt_account_profile_details'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Configuration</h3>
        </div>
      </div>
      <div id='kt_account_profile_details' className='collapse show'>
        <form noValidate className='form'>
          <div className='card-body border-top p-9'>
            <ConnectServer setServerOption={setServerOption}/>
            <FetchServer setConfigOption={setConfigOption}/>
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
