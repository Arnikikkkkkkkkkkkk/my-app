import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './menu.module.scss';

const setActive = ({isActive}) => (isActive ? (`${styles.active} ${styles.link}`) : styles.link)

const ItemMenu = ({body, src, onClick}) => (
  <li className={styles.item}>
    <NavLink to={src}>{({isActive}) => <button 
      className={setActive({isActive})} 
      type='button' onClick={onClick}>{body}</button>}
    </NavLink>
  </li>
)

export default ItemMenu;
