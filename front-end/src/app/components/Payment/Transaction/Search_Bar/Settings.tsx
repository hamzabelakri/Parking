import * as Yup from 'yup'
import {IntlShape, useIntl} from 'react-intl'

export const search_inputs = (intl: IntlShape) => {
  return Yup.object().shape({
    licence_plate: Yup.string().required(intl.formatMessage({id: 'LICENCE_PLATE.VALIDATION.REQUIRED'})),
  })
}

export const initialValues = {
  licence_plate: '',
}
