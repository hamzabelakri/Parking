import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {staff_Logout} from '../../../../redux/Auth/Auth_Action'

const AuthButtons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {staff} = useSelector((state: any) => state.Auth_Reducer)
  const email = staff.email

  const handleClick = (e) => {
    dispatch(staff_Logout(email, navigate))
  }
  return (
    <>
      <div className='app-navbar-item ms-2 ms-lg-6' role='button'>
        <img src='media/buttons//Pause-Shift.svg' />
      </div>
      <div className='app-navbar-item ms-2 ms-lg-6' role='button' onClick={handleClick}>
        <img src='media/buttons//Close-Shift.svg' />
      </div>
    </>
  )
}

export default AuthButtons
