/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import CustomModal from './Modal'
import Test from './Test'

const DashboardPage: FC = () => (
  <>
    <CustomModal />
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <Test/>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
