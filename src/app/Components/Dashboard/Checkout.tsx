import React, {useState} from 'react'

const Checkout = () => {
  return (
    <div className='card card-flush bg-body' id='kt_pos_form'>
      {/*begin::Header*/}
      <div className='card-header pt-5'>
        <h3 className='card-title fw-bold text-gray-800 fs-2qx'>Current Order</h3>
        {/*begin::Toolbar*/}
        <div className='card-toolbar'>
          <a href='#' className='btn btn-light-primary fs-4 fw-bold py-4'>
            Clear All
          </a>
        </div>
        {/*end::Toolbar*/}
      </div>

      <div className='card-body pt-0'>
        <div className='table-responsive mb-8'>
         {/*  <table className='table align-middle gs-0 gy-4 my-0'>
            <thead>
              <tr>
                <th className='min-w-175px' />
                <th className='w-125px' />
                <th className='w-60px' />
              </tr>
            </thead>

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
                      T-Bone Stake
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
                  >
                    <button
                      type='button'
                      className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                      data-kt-dialer-control='decrease'
                    >
                      <i className='ki-duotone ki-minus fs-3x' />
                    </button>

                    <input
                      type='text'
                      className='form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px'
                      data-kt-dialer-control='input'
                      placeholder='Amount'
                      name='manageBudget'
                      defaultValue={2}
                    />

                    <button
                      type='button'
                      className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                      data-kt-dialer-control='increase'
                    >
                      <i className='ki-duotone ki-plus fs-3x' />
                    </button>
                  </div>
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
                      Soup of the Day
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
                  >
                    <button
                      type='button'
                      className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                      data-kt-dialer-control='decrease'
                    >
                      <i className='ki-duotone ki-minus fs-3x' />
                    </button>

                    <input
                      type='text'
                      className='form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px'
                      data-kt-dialer-control='input'
                      placeholder='Amount'
                      name='manageBudget'
                      defaultValue={1}
                    />

                    <button
                      type='button'
                      className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                      data-kt-dialer-control='increase'
                    >
                      <i className='ki-duotone ki-plus fs-3x' />
                    </button>
                  </div>
                </td>
                <td className='text-end'>
                  <span className='fw-bold text-primary fs-2' data-kt-pos-element='item-total'>
                    $7.50
                  </span>
                </td>
              </tr>
              <tr data-kt-pos-element='item' data-kt-pos-item-price='13.5'>
                <td className='pe-0'>
                  <div className='d-flex align-items-center'>
                    <img
                      src='media/stock/food/img-3.jpg'
                      className='w-50px h-50px rounded-3 me-3'
                      alt=''
                    />
                    <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1'>
                      Pancakes
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
                  >
                    <button
                      type='button'
                      className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                      data-kt-dialer-control='decrease'
                    >
                      <i className='ki-duotone ki-minus fs-3x' />
                    </button>

                    <input
                      type='text'
                      className='form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px'
                      data-kt-dialer-control='input'
                      placeholder='Amount'
                      name='manageBudget'
                      defaultValue={2}
                    />

                    <button
                      type='button'
                      className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                      data-kt-dialer-control='increase'
                    >
                      <i className='ki-duotone ki-plus fs-3x' />
                    </button>
                  </div>
                </td>
                <td className='text-end'>
                  <span className='fw-bold text-primary fs-2' data-kt-pos-element='item-total'>
                    $27.00
                  </span>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>

        <div className='d-flex flex-stack bg-success rounded-3 p-6 mb-11'>
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
          {/*end::Content*/}
        </div>
        {/*end::Summary*/}
        {/*begin::Payment Method*/}
        <div className='m-0'>
          {/*begin::Title*/}
          <h1 className='fw-bold text-gray-800 mb-5'>Payment Method</h1>
          {/*end::Title*/}
          {/*begin::Radio group*/}
          <div
            className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12'
            data-kt-buttons='true'
            data-kt-buttons-target='[data-kt-button]'
          >
            {/*begin::Radio*/}
            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
            >
              {/*begin::Input*/}
              <input className='btn-check' type='radio' name='method' defaultValue={0} />
              {/*end::Input*/}
              {/*begin::Icon*/}
              <i className='ki-duotone ki-dollar fs-2hx mb-2 pe-0'>
                <span className='path1' />
                <span className='path2' />
                <span className='path3' />
              </i>
              {/*end::Icon*/}
              {/*begin::Title*/}
              <span className='fs-7 fw-bold d-block'>Cash</span>
              {/*end::Title*/}
            </label>
            {/*end::Radio*/}
            {/*begin::Radio*/}
            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 active'
              data-kt-button='true'
            >
              {/*begin::Input*/}
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
          <div
            className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12'
            data-kt-buttons='true'
            data-kt-buttons-target='[data-kt-button]'
          >
            {/*begin::Radio*/}
            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4'
              data-kt-button='true'
            >
              {/*begin::Input*/}
              <input className='btn-check' type='radio' name='method' defaultValue={0} />
              {/*end::Input*/}
              {/*begin::Icon*/}
              <i className='ki-duotone ki-dollar fs-2hx mb-2 pe-0'>
                <span className='path1' />
                <span className='path2' />
                <span className='path3' />
              </i>
              {/*end::Icon*/}
              {/*begin::Title*/}
              <span className='fs-7 fw-bold d-block'>Cash</span>
              {/*end::Title*/}
            </label>
            {/*end::Radio*/}
            {/*begin::Radio*/}
            <label
              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 active'
              data-kt-button='true'
            >
              {/*begin::Input*/}
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

          <button className='btn btn-primary fs-1 w-100 py-4'>Print Bills</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
