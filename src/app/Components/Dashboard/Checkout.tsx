import React, {useState} from 'react'
import CarTable from '../CarList/CarTable'

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className='card card-flush bg-body' id='kt_pos_form'>
      <div className='card-header pt-5'>
        <h3 className='card-title fw-bold text-gray-800 fs-2qx'>Articles</h3>

        <div className='card-toolbar'>
          <a href='#' className='btn btn-light-primary fs-4 fw-bold py-4'>
            Clear All
          </a>
        </div>
      </div>

      <div className='card-body pt-0'>
        <div className='table-responsive mb-2'>
          <table className='table align-middle gs-0 gy-4 my-0'>
            {/* <thead>
              <tr>
                <th className='min-w-175px' />
                <th className='w-125px' />
                <th className='w-60px' />
              </tr>
            </thead> */}

            <tbody>
              <tr data-kt-pos-element='item' data-kt-pos-item-price={33}>
                <td className='pe-0'>
                  <div className='d-flex align-items-center'>
                    <img
                      src='media/stock/food/img-7.jpg'
                      className='w-50px h-50px rounded-3 me-3'
                      alt=''
                    />
                    <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1'>
                      Short Term Parker
                    </span>
                  </div>
                </td>
                <td className='pe-0'>
                  <div
                    className='position-relative d-flex align-items-center'
                    data-kt-dialer='true'
                    data-kt-dialer-min={1}
                    data-kt-dialer-max={10}
                    data-kt-dialer-step={1}
                    data-kt-dialer-decimals={0}
                  ></div>
                </td>
                <td className='text-end'>
                  <span className='fw-bold text-primary fs-2' data-kt-pos-element='item-total'>
                    $66.00
                  </span>
                </td>
              </tr>
              <tr data-kt-pos-element='item' data-kt-pos-item-price='7.5'>
                <td className='pe-0'>
                  <div className='d-flex align-items-center'>
                    <img
                      src='media/stock/food/img-9.jpg'
                      className='w-50px h-50px rounded-3 me-3'
                      alt=''
                    />
                    <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1'>
                      Lost Ticket
                    </span>
                  </div>
                </td>
                <td className='pe-0'>
                  <div
                    className='position-relative d-flex align-items-center'
                    data-kt-dialer='true'
                    data-kt-dialer-min={1}
                    data-kt-dialer-max={10}
                    data-kt-dialer-step={1}
                    data-kt-dialer-decimals={0}
                  ></div>
                </td>
                <td className='text-end'>
                  <span className='fw-bold text-primary fs-2' data-kt-pos-element='item-total'>
                    $7.50
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='d-flex flex-stack bg-success rounded-3 p-6 mb-6'>
          <div className='fs-6 fw-bold text-white'>
            <span className='d-block lh-1 mb-2'>Subtotal</span>
            <span className='d-block mb-2'>Discounts</span>
            <span className='d-block mb-9'>Tax(12%)</span>
            <span className='d-block fs-2qx lh-1'>Total</span>
          </div>

          <div className='fs-6 fw-bold text-white text-end'>
            <span className='d-block lh-1 mb-2' data-kt-pos-element='total'>
              $100.50
            </span>
            <span className='d-block mb-2' data-kt-pos-element='discount'>
              -$8.00
            </span>
            <span className='d-block mb-9' data-kt-pos-element='tax'>
              $11.20
            </span>
            <span className='d-block fs-2qx lh-1' data-kt-pos-element='grant-total'>
              $93.46
            </span>
          </div>
     
        </div>

        <div className='m-0'>

        <div
            className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-5'
            data-kt-buttons='true'
            data-kt-buttons-target='[data-kt-button]'
          >
     
            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
            >
      
              <input className='btn-check' type='radio' name='method' defaultValue={0} />
      
              <i className='ki-duotone ki-dollar fs-2hx mb-2 pe-0'>
                <span className='path1' />
                <span className='path2' />
                <span className='path3' />
              </i>
       
              <span className='fs-7 fw-bold d-block'>Cash</span>
            </label>
        
            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 active'
              data-kt-button='true'
            >
          
              <input className='btn-check' type='radio' name='method' defaultValue={1} />

              <i className='ki-duotone ki-credit-cart fs-2hx mb-2 pe-0'>
                <span className='path1' />
                <span className='path2' />
              </i>

              <span className='fs-7 fw-bold d-block'>Card</span>
            </label>

            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
            >
              <input className='btn-check' type='radio' name='method' defaultValue={2} />

              <i className='ki-duotone ki-paypal fs-2hx mb-2 pe-0'>
                <span className='path1' />
                <span className='path2' />
              </i>

              <span className='fs-7 fw-bold d-block'>E-Wallet</span>
            </label>
          </div>
     
          <h1 className='fw-bold text-gray-800 mb-5'>Payment Method</h1>
       
          
          <div
            className='d-flex flex-equal gap-5 gap-xxl-9 px-0'
            data-kt-buttons='true'
            data-kt-buttons-target='[data-kt-button]'
          >
         
            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
            >
        
              <input className='btn-check' type='radio' name='method' defaultValue={0} />
             
              <i className='ki-duotone ki-dollar fs-2hx mb-2 pe-0'>
                <span className='path1' />
                <span className='path2' />
                <span className='path3' />
              </i>
             
              <span className='fs-7 fw-bold d-block'>Cash</span>
            
            </label>
            
            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_1'
              onClick={openModal}
            >
        
              <input className='btn-check' type='radio' name='method' defaultValue={1} />

              <i className='ki-duotone ki-credit-cart fs-2hx mb-2 pe-0'>
                <span className='path1' />
                <span className='path2' />
              </i>

              <span className='fs-7 fw-bold d-block'>Card</span>
            </label>

           
          </div>

        </div>

        <div className='modal fade" tabIndex={-1}' id='kt_modal_1'>
          <div className='modal-dialog modal-dialog-centered mw-900px'>
            <div className='modal-content'>
              <CarTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
