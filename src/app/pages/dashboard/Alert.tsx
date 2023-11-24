import React from 'react'

const Alert = () => {
  return (
    <div>
      <div className='alert alert-primary d-flex align-items-center p-5 mb-10'>
        <span className='svg-icon svg-icon-2hx svg-icon-primary me-3'>...</span>

        <div className='d-flex flex-column'>
          <h5 className='mb-1'>This is an alert</h5>
          <span>
            The alert component can be used to highlight certain parts of your page for higher
            content visibility.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Alert
