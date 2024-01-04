import React from 'react'
import {rowsData} from './Car_Details'
import Search_Card from './Search_Card'
import {useDispatch, useSelector} from 'react-redux'
import {clear_Filtered_Transaction_Data} from '../../../redux/Transaction/Transaction_Action'
const Car_Table: React.FC = () => {
  const {data} = useSelector((state: any) => state.Transaction_Reducers)
  const {filtered_data} = useSelector((state: any) => state.Transaction_Reducers)
  const dispatch = useDispatch()

  console.log('car_table', filtered_data)

  const handleCloseModal = () => {
    dispatch(clear_Filtered_Transaction_Data())
  }
  return (
    <div className='card'>
      <div className='modal-header'>
        <h2>Search LBN</h2>

        <div
          className='btn btn-sm btn-icon btn-active-color-primary'
          data-bs-dismiss='modal'
          onClick={handleCloseModal}
        >
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
          <div className='hover-scroll mh-850px'>
            <table className='table table-hover align-middle table-row-bordered table-row-solid gy-4 gs-9'>
              <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
                <tr>
                  <th className='min-w-125px '>Image</th>
                  <th className='min-w-125px '>EPAN</th>
                  <th className='min-w-125px '>Licence_Plate</th>
                  <th className='min-w-125px'>Card_Type</th>
                  <th className='min-w-125px'>Entry_Unit</th>
                  <th className='min-w-125px'>Entry_Time</th>
                </tr>
              </thead>

              <tbody className='fs-6 fw-semibold text-gray-600 '>
                {filtered_data.map((item, index) => (
                  <tr key={index} className='' role='button'>
                    <td className='symbol symbol-70px w-100 ps-9'>
                      <img
                        src={item?.image}
                        alt=''
                        className='w-100 hover-scale object-fit-contain'
                      />
                    </td>
                    <td>{item?.epan}</td>
                    <td>{item?.licence_plate}</td>
                    <td>{item?.card_type}</td>
                    <td>{item?.entry_unit}</td>
                    <td className='text-success'>{item?.entry_time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Search_Card />
    </div>
  )
}

export default Car_Table
