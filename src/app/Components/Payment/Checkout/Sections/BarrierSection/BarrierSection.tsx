import React from 'react';
import { ButtonsData } from '../BarrierSection/ButtonsData';
import { useIntl } from 'react-intl';

const BarrierSection: React.FC = () => {
  const intl = useIntl()

  const renderIconRow = (icons) => (
    <div className='row'>
      {icons.map((icon, index) => (
        <div key={index} className='col-md-6 my-2'>
          <label
            className='btn  btn-outline btn-flex btn-active-color-primary btn-active-light-primary w-100 px-4 gap-2'
            data-kt-button='true'
          >
            <input className='btn-check' type='radio' name='method' defaultValue={0} />
            <img src={icon.img} alt={icon.title} className='icon-img' />
            <span className='fs-8 fw-bold d-block'>{icon.title}</span>
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className='card mb-5'>
        <div
          className='d-flex flex-column gap-5 gap-xxl-0 px-2 py-2'
          data-kt-buttons='true'
          data-kt-buttons-target='[data-kt-button]'
        >
          {renderIconRow(ButtonsData.slice(0, 2))}
          {renderIconRow(ButtonsData.slice(2, 4))}
        </div>
      </div>
      <div className='modal fade" tabIndex={-1}' id='kt_modal_1'>
        <div className='modal-dialog modal-dialog-centered mw-900px'>
          <div className='modal-content'></div>
        </div>
      </div>
    </>
  );
};

export default BarrierSection;
