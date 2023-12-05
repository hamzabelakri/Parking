/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import LoginModal from '../Modals/UserAuthModal'
import {useAuth} from '../../modules/auth'
import FrontPage from './FrontPage'



const DashboardWrapper: FC = () => {
  const intl = useIntl()
  const {currentUser} = useAuth()

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <FrontPage />

    </>
  )
  }

export default DashboardWrapper
