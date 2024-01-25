import React from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {useSelector} from 'react-redux'

type Props = {
  className: string
}
const UserSession: React.FC<Props> = ({className}) => {
  const {operator} = useSelector((state: any) => state.Auth_Reducer)
console.log("session",operator)
  return (
    <div className={`card ${className}`}>
      <div className='card-body '>
        <div className='scroll-container mh-150px overflow-auto'>
          <div className='d-flex align-items-center mb-7'>
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} className='' alt='' />
            </div>
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              {operator?.name}
              </a>
              <span className='text-muted d-block fw-semibold'>Project Manager</span>
            </div>
          </div>
          <div className='d-flex align-items-center mb-7'>
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} className='' alt='' />
            </div>
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              {operator?.name}
              </a>
              <span className='text-muted d-block fw-semibold'>Project Manager</span>
            </div>
          </div>
          <div className='d-flex align-items-center mb-7'>
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} className='' alt='' />
            </div>
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              {operator?.name}
              </a>
              <span className='text-muted d-block fw-semibold'>Project Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSession
