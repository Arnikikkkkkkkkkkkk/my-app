import React from 'react';

import logo from '../../../assets/images/logo.png'

import styles from './logo.module.scss';


const NavLogo = ({className}) => (
  <div className={`${className}`}>
    <img className={`${styles.image}`} src={logo} alt="logo" />
  </div>
)

export default NavLogo;
