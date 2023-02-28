import React from 'react';

import ThemeDark from '../../components/nav/svg-theme/theme-dark';
import ThemeLight from '../../components/nav/svg-theme/theme-ligth';

import ItemMenu from './menu-item';
import styles from './menu.module.scss';


const NavMenu = ({items, active, className, handlerTheme, theme}) => (
  <div className ={ active ? `${styles.menu} ${styles.active} ${className}`:  `${styles.menu} ${className}`}>
    <ul className={styles.list}>
      {items.map((item) => (
        <ItemMenu key={item.id} body={item.body} src={item.src} onClick={item.onClick}/>
      )
      )}
    </ul>

    {theme === 'dark' ?  <ThemeDark onClick={handlerTheme} styleTheme={styles.theme}/> : <ThemeLight onClick={handlerTheme} styleTheme={`${styles.theme} ${styles.light}`}/>} 
  </div>
)

export default NavMenu;
