import React from 'react';

import useAuth from '../../hook/useAuth';

import SidebarBlock from './block/sidebar-block';
import Personal from './personal/personal';
import styles from './sidebar.module.scss';


const Sidebar = ({className}) => {
  const { user } = useAuth();
  return(
    <div className={className}>
      <Personal styles={styles} infoPersonal={user}/>
      <SidebarBlock styles={styles}/>
    </div>
  )
}

export default Sidebar
