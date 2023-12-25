/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useIntl} from 'react-intl'
import ItemsList from './ItemsList/ItemsList'
import Control_Buttons from './Control_Buttons/Control_Buttons'
import Payment_Buttons from './Payment_Buttons/Payment_Buttons'

type Props = {
  className: string
  data
}

const Checkout: React.FC<Props> = ({className, data}) => {
  const {
    subtotal = 0,
    discounts = 0,
    tax = 0,
    total = 0,
  } = data?.articles_data?.transaction_bill || {}
  const intl = useIntl()
  return (
    <div className={`card card-flush ${className}`}>
      <div className='card-header pt-5'>
        <h3 className='card-title fw-bold text-gray-800 fs-2qx'>
          {intl.formatMessage({id: 'CHEKOUT.ARTICLES'})}
        </h3>

        <div className='card-toolbar'>
          <a href='#' className='btn btn-light-primary fs-4 fw-bold py-4'>
            {intl.formatMessage({id: 'CHEKOUT.CLEAR.BUTTON'})}
          </a>
        </div>
      </div>

      <div className='card-body pt-0'>
        <ItemsList data={data} />
        <div className='d-flex flex-stack bg-success rounded-3 p-6 mb-6'>
          <div className='fs-6 fw-bold text-white'>
            <span className='d-block lh-1 mb-2'>
              {intl.formatMessage({id: 'CHEKOUT.SUBTOTAL'})}
            </span>
            <span className='d-block mb-2'>{intl.formatMessage({id: 'CHEKOUT.DISCOUNTS'})}</span>
            <span className='d-block mb-9'>{intl.formatMessage({id: 'CHEKOUT.TAX'})}(12%)</span>
            <span className='d-block fs-2qx lh-1'>{intl.formatMessage({id: 'CHEKOUT.TOTAL'})}</span>
          </div>

          <div className='fs-6 fw-bold text-white text-end'>
            <span className='d-block lh-1 mb-2' data-kt-pos-element='total'>
              ${subtotal}
            </span>
            <span className='d-block mb-2' data-kt-pos-element='discount'>
              -${discounts}
            </span>
            <span className='d-block mb-9' data-kt-pos-element='tax'>
              ${tax}
            </span>
            <span className='d-block fs-2qx lh-1' data-kt-pos-element='grant-total'>
              ${total}
            </span>
          </div>
        </div>

        <div className='m-0'>
          <Control_Buttons />

          <h1 className='fw-bold text-gray-800 mb-5'>
            {intl.formatMessage({id: 'CHEKOUT.PAYMENT_METHOD'})}
          </h1>
          <Payment_Buttons />
        </div>
      </div>
    </div>
  )
}

export default Checkout
