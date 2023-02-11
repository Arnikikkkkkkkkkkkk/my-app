import React from 'react';

import styles from './button.module.scss'

const Button = ({children, onClick}) => (
  <button className={styles.button} type="button" onClick={onClick}>{children}</button>
)

export default Button;
