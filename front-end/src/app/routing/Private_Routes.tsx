import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import ShiftPage from '../pages/Shift_Page'
import ConfigPage from '../pages/Config_Page'
import PaymentPage from '../pages/Payment_Page'

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='/' element={<Navigate to='/payment' />} />
        {/* Pages */}
        <Route path='payment' element={<PaymentPage />} />
        <Route path='config' element={<ConfigPage />} />
        <Route path='shift' element={<ShiftPage />} />
        <Route path='*' element={<Navigate to='/error/404' />} />
 
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
