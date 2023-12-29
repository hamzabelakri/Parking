import React from 'react'

import {rowsData} from './CarDetails'
import Search_Card from '../Payment/Transaction/SearchBar/Search_Card'
const CarTable: React.FC = () => {
  return (
    <div className='card'>
      <div className='modal-header'>
        <h2>Search LBN</h2>

        <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
          <i className='ki-duotone ki-cross fs-1'>
            <span className='path1' />
            <span className='path2' />
          </i>
        </div>
      </div>
      <div id='kt_referred_users_tab_content' className='tab-content'>
        <div
          id='kt_referrals_1'
          className='card-body p-0 tab-pane fade show active'
          role='tabpanel'
        >
          <div className='table-responsive hover-scroll mh-950px'>
            <table className='table align-middle table-row-bordered table-row-solid table-hover gy-4 gs-9'>
              <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
                <tr>
                  <th className='min-w-125px '>EPAN</th>
                  <th className='min-w-125px '>Licence Plate</th>
                  <th className='min-w-125px'>Card Type</th>
                  <th className='min-w-125px'>Entry Time</th>
                </tr>
              </thead>

              <tbody className='fs-6 fw-semibold text-gray-600 '>
                {rowsData.map((rowData, index) => (
                  <tr key={index} className='' role='button'>
                    <td className='symbol symbol-70px w-100 ps-9'>
                      <img src={rowData.imageUrl} alt='' className='w-100 hover-scale' />
                    </td>
                    <td className=''>{rowData.epan}</td>
                    <td>{rowData.licensePlate}</td>
                    <td className='text-success'>{rowData.entryTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     {/*  <Search_Card/> */}
    </div>
  )
}

export default CarTable
