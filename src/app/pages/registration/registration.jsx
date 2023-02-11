import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './registration.module.scss';

const Registration = () => (
  <main className={styles.main}>
    <Outlet />
  </main>
);


export default Registration;
