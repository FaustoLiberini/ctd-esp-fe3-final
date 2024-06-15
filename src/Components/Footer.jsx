import React, { useContext } from 'react';
import { ContextGlobal } from '../utils/global.context';

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const themeClass = state.theme === 'dark' ? 'dark' : '';
  return (
    <footer className={themeClass}>
      <div className='footer-izq'>
        <p>Powered by</p>
        <img src='./images/DH.png' alt='DH-logo' />
      </div>
      <div className='redes'>
        <img src='/public/images/ico-instagram.png' />
        <img src='/public/images/ico-tiktok.png' />
        <img src='/public/images/ico-whatsapp.png' />
      </div>
    </footer>
  );
}

export default Footer;
