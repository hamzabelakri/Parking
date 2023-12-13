import React from 'react';

const buttonsData = [
  {
    id: 1,
    icon: 'ki-outline ki-chart-line-star',
    title: 'Finances',
    width: '100px',
  },
  {
    id: 2,
    icon: 'ki-outline ki-bus',
    title: 'Education',
    width: '100px',
  },
  {
    id: 3,
    icon: 'ki-outline ki-calendar',
    title: 'Events',
    width: '90px',
  },
  {
    id: 4,
    icon: 'ki-outline ki-artificial-intelligence',
    title: 'AI',
    width: '100px',
  },
  {
    id: 5,
    icon: 'ki-outline ki-ship',
    title: 'Logistics',
    width: '100px',
  },
  {
    id: 6,
    icon: 'ki-outline ki-bitcoin',
    title: 'Crypto',
    width: '100px',
  },
  /* {
    id: 7,
    icon: 'ki-outline ki-people',
    title: 'Society',
    width: '100px',
  }, */
];

const Actions = () => {
  return (
    <div className='card mt-8'>
      <div className='card-header'>
        <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
          <div className='d-flex flex-column flex-column-fluid'>
            <div id='kt_app_content' className='app-content pt-4'>
              <div className='app-toolbar-wrapper w-100 mb-2'>
                <div className='nav d-flex justify-content-xxl-between flex-wrap gap-5'>
                  {buttonsData.map((button) => (
                    <li key={button.id} className='nav-item mb-2'>
                      <a
                        className={`nav-link btn btn-active-primary btn-center bg-gray-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-${button.width} h-85px pt-7 pt-lg-5 pb-2`}
                        data-bs-toggle='tab'
                        href='#'
                      >
                        <div className='nav-icon mb-3'>
                          <i className={`ki-outline ${button.icon} fs-2x p-0`} />
                        </div>
                        <span className='fw-semibold fs-7 lh-1'>{button.title}</span>
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
