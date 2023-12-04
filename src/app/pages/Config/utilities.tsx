import * as Yup from 'yup'

export const serverFormSchema = Yup.object().shape({
  ip: Yup.string().required('IP is required'),
  port: Yup.number().typeError('Must be a number').required('Port is required'),
  selectedZR: Yup.string().required('ZR is required'),
  selectedPos: Yup.string().required('Pos is required'),
})

export const initialValues = {
  ip: '',
  port: '',
  selectedZR: '',
  selectedPos: '',
}
