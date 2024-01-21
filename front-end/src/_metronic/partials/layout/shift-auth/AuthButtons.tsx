import React from 'react'
import {useAuth} from '../../../../app/modules/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { operator_Logout } from '../../../../redux/Auth/Auth_Action'

const AuthButtons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()  
  const {operator} = useSelector((state: any) => state.Auth_Reducer)
  const email = operator.email
  const handleClick=(e)=>{
    dispatch(operator_Logout(email,navigate))
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
