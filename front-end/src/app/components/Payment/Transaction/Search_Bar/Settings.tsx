// front-end/src/app/components/Payment/Transaction/Search_Bar/Settings.tsx

import * as Yup from 'yup';
import { IntlShape } from 'react-intl';

export const search_inputs = (intl: IntlShape) => {
  return Yup.object().shape({
    licence_plate: Yup.string().required(intl.formatMessage({ id: 'LICENCE_PLATE.VALIDATION.REQUIRED' })),
    time_travel: Yup.date().nullable().required(intl.formatMessage({ id: 'TIME_INTERVAL.VALIDATION.REQUIRED' })),
  });
};

export const initialValues = {
  licence_plate: '',
  time_travel: null,
};
