import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import useAuth from '../../hook/useAuth';
import NavBurger from '../../UI/burger/nav-burger';
import NavLogo from '../../UI/logo/logo';
import NavMenu from '../../UI/menu/nav-menu';

import styles from './nav.module.scss';


const NavBar = ({className}) => {
  const [MenuActive, setMenuActive] = useState(false);
  const params = useParams();
  const {signOut} = useAuth();

  const listMenuItem = [
    {
      id: 1, body: 'Главное', 
      src: `/mini-spotyfi/${params.user}/player/`
    }, 
    {
      id: 2, body: 'Мой плейлист',  
      src: `/mini-spotyfi/${params.user}/playlist/`
    }, 
    {
      id: 3, body: 'Войти',  
      src: '/mini-spotyfi/',
      onClick: signOut
    }
  ]

  return(
    <nav className={className}>
      <NavLogo className={styles.logo}/>
      <NavBurger className={styles.burger} setActive={setMenuActive} active={MenuActive}/>
      <NavMenu className={styles.menu} items={listMenuItem} active={MenuActive}/>
    </nav>
  )
}

export default NavBar;
