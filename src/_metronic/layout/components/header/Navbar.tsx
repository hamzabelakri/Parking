import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'
import {useLang} from '../../../i18n/Metronici18n'
import {LanguageSwitcher} from '../../../partials/layout/language-drawer/LanguageSwitcher'

const itemClass = 'ms-1 ms-md-4'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
const userAvatarClass = 'symbol-35px'
const btnIconClass = 'fs-2'

const Navbar = () => {
  const {config} = useLayout()

  return (
    <div className='app-navbar flex-shrink-0'>
      <LanguageSwitcher />

      <div className={clsx('app-navbar-item', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('/media/avatars/300-3.jpg')} alt='' />
        </div>
        <HeaderUserMenu />
      </div>

      {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='kt_app_header_menu_toggle'
          >
            <KTIcon iconName='text-align-left' className={btnIconClass} />
          </div>
        </div>
      )}

      {/*   <div className='app-navbar-item ms-2 ms-lg-6 '>
        <a
          href='../../demo39/dist/authentication/layouts/corporate/sign-in.html'
          className='btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
        >
          <i className='ki-outline ki-exit-right fs-1' />
        </a>
      </div> */}
      <div className='app-navbar-item ms-2 ms-lg-6 '>
        <img src='media/buttons//Pause-Shift.png' />
      </div>
      <div className='app-navbar-item ms-2 ms-lg-6 '>
        <img src='media/buttons//Close-Shift.png' />
      </div>

      <div className='app-navbar-item ms-2 ms-lg-6 ms-n2 me-3 d-flex d-lg-none'>
        <div
          className='btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
          id='kt_app_aside_mobile_toggle'
        >
          <i className='ki-outline ki-burger-menu-2 fs-2' />
        </div>
      </div>
    </div>
  )
}

export {Navbar}
