import React from 'react'
import {useIntl} from 'react-intl'
import { useSelector } from 'react-redux'

const ItemsList: React.FC = () => {
  const {data} = useSelector((state: any) => state.Websocket_Reducers)
  const article_1 = data?.articles_data?.article_1 || {}
  const article_2 = data?.articles_data?.article_2 || {}

  const intl = useIntl()
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
                  src='media/buttons/Parker.svg'
                  className='w-50px h-50px rounded-3 me-3'
                  alt=''
                />
                <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1'>
                {article_1.name || ''}
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
                ${article_1.price || '0'}
              </span>
            </td>
          </tr>
          <tr data-kt-pos-element='item' data-kt-pos-item-price='7.5'>
            <td className='pe-0'>
              <div className='d-flex align-items-center'>
                <img
                  src='media/buttons/LostTicket.svg'
                  className='w-50px h-50px rounded-3 me-3'
                  alt=''
                />
                <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1'>
                {article_2.name || ''}
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
                ${article_2.price || '0'}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ItemsList
