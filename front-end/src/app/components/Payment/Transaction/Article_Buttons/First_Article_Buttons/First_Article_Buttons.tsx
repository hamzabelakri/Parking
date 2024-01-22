/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {buttonsData} from './ButtonsData'
import {useIntl} from 'react-intl'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

type Props = {
  className: string
  prefix: string
}

const First_Article_Buttons: React.FC<Props> = ({className, prefix}) => {
  const intl = useIntl()
  const [clickedButton, setClickedButton] = useState<number | null>(null)

  const handleButtonClick = (index: number) => {
    setClickedButton(index)
  }
  return (
    <div className={`card ${className}`}>
      <div
        className='card-body position-relative '
        style={{margin: '0 20px', padding: '2rem 4rem'}}
      >
        <div
          className={`swiper-button-next ${prefix}-swiper-button-next text-black fw-bold top-50`}
          style={{transform: 'scale(0.3)'}}
        ></div>
        <div
          className={`swiper-button-prev ${prefix}-swiper-button-prev text-black fw-bold start-0 top-50`}
          style={{transform: 'scale(0.3)'}}
        ></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          className='text-center'
          navigation={{
            nextEl: `.${prefix}-swiper-button-next`,
            prevEl: `.${prefix}-swiper-button-prev`,
          }}
        >
          {buttonsData.map((button, index) => (
            <SwiperSlide key={`${prefix}-${button.id}`}>
              <button
                className={`btn btn-outline btn-flex flex-column pt-9 pb-7 page-bg show rounded-4 w-150px h-150px`}
                style={{
                  // border: `3px solid ${clickedButton === index ? '#007bff' : '#D8D8E5'}`,
                  border: clickedButton === index ? '3.45px solid #3E97FF' : '1.58px solid #D8D8E5',
                }}
                onClick={() => handleButtonClick(index)}
              >
                <div className='mb-3'>
                  <img src={button.img} className='w-50px' alt='' />
                </div>
                <div className=''>
                  <span className='text-gray-800 fw-bold d-block pt-1 h3 lh-2'>
                    {intl.formatMessage({id: button.title})}
                  </span>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default First_Article_Buttons
