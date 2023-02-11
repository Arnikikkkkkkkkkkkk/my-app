import React from 'react';

import Bar from '../../components/bar/bar';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/nav/nav';

import CenterBlockNotFound from './center-block/not-found-center-block';
import styles from './not-found.module.scss'
import SidebarNotFound from './sidebar/not-found-sidebar';


const NotFound = () => (
  <>
    <main className={styles.main}>
      <NavBar className={styles.main__nav}/>
      <CenterBlockNotFound className={styles.center}/>
      <SidebarNotFound className={styles.main__sidebar}/>
    </main>
    <Bar/>
    <Footer/>
  </>
)

export default NotFound;
