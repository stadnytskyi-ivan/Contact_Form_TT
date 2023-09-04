import './Logo.scss'
import logo from '../../images/instagram-logo.svg'

export const Logo = () => (
<a href="https://www.instagram.com/creator_it_academy/" target="_blank" >
<img
  src={logo}
  alt="logo"
  className='logo'
/>
</a>);