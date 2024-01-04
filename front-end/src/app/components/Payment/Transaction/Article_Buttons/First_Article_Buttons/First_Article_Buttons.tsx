/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {buttonsData} from './ButtonsData'
import {useIntl} from 'react-intl'

type Props = {
  className: string
}

const First_Article_Buttons: React.FC<Props> = ({className}) => {
  const intl = useIntl()

  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <div className='nav d-flex justify-content-center gap-10'>
          {buttonsData.map((button) => (
            <div className='me-0' key={button.id}>
              <button
                className=' btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7  page-bg show rounded-4'
                style={{width: 148, height: 150}}
              >
                <div className='mb-3'>
                  <img src={button.img} className='w-50px' alt='' />
                </div>

                <div className=''>
                  <span className='text-gray-800 fw-bold fs-3 d-block'>
                    {intl.formatMessage({id: button.title})}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default First_Article_Buttons
