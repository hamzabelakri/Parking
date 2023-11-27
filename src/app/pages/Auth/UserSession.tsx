import React from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

type Props = {
  className: string
}
const UserSession: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}

      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body '>
        <div className='scroll-container' style={{maxHeight: '150px', overflowX: 'auto'}}>
          <div className='d-flex align-items-center mb-7'>
            {/* begin::Avatar */}
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} className='' alt='' />
            </div>
            {/* end::Avatar */}
            {/* begin::Text */}
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                Emma Smith
              </a>
              <span className='text-muted d-block fw-semibold'>Project Manager</span>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-7'>
            {/* begin::Avatar */}
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} className='' alt='' />
            </div>
            {/* end::Avatar */}
            {/* begin::Text */}
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                Sean Bean
              </a>
              <span className='text-muted d-block fw-semibold'>Project Manager</span>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-7'>
            {/* begin::Avatar */}
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-11.jpg')} className='' alt='' />
            </div>
            {/* end::Avatar */}
            {/* begin::Text */}
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                Brian Cox
              </a>
              <span className='text-muted d-block fw-semibold'>Project Manager</span>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center mb-7'>
            {/* begin::Avatar */}
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-9.jpg')} className='' alt='' />
            </div>
            {/* end::Avatar */}
            {/* begin::Text */}
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                Francis Mitcham
              </a>
              <span className='text-muted d-block fw-semibold'>Project Manager</span>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='d-flex align-items-center'>
            {/* begin::Avatar */}
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-23.jpg')} className='' alt='' />
            </div>
            {/* end::Avatar */}
            {/* begin::Text */}
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                Dan Wilson
              </a>
              <span className='text-muted d-block fw-semibold'>Project Manager</span>
            </div>
          </div>
          {/* end::Text */}
        </div>

        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export default UserSession
