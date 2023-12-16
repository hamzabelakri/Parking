/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {buttonsData} from './ButtonsData'
import {useIntl} from 'react-intl'

type Props = {
  className: string
}

const Second_set_buttons: React.FC<Props> = ({className}) => {
  const intl = useIntl()

  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <div className='nav d-flex justify-content-between gap-3'>
          {buttonsData.map((button) => (
            <div className='mb-3 me-0'>
              <button
                className=' btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show rounded-4 '
                style={{width: 138, height: 150}}
              >
                <div className='mb-3'>
                  <img src={button.img} className='w-50px' alt='' />
                </div>

                <div className=''>
                  <span className='text-gray-800 fw-bold fs-3 d-block'>{intl.formatMessage({ id: button.title })}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Second_set_buttons
