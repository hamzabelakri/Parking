import React from 'react'

const Actions = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
          {/*begin::Content wrapper*/}
          <div className='d-flex flex-column flex-column-fluid'>
            {/*begin::Content*/}
            <div id='kt_app_content' className='app-content pt-4'>
              {/*begin::Categories*/}
              <div className='app-toolbar-wrapper w-100 mb-2'>
                {/*begin::Wrapper*/}
               
                <div className='nav d-flex justify-content-xxl-between flex-wrap gap-5'>
                  {/*begin::Nav item*/}
                  <li className='nav-item mb-2'>
                    {/*begin::Nav link*/}
                    <a
                      className='nav-link btn btn-active-success btn-center bg-gray-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-100px h-85px pt-7 pt-lg-5 pb-2 active'
                      data-bs-toggle='tab'
                      href='#'
                    >
                      {/*begin::Icon*/}
                      <div className='nav-icon mb-3'>
                        <i className='ki-outline ki-chart-line-star fs-2x p-0' />
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Title*/}
                      <span className='fw-semibold fs-7 lh-1'>Finances</span>
                      {/*end::Title*/}
                    </a>
                    {/*end::Nav link*/}
                  </li>
                  {/*end::Nav item*/}
                  {/*begin::Nav item*/}
                  <li className='nav-item mb-2'>
                    {/*begin::Nav link*/}
                    <a
                      className='nav-link btn btn-active-success btn-center bg-gray-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-100px h-85px pt-7 pt-lg-5 pb-2'
                      data-bs-toggle='tab'
                      href='#'
                    >
                      {/*begin::Icon*/}
                      <div className='nav-icon mb-3'>
                        <i className='ki-outline ki-bus fs-2x p-0' />
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Title*/}
                      <span className='fw-semibold fs-7 lh-1'>Education</span>
                      {/*end::Title*/}
                    </a>
                    {/*end::Nav link*/}
                  </li>
                  {/*end::Nav item*/}
                  {/*begin::Nav item*/}
                  <li className='nav-item mb-2'>
                    {/*begin::Nav link*/}
                    <a
                      className='nav-link btn btn-active-success btn-center bg-gray-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2'
                      data-bs-toggle='tab'
                      href='#'
                    >
                      {/*begin::Icon*/}
                      <div className='nav-icon mb-3'>
                        <i className='ki-outline ki-calendar fs-2x p-0' />
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Title*/}
                      <span className='fw-semibold fs-7 lh-1'>Events</span>
                      {/*end::Title*/}
                    </a>
                    {/*end::Nav link*/}
                  </li>
                  {/*end::Nav item*/}
                  {/*begin::Nav item*/}
                  <li className='nav-item mb-2'>
                    {/*begin::Nav link*/}
                    <a
                      className='nav-link btn btn-active-success btn-center bg-gray-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-100px h-85px pt-7 pt-lg-5 pb-2'
                      data-bs-toggle='tab'
                      href='#'
                    >
                      {/*begin::Icon*/}
                      <div className='nav-icon mb-3'>
                        <i className='ki-outline ki-artificial-intelligence fs-2x p-0' />
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Title*/}
                      <span className='fw-semibold fs-7 lh-1'>AI</span>
                      {/*end::Title*/}
                    </a>
                    {/*end::Nav link*/}
                  </li>
                  {/*end::Nav item*/}
                  {/*begin::Nav item*/}
                  <li className='nav-item mb-2'>
                    {/*begin::Nav link*/}
                    <a
                      className='nav-link btn btn-active-success btn-center bg-gray-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-100px h-85px pt-7 pt-lg-5 pb-2'
                      data-bs-toggle='tab'
                      href='#'
                    >
                      {/*begin::Icon*/}
                      <div className='nav-icon mb-3'>
                        <i className='ki-outline ki-ship fs-2x p-0' />
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Title*/}
                      <span className='fw-semibold fs-7 lh-1'>Logistics</span>
                      {/*end::Title*/}
                    </a>
                    {/*end::Nav link*/}
                  </li>
                  {/*end::Nav item*/}
                  {/*begin::Nav item*/}
                  <li className='nav-item mb-2'>
                    {/*begin::Nav link*/}
                    <a
                      className='nav-link btn btn-active-success btn-center bg-gray-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-100px h-85px pt-7 pt-lg-5 pb-2'
                      data-bs-toggle='tab'
                      href='#'
                    >
                      {/*begin::Icon*/}
                      <div className='nav-icon mb-3'>
                        <i className='ki-outline ki-bitcoin fs-2x p-0' />
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Title*/}
                      <span className='fw-semibold fs-7 lh-1'>Crypto</span>
                      {/*end::Title*/}
                    </a>
                    {/*end::Nav link*/}
                  </li>
                  {/*end::Nav item*/}
                  {/*begin::Nav item*/}
                  <li className='nav-item mb-2'>
                    {/*begin::Nav link*/}
                    <a
                      className='nav-link btn btn-active-success btn-center bg-gray-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-100px h-85px pt-7 pt-lg-5 pb-2'
                      data-bs-toggle='tab'
                      href='#'
                    >
                      {/*begin::Icon*/}
                      <div className='nav-icon mb-3'>
                        <i className='ki-outline ki-people fs-2x p-0' />
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Title*/}
                      <span className='fw-semibold fs-7 lh-1'>Society</span>
                      {/*end::Title*/}
                    </a>
                    {/*end::Nav link*/}
                  </li>
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Actions
