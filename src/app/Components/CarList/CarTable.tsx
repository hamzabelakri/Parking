import React from 'react'
import example from '../../_metronic/assets/fonticon/example.jpg'
const CarTable = () => {
  return (
    <div className='card'>
      <div className='modal-header'>
        <h2>CarList</h2>

        <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
          <i className='ki-duotone ki-cross fs-1'>
            <span className='path1' />
            <span className='path2' />
          </i>
        </div>
      </div>
      <div className='card-body py-4'>
        <table className='table align-middle table-row-dashed fs-6 gy-5' id='kt_table_users'>
          <thead>
            <tr className='text-start text-muted fw-bold fs-7 text-uppercase gs-0'>
              {/*  <th className='w-10px pe-2'>
                <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    data-kt-check='true'
                    data-kt-check-target='#kt_table_users .form-check-input'
                    defaultValue={1}
                  />
                </div>
              </th> */}
              <th className='min-w-125px'>User</th>
              <th className='min-w-125px'>Role</th>
              <th className='min-w-125px'>Last login</th>
              <th className='min-w-125px'>Two-step</th>
              <th className='min-w-125px'>Joined Date</th>
              <th className='text-end min-w-100px'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-semibold' role='button'>
            <tr>
              {/*  <td>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input className='form-check-input' type='checkbox' defaultValue={1} />
                </div>
              </td> */}
              <td className='d-flex align-items-center hover-scale'>
                {/*begin:: Avatar */}
                <div className='symbol symbol-150px overflow-hidden me-3'>
                  <div className='symbol-label'>
                    <img
                      src='data:image/jpeg;base64,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'
                      alt=''
                      className=''
                    />
                  </div>
                </div>
              </td>
              <td>Analyst</td>
              <td>
                <div className='badge badge-light fw-bold'>20 mins ago</div>
              </td>
              <td>
                <div className='badge badge-light-success fw-bold'>Enabled</div>
              </td>
              <td>22 Sep 2023, 2:40 pm</td>
              <td className='text-end'>
                <a
                  href='#'
                  className='btn btn-light btn-active-light-primary btn-flex btn-center btn-sm'
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                >
                  Actions
                  <i className='ki-duotone ki-down fs-5 ms-1' />
                </a>
                {/*begin::Menu*/}
                <div
                  className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4'
                  data-kt-menu='true'
                >
                  {/*begin::Menu item*/}
                  <div className='menu-item px-3'>
                    <a
                      href='../../demo1/dist/apps/user-management/users/view.html'
                      className='menu-link px-3'
                    >
                      Edit
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className='menu-item px-3'>
                    <a href='#' className='menu-link px-3' data-kt-users-table-filter='delete_row'>
                      Delete
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}
              </td>
            </tr>
            <tr>
              {/*  <td>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input className='form-check-input' type='checkbox' defaultValue={1} />
                </div>
              </td> */}
              <td className='d-flex align-items-center'>
                {/*begin:: Avatar */}
                <div className='symbol symbol-150px overflow-hidden me-3 hover-scale'>
                  <div className='symbol-label'>
                    <img
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRACdfu0dl_mkO4WD_5Yrb01_qDbvJKKzQw&usqp=CAU'
                      alt=''
                      className=''
                    />
                  </div>
                </div>
              </td>
              <td>Analyst</td>
              <td>
                <div className='badge badge-light fw-bold'>20 mins ago</div>
              </td>
              <td>
                <div className='badge badge-light-success fw-bold'>Enabled</div>
              </td>
              <td>22 Sep 2023, 2:40 pm</td>
              <td className='text-end'>
                <a
                  href='#'
                  className='btn btn-light btn-active-light-primary btn-flex btn-center btn-sm'
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                >
                  Actions
                  <i className='ki-duotone ki-down fs-5 ms-1' />
                </a>
                {/*begin::Menu*/}
                <div
                  className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4'
                  data-kt-menu='true'
                >
                  {/*begin::Menu item*/}
                  <div className='menu-item px-3'>
                    <a
                      href='../../demo1/dist/apps/user-management/users/view.html'
                      className='menu-link px-3'
                    >
                      Edit
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className='menu-item px-3'>
                    <a href='#' className='menu-link px-3' data-kt-users-table-filter='delete_row'>
                      Delete
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}
              </td>
            </tr>

            <tr>
              {/*  <td>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input className='form-check-input' type='checkbox' defaultValue={1} />
                </div>
              </td> */}
              <td className='d-flex align-items-center'>
                {/*begin:: Avatar */}
                <div className='symbol symbol-150px overflow-hidden me-3 hover-scale'>
                  <div className='symbol-label'>
                    <img
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRqDRiTrjrauAEgMLSPdR8Y-UDMFORynAkWFyQ9lZD4gURItwn7syexQCEwCUGDLoJps&usqp=CAU'
                      alt=''
                      className=''
                    />
                  </div>
                </div>
              </td>
              <td>Analyst</td>
              <td>
                <div className='badge badge-light fw-bold'>20 mins ago</div>
              </td>
              <td>
                <div className='badge badge-light-success fw-bold'>Enabled</div>
              </td>
              <td>22 Sep 2023, 2:40 pm</td>
              <td className='text-end'>
                <a
                  href='#'
                  className='btn btn-light btn-active-light-primary btn-flex btn-center btn-sm'
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                >
                  Actions
                  <i className='ki-duotone ki-down fs-5 ms-1' />
                </a>
                {/*begin::Menu*/}
                <div
                  className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4'
                  data-kt-menu='true'
                >
                  {/*begin::Menu item*/}
                  <div className='menu-item px-3'>
                    <a
                      href='../../demo1/dist/apps/user-management/users/view.html'
                      className='menu-link px-3'
                    >
                      Edit
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className='menu-item px-3'>
                    <a href='#' className='menu-link px-3' data-kt-users-table-filter='delete_row'>
                      Delete
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}
              </td>
            </tr>
          </tbody>
        </table>
        {/*end::Table*/}
      </div>{' '}
    </div>
  )
}

export default CarTable
