/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {useFormik} from 'formik'
import {getUserByToken, login} from '../../modules/auth/core/_requests'
import {useAuth} from '../../modules/auth'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UserSession from '../Session/UserSession'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'admin@demo.com',
  password: 'demo',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login({closeModal, openAdminAuth}) {
  const [loading, setLoading] = useState(false)
  const [incorrectLogin, setIncorrectLogin] = useState(false)

  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
        closeModal(false)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
        setIncorrectLogin(true)
        toast.error('Wrong Email or Password')
      }
    },
  })

  return (
    <form className='' onSubmit={formik.handleSubmit} noValidate id='kt_login_signin_form'>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      {/* begin::Heading */}
    
      <div className='d-flex justify-content-between'>
        <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
        <i className="bi bi-gear fs-2x text-center cursor-pointer" onClick={openAdminAuth} ></i>
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
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
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
