/* eslint import/no-cycle: [2, { maxDepth: 1 }] */



import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import logo from './logo-log.png';







function StartscreenLogo () {
    return(
        <Styled.StartscreenDivLogo>
            <Styled.StartscreenLogo src={logo}/>
        </Styled.StartscreenDivLogo>
        
    )

}

function StartscreenLogin () {
    return(
        <>
        <Styled.StartscreenInput type='login' placeholder='Логин'></Styled.StartscreenInput>
        <Styled.StartscreenInput type='password' name='password' placeholder='Пароль'></Styled.StartscreenInput>
        </>

    )
}

function StartscreenEnter () {

    return(
        <Styled.StartscreenButton >Войти</Styled.StartscreenButton>
    )
}

function StartscreenButtonRegister () {
    const navigate = useNavigate();
    const path = "/register";

    const handleClick = (e) => {
        e.preventDefault();
        navigate( path, { replace: true });
      
        }


    return(
        <Styled.StartscreenButtonReg onClick={handleClick}>Зарегистрироваться</Styled.StartscreenButtonReg>
    )
}

function StartscreenForm() {
    const navigate = useNavigate();
    const path = "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('token', 'true');
        navigate( path, { replace: true });
      
        }

    return(
        <Styled.StartscreenForm onSubmit={handleSubmit}>
            <StartscreenLogin />
            <StartscreenEnter />
            <StartscreenButtonRegister />          

        </Styled.StartscreenForm>

    )
}

function StartscreenModal () {
    return(
        <Styled.StartscreenRegister>
            <StartscreenLogo />
            <StartscreenForm />
        </Styled.StartscreenRegister>

    )
}

function StartScreen () {
    return(
        <Styled.StartscreenContainer>
            <StartscreenModal />
        </Styled.StartscreenContainer>
    )

}

export default StartScreen;