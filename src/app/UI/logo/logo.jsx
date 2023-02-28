import React from 'react';

import logoLight from '../../../assets/images/form-logo.png'
import logo from '../../../assets/images/logo.png'
import { themes } from '../../components/theme/theme-provider';

import styles from './logo.module.scss';


const NavLogo = ({className, theme}) => (
  <div className={`${className}`}>
    <img 
      className={`${styles.image}`} 
      src={theme === themes.light ? logoLight : logo} 
      alt="logo" />
  </div>
)

export default NavLogo;
