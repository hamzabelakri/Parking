import React from 'react'
import {Mixed} from '../../modules/widgets/components/Mixed'
import Payment from './Payment'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'

const Test = () => {
  return (
    <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
      <div className='d-flex flex-column flex-column-fluid'>
        <div id='kt_app_content' className='app-content flex-column-fluid'>
          <div id='kt_app_content_container' className='app-container container-xxl'>
            <div className='d-flex flex-column flex-xl-row'>
              <div className='d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0'>
                <div className='card card-flush card-p-0 bg-transparent border-0'>
                  <div className='card-body'>
                    <ul className='nav nav-pills d-flex justify-content-between nav-pills-custom gap-3 mb-6'>
                      <li className='nav-item mb-3 me-0'>
                        <a
                          className='nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show active'
                          data-bs-toggle='pill'
                          href='#kt_pos_food_content_1'
                          style={{width: 138, height: 180}}
                        >
               
                          <div className='nav-icon mb-3'>
                            {/*begin::Food icon*/}
                            <img
                            src={toAbsoluteUrl('/media/svg/food-icons/cheeseburger.svg')}
                              className='w-50px'
                              alt=''
                            />
                          </div>

                          <div className=''>
                            <span className='text-gray-800 fw-bold fs-2 d-block'>Lunch</span>
                            <span className='text-gray-400 fw-semibold fs-7'>8 Options</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::Nav link*/}
                      </li>
                      <li className='nav-item mb-3 me-0'>
                        <a
                          className='nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show active'
                          data-bs-toggle='pill'
                          href='#kt_pos_food_content_1'
                          style={{width: 138, height: 180}}
                        >
               
                          <div className='nav-icon mb-3'>
                            {/*begin::Food icon*/}
                            <img
                            src={toAbsoluteUrl('/media/svg/food-icons/coffee.svg')}
                              className='w-50px'
                              alt=''
                            />
                          </div>

                          <div className=''>
                            <span className='text-gray-800 fw-bold fs-2 d-block'>Lunch</span>
                            <span className='text-gray-400 fw-semibold fs-7'>8 Options</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::Nav link*/}
                      </li>
                      <li className='nav-item mb-3 me-0'>
                        <a
                          className='nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show active'
                          data-bs-toggle='pill'
                          href='#kt_pos_food_content_1'
                          style={{width: 138, height: 180}}
                        >
               
                          <div className='nav-icon mb-3'>
                            {/*begin::Food icon*/}
                            <img
                            src={toAbsoluteUrl('/media/svg/food-icons/cheesecake.svg')}
                              className='w-50px'
                              alt=''
                            />
                          </div>

                          <div className=''>
                            <span className='text-gray-800 fw-bold fs-2 d-block'>Lunch</span>
                            <span className='text-gray-400 fw-semibold fs-7'>8 Options</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::Nav link*/}
                      </li>
                    </ul>
                    {/*end::Nav*/}
                    {/*begin::Tab Content*/}
                    <div className='tab-content'>
                      {/*begin::Tap pane*/}
                      <div className='tab-pane fade show active' id='kt_pos_food_content_1'>
                        {/*begin::Wrapper*/}
                        <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              <img
                                src='media/stock/food/img-1.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />

                              <div className='mb-2'>
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    T-Bone Stake
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$16.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='media/stock/food/img-2.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Breakfast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='media/stock/food/img-3.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Sweety
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div className='tab-pane fade' id='kt_pos_food_content_2'>
                        {/*begin::Wrapper*/}
                        <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='media/stock/food/img-2.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Sweety
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-5.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Breakfast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-4.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Chicken Breast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-8.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Ramen
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-10.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Tenderlion Steak
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-9.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Soup of the Day
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='media/stock/food/img-3.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Pancakes
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-7.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Chef’s Salmon
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-2.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    T-Bone Stake
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$16.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div className='tab-pane fade' id='kt_pos_food_content_3'>
                        {/*begin::Wrapper*/}
                        <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-5.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Breakfast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-11.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Sweety
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-2.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    T-Bone Stake
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$16.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-7.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Chef’s Salmon
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-4.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Chicken Breast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-8.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Ramen
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-9.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Soup of the Day
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-10.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Tenderlion Steak
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='media/stock/food/img-2.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Pancakes
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div className='tab-pane fade' id='kt_pos_food_content_4'>
                        {/*begin::Wrapper*/}
                        <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='media/stock/food/img-2.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Pancakes
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-5.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Breakfast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-4.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Chicken Breast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-8.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Ramen
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-9.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Soup of the Day
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-11.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Sweety
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-3.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Pancakes
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-7.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Chef’s Salmon
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-10.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Tenderlion Steak
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div className='tab-pane fade' id='kt_pos_food_content_5'>
                        {/*begin::Wrapper*/}
                        <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-10.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Tenderlion Steak
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-5.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Breakfast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-4.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Chicken Breast
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-3.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Pancakes
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-2.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    T-Bone Stake
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$16.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-7.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Chef’s Salmon
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-8.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Ramen
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-9.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Soup of the Day
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                          {/*begin::Card*/}
                          <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                            {/*begin::Body*/}
                            <div className='card-body text-center'>
                              {/*begin::Food img*/}
                              <img
                                src='assets/media/stock/food/img-11.jpg'
                                className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                                alt=''
                              />
                              {/*end::Food img*/}
                              {/*begin::Info*/}
                              <div className='mb-2'>
                                {/*begin::Title*/}
                                <div className='text-center'>
                                  <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                    Sweety
                                  </span>
                                  <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                    16 mins to cook
                                  </span>
                                </div>
                                {/*end::Title*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Total*/}
                              <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                              {/*end::Total*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Card*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Tap pane*/}
                    </div>
                    {/*end::Tab Content*/}
                  </div>
                  {/*end: Card Body*/}
                </div>
                {/*end::Pos food*/}
              </div>
              {/*end::Content*/}
              {/*begin::Sidebar*/}
              <div className='flex-row-auto w-xl-450px'>
              <Payment/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
