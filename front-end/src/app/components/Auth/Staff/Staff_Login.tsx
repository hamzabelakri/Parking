/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import clsx from 'clsx'
import {useFormik} from 'formik'
import toast, {Toaster} from 'react-hot-toast'
import {useIntl} from 'react-intl'
import {useNavigate} from 'react-router-dom'
import {loginSchema, initialValues} from './Form_Settings'
import UserSession from '../../Session/UserSession'
import {useAuth} from '../../../modules/auth'
import {useDispatch} from 'react-redux'
import {staff_Login} from '../../../../redux/Auth/Auth_Action'

interface UserLoginFormProps {
  closeModal: (value: boolean) => void
  open_Admin_Auth: () => void
}

const Staff_Login: React.FC<UserLoginFormProps> = ({closeModal, open_Admin_Auth}) => {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(staff_Login(formik.values))
    },
  })
  const intl = useIntl()
  return (
    <form className='' onSubmit={formik.handleSubmit} noValidate id='kt_login_signin_form'>
      <Toaster />
      <div className='d-flex justify-content-between'>
        <h1 className='text-dark fw-bolder mb-3'>
          {intl.formatMessage({id: 'AUTH.LOGIN.BUTTON'})}
        </h1>
        <i className='bi bi-gear fs-2x text-center cursor-pointer' onClick={open_Admin_Auth}></i>
      </div>

      <div className='fv-row'>
        <label className='form-label fs-6 fw-bolder text-dark'></label>
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
      <div className='fv-row mb-6'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'></label>
        <input
          type='password'
          placeholder='Password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      <div className='d-grid'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading ? (
            <span className='indicator-label'>
              {intl.formatMessage({id: 'AUTH.LOGIN.CONTINUE'})}
            </span>
          ) : (
            <span className='indicator-progress' style={{display: 'block'}}>
              {intl.formatMessage({id: 'AUTH.LOGIN.WAIT'})}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <div className='mt-3'>
          <UserSession className='card-xl-stretch mb-xl-8' />
        </div>
      </div>
    </form>
  )
}
export default Staff_Login
