import logo from '../../assets/loading.gif'

import './LoadingPage.css'

export function LoadingPage() {
  return (
    <div className='loading-page' dir='rtl'>
      <img src={logo} alt='Logo' className='loading-page__logo' />
      טוען מתכונים…
    </div>
  )
}
