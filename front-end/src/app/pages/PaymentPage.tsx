/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../_metronic/layout/core'
import MainPage from '../Components/Payment/MainPage'
import {useAuth} from '../modules/auth'

const PaymentPage: FC = () => {
  const intl = useIntl()
  const {currentUser} = useAuth()

  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.PAYMENT'})}</PageTitle> */}
      <MainPage />
    </>
  )
}

export default PaymentPage
