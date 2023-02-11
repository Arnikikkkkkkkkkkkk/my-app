import React from 'react';

import ItemMenu from './menu-item';
import styles from './menu.module.scss';


const NavMenu = ({items, active, className}) => (
  <div className ={ active ? `${styles.menu} ${styles.active} ${className}`:  `${styles.menu} ${className}`}>
    <ul className={styles.list}>
      {items.map((item) => (
        <ItemMenu key={item.id} body={item.body} src={item.src} onClick={item.onClick}/>
      )
      )}
    </ul>
  </div>
)

export default NavMenu;
