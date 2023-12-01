import React, {useEffect, useState} from 'react'
import ConnectServer from './ConnectServer'
import FetchServer from './FetchServer'
import {useDispatch, useSelector} from 'react-redux'
import {getAllData, getSavedData, postAllData} from '../../../Redux/Server/ServerAction'
import {useIntl} from 'react-intl'
import {Container} from 'react-bootstrap'
import { Toast } from './CustomToast'
const Config = () => {
  const [loading, setLoading] = useState(false)
  const [serverOption, setServerOption] = useState('')
  const [configOption, setConfigOption] = useState({selectedZR: '', selectedPos: ''})

  const handleConfigOptionChange = (selectedZR, selectedPos) => {
    setConfigOption({selectedZR, selectedPos})
  }

  const {data} = useSelector((state: any) => state.ServerReducer)
  //console.log(data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  const onsubmit = (event) => {
    dispatch(postAllData({serverOption, configOption}))
    event.preventDefault()
  }

  const intl = useIntl()
  return (
    <Container className='w-900px'>
      <Toast/>
      <div className='card mb-5 mb-xl-10 mx-15' onSubmit={onsubmit}>
        <div
          className='card-header border-0'
          data-bs-target='#kt_account_profile_details'
          aria-controls='kt_account_profile_details'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{intl.formatMessage({id: 'CONFIG.CONFIGURATION'})}</h3>
          </div>
        </div>
        <div id='kt_account_profile_details' className='collapse show'>
          <form noValidate className='form px-15'>
            <div className='card-body border-top p-9 '>
              <ConnectServer setServerOption={setServerOption}/>
              <FetchServer setConfigOption={handleConfigOptionChange} configOption={configOption}/>
            </div>
            <div className='card-footer d-flex justify-content-center py-6 px-9'>
              <button className='btn btn-light btn-active-light-primary me-2'>
                {intl.formatMessage({id: 'CONFIG.DISCARD'})}
              </button>
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
    </Container>
  )
}

export default Config
