/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
const buttonsData = [
    {
      id: 1,
      img: 'media/buttons/NotFound.png',
      title: 'Not Found LPN',
    },
    {
      id: 2,
      img: 'media/buttons/ShortTerm.png',
      title: 'Short Term Parker',
    },
    {
      id: 3,
      img: 'media/buttons/LostTicket.png',
      title: 'Lost Ticket',
    },
    {
      id: 4,
      img: 'media/buttons/FreeRate.png',
      title: 'Free Rate',
    },
    {
      id: 5,
      img: 'media/buttons/Frame.png',
      title: 'Free Rate',
    },
  ]
type Props = {
  className: string
}
const buttonStyle = {
  width: 138,
  height: 150,
  borderColor: 'var(--primary-color)', // Replace with your primary color variable or color value
};
const First_set_buttons: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
       <div className='card-body'>
        <div className='nav d-flex justify-content-between gap-3'>
          {buttonsData.map((button) => (
            <div className='mb-3 me-0'>
              <button
                className=' btn btn-outline btn-flex flex-column flex-stack pt-9 pb-7  page-bg show rounded-4'
                style={{width: 138, height: 150}}
              >
                <div className='mb-3'>
                  <img src={button.img} className='w-50px' alt='' />
                </div>

                <div className=''>
                  <span className='text-gray-800 fw-bold fs-3 d-block'>{button.title}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default First_set_buttons
