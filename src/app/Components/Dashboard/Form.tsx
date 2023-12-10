import React from 'react'

const Form: React.FC = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='row mb-3'>
          <div className='col-md-6 pe-lg-10'>
            <img
              id='kt_contact_map'
              className='w-100 rounded mb-2 mb-lg-0 mt-2'
              src='https://images.unsplash.com/photo-1627936354732-ffbe552799d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJtdyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D'
            />
          </div>

          <div className='col-md-6 ps-lg-10 d-flex align-items-center'>
            <div>
              <div className='row mb-5'>
                <div className='col-md-6 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Input'
                    name='name'
                  />
                </div>

                <div className='col-md-6 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Input'
                    name='email'
                  />
                </div>
              </div>

              <div className='row mb-5'>
                <div className='col-md-6 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Input'
                    name='name'
                  />
                </div>

                <div className='col-md-6 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Input'
                    name='email'
                  />
                </div>
              </div>
              <div className='row mb-5'>
                <div className='col-md-6 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Input'
                    name='name'
                  />
                </div>

                <div className='col-md-6 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Input'
                    name='email'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second form */}
        <div className='row mb-4 mt-8'>
          <label className='col-lg-2 col-form-label required fw-bold fs-6'>Input</label>

          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-6 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                  placeholder='Input'
                />
              </div>

              <div className='col-lg-6 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Input'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-4 '>
          <label className='col-lg-2 col-form-label required fw-bold fs-6'>Input</label>

          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-6 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                  placeholder='Input'
                />
              </div>

              <div className='col-lg-6 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Input'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-4 '>
          <label className='col-lg-2 col-form-label required fw-bold fs-6'>Input</label>

          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-6 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                  placeholder='Input'
                />
              </div>

              <div className='col-lg-6 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Input'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end::Body*/}
    </div>
  )
}

export default Form
