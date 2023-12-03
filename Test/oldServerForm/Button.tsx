import React from 'react'

const Button = ({loading}) => {
  return (
    <div className='card-footer d-flex justify-content-end py-6 px-9'>
    <button type='submit' className='btn btn-primary' disabled={loading}>
      {!loading && 'Save Changes'}
      {loading && (
        <span className='indicator-progress' style={{display: 'block'}}>
          Please wait...{' '}
          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
        </span>
      )}
    </button>
  </div>
  )
}

export default Button