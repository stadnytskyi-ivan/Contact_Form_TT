import { Logo } from '../Logo/Logo';
import './Footer.scss'
export const Footer = () => (
  <div className='footer'>
    <p className="footer__text">Let’s be Friends</p>
    <div className='footer__logos'>
      <Logo />
      <Logo />
      <Logo />
    </div>
  </div>
);