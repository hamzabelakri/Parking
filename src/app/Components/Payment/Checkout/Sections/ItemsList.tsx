import React from 'react'

const ItemsList = () => {
  return (
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
                  src='media/buttons/Parker.png'
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
                  src='media/buttons/LostTicket.png'
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
                $100.00
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ItemsList
