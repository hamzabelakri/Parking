import React from 'react'
import {useAuth} from '../../../../app/modules/auth'

const AuthButtons = () => {
  const {currentUser, logout} = useAuth()
  return (
    <>
      <div className='app-navbar-item ms-2 ms-lg-6' role='button'>
        <img src='media/buttons//Pause-Shift.svg' />
      </div>
      <div className='app-navbar-item ms-2 ms-lg-6' role='button' onClick={logout}>
        <img src='media/buttons//Close-Shift.svg' />
      </div>
    </>
  )
}

export default AuthButtons
