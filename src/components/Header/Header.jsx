import React from 'react';
import logo from '../../assets/icons/logo.svg';

import './style.scss';

export const Header = () => {
  return (
    <div className="header-area">
      <img src={logo} className="header-logo" alt="logo" />
    </div>
  );
};
