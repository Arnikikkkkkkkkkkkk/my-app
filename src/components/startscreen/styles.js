import styled from "styled-components";
import { LogoImage, NavLogo } from "../navigation/styles"; 

export const StartscreenRegister = styled.div`
width: 366px;
height: 439px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
border-radius: 12px;
`;

export const StartscreenDivLogo = styled(NavLogo)`
width: 140px;
height: 21px;
padding: 0;
margin-button: 42px;
background-color: transparent;
`

export const StartscreenLogo = styled(LogoImage)`
width: 140px;
height: 21px;
color: black;
`;

export const StartscreenForm = styled.form`
width: 278px;
`;

export const StartscreenInput = styled.input`
width: 278px;
font-family: 'StratosSkyeng',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.003em;
color: #E1E1E1;
padding: 8px 0;
border-width: 0 0 1px 0;
border-color: #D0CECE;
margin-bottom: 38px;
`;

export const StartscreenButton = styled.button`
width: 278px;
height: 52px;
background: #580EA2;
border-radius: 6px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.003em;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
border-radius: 6px;
&:hover{
    background: #3F007D;
}
&:active{
    background: #271A58;
}
`;


export const StartscreenButtonReg = styled(StartscreenButton)`
color: #000000;
border: 1px solid #D0CECE;
border-radius: 6px;
background: white;
border: 1px solid #D0CECE;
&:hover{
    background: #F4F5F6;
}
&:active{
    background: #D9D9D9;
}
`;

export const StartscreenContainer = styled.div`
width: 100wh;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #000000D9;
`

