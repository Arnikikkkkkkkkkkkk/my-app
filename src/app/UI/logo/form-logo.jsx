import React from 'react';

import logo from '../../../assets/images/form-logo.png'

import styles from './form-logo.module.scss';

const FormLogo = ({className}) => (
  <div className={className}>
    <img className={styles.logo} src={logo} alt="logo" />
  </div>
)

export default FormLogo;
