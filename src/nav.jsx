import { useState } from 'react';
import './css/style.css';
import logo from './logo.png'

function Logo() {
    return (
    <div className="nav__logo logo">
    <img src={logo} className="logo__image" alt="logo" />
    </div>
    );
}



function Menu() {
    return(
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a className="menu__link" href="http://">Главная</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="http://">Мой плейлист</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="http://">Войти</a>
                </li>
            </ul>
        </div>
    )
}

function Navigation() {
    const [isMenuOpen, setVisible] = useState(false);

    const toggleVisibility = () => setVisible((isOpen) => !isOpen);
    
    return (
        <nav className="main__nav nav">
            <Logo />
            <div className="nav__burger burger" onClick={toggleVisibility} aria-hidden="true" role="button" tabIndex={0}>
            <span className="burger__line"  />
            <span className="burger__line" />
            <span className="burger__line" />
           
            </div>
            {isMenuOpen && (
                    
                <Menu />
                
            )}
        </nav>
        
        
    );
   
}

export default Navigation;