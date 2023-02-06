import { useState } from 'react';
import logo from './logo.png'
import * as Styled from './styles'


function Logo() {
    return (
    <Styled.NavLogo>
        <Styled.LogoImage src={logo} alt="logo" />
    </Styled.NavLogo>
    );
}



function Menu() {
    return(
        <Styled.NavMenu>
            <Styled.MenuList>
                <Styled.MenuItem>
                    <Styled.Link href="http://">Главная</Styled.Link>
                </Styled.MenuItem>
                <Styled.MenuItem>
                    <Styled.Link href="http://">Мой плейлист</Styled.Link>
                </Styled.MenuItem>
                <Styled.MenuItem>
                    <Styled.Link href="http://">Войти</Styled.Link>
                </Styled.MenuItem>
            </Styled.MenuList>
        </Styled.NavMenu>
    )
}

function Navigation() {
    const [isMenuOpen, setVisible] = useState(false);

    const toggleVisibility = () => setVisible((isOpen) => !isOpen);
    
    return (
        <Styled.MainNav>
            <Logo />
            <Styled.NavBurger onClick={toggleVisibility} aria-hidden="true" role="button" tabIndex={0}>
            <Styled.BurgerLine  />
            <Styled.BurgerLine />
            <Styled.BurgerLine />
           
            </Styled.NavBurger>
            {isMenuOpen && (
                    
                <Menu />
                
            )}
        </Styled.MainNav>
        
        
    );
   
}

export default Navigation;