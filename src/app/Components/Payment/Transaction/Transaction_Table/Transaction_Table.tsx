import React from 'react';
import { useIntl } from 'react-intl';

const Transaction_Table = ({ transaction_Data }) => {
  const intl = useIntl();
  const { epan, licence_plate, card_type, entry_time, duration_stay } = transaction_Data?.ticket_data || {};

  return (
    <div className='mb-0'>
      <div className='row gx-10'>
        <div className='col-lg-12'>
          <label className='form-label fs-6 fw-bold text-gray-700'>EPAN</label>

          <div className='mb-5'>
            <input type='text' className='form-control' placeholder={epan} />
          </div>
        </div>
      </div>
      <div className='row gx-10'>
        <div className='col-lg-6'>
          <label className='form-label fs-6 fw-bold text-gray-700'>
            {intl.formatMessage({ id: 'INPUT.LICENCEPLATE' })}
          </label>

          <div className='mb-5'>
            <input type='text' className='form-control' placeholder={licence_plate} />
          </div>
        </div>

        <div className='col-lg-6'>
          <label className='form-label fs-6 fw-bold text-gray-700'>
            {intl.formatMessage({ id: 'INPUT.CARDTYPE' })}
          </label>

          <div className='mb-5'>
            <input type='text' className='form-control' placeholder={card_type} />
          </div>
        </div>
      </div>
      <div className='row gx-10'>
        <div className='col-lg-6'>
          <label className='form-label fs-6 fw-bold text-gray-700'>
            {intl.formatMessage({ id: 'INPUT.ENTRYTIME' })}
          </label>

          <div className='mb-5'>
            <input type='text' className='form-control' placeholder={entry_time} />
          </div>
        </div>

        <div className='col-lg-6'>
          <label className='form-label fs-6 fw-bold text-gray-700'>
            {intl.formatMessage({ id: 'INPUT.DURATIONSTAY' })}
          </label>

          <div className='mb-5'>
            <input type='text' className='form-control' placeholder={duration_stay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction_Table;
