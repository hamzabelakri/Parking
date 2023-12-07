import React from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../_metronic/layout/core'
import Shift from '../Components/Shift/Shift'

const ShiftPage = () => {
  const intl = useIntl()

  return (
    <>
    <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.SHIFT'})}</PageTitle>
    <Shift />
  </>
  )
}

export default ShiftPage
