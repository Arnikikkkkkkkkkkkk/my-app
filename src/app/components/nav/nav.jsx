import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import useAuth from '../../hook/useAuth';
import useTheme from '../../hook/useTheme';
import NavBurger from '../../UI/burger/nav-burger';
import NavLogo from '../../UI/logo/logo';
import NavMenu from '../../UI/menu/nav-menu';
import { themes } from '../theme/theme-provider';

import styles from './nav.module.scss';


const NavBar = ({className}) => {
  const [MenuActive, setMenuActive] = useState(false);
  const params = useParams();
  const {signOut} = useAuth();
  const {theme, setTheme} = useTheme();

  const handlerTheme = () => {
    if(theme === themes.light) setTheme(themes.dark)
    if(theme === themes.dark) setTheme(themes.light)
  }

  const listMenuItem = [
    {
      id: 1, 
      body: 'Главное', 
      src: `/mini-spotyfi/${params.user}/player/`
    }, 
    {
      id: 2, 
      body: 'Мой плейлист',  
      src: `/mini-spotyfi/${params.user}/playlist/`
    }, 
    {
      id: 3, 
      body: 'Войти',  
      src: '/mini-spotyfi/',
      onClick: signOut
    },
  ]

  return(
    <nav className={className}>
      <NavLogo theme={theme} className={styles.logo}/>
      <NavBurger className={styles.burger} setActive={setMenuActive} active={MenuActive}/>
      <NavMenu 
        className={styles.menu} 
        items={listMenuItem} 
        active={MenuActive}
        theme={theme}
        handlerTheme={handlerTheme}/>
    </nav>
  )
}

export default NavBar;
