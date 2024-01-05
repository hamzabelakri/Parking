import React, {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {Pick_Time_bar} from './Pick_Time_bar'
import {useDispatch} from 'react-redux'
import {
  fetch_Filtered_Transaction_Data,
  fetch_All_Transaction_Data,
} from '../../../../../redux/Transaction/Transaction_Action'
import Car_Table from '../../../Car_List/Car_Table'
import {useFormik} from 'formik'
import {search_inputs, initialValues} from './Settings'
import Flatpickr from 'react-flatpickr'

const Search_Card: React.FC = () => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const handleCick = (event) => {
    dispatch(fetch_All_Transaction_Data())
  }

  const formik = useFormik({
    initialValues,
    validationSchema: search_inputs(intl),

    onSubmit: (values) => {
      dispatch(fetch_Filtered_Transaction_Data(formik.values))
    },
  })
  const handleDateChange = (selectedDates: Date[]) => {
    console.table(selectedDates);
    formik.setFieldValue('time_travel', selectedDates[0])
  }

  useEffect(() => {
    console.log('Form values:', formik.values)
  }, [formik.values])
  return (
    <>
      <div className='card'>
        <form className='card-body' onSubmit={formik.handleSubmit}>
          <div className='container'>
            <div className='row '>
              <div className='row col  justify-content-center'>
                <div className='col-auto'>
                  <label className='col-form-label'>
                    {intl.formatMessage({id: 'INPUT.LICENCEPLATE'})}
                  </label>
                </div>
                <div className='col-7'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='FV...'
                    {...formik.getFieldProps('licence_plate')}
                  />
                  {formik.touched.licence_plate && formik.errors.licence_plate && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.licence_plate}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row col  justify-content-center'>
                <div className='col-auto'>
                  <label className='col-form-label'>
                    {intl.formatMessage({id: 'INPUT.TIMEINTERVAL'})}
                  </label>
                </div>
                <div className='col-7'>
                  <Flatpickr
                    options={{
                      mode: 'range',
                      maxDate: new Date(Date.now()),
                      dateFormat: 'Y-m-d H:i:S',
                      enableTime: true,
                      time_24hr: true,
                      altFormat: "Y-m-d H:i:S",
                    }}
                    className='form-control'
                    placeholder='Pick date'
                    onChange={handleDateChange}
                    value={[formik.values.time_travel]}
                  />{formik.touched.time_travel && formik.errors.time_travel && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.time_travel}</div>
                    </div>
                  )}
                </div>
              </div>
              <div
                className='col-2  d-flex justify-content-end'
                data-kt-button='true'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_1'
              >
                <button type='submit' className='btn btn-primary'>
                  {intl.formatMessage({id: 'SEARCH.BUTTON'})}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className='modal fade" tabIndex={-1}' id='kt_modal_1'>
          <div className='modal-dialog modal-dialog-centered mw-900px'>
            <div className='modal-content'>
              <Car_Table />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search_Card
