
import * as Yup from 'yup';
import { IntlShape } from 'react-intl';

export const search_Validation = (intl: IntlShape) => {
  return Yup.object().shape({
    licence_plate: Yup.string().required(),
    start_Date: Yup.date().required(),
    end_Date: Yup.date().required(),
  });
};

export const initialValues = {
  licence_plate: '',
  start_Date: new Date().toISOString(),
  end_Date: null,
};
