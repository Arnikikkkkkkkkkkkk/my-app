import { createGlobalStyle} from 'styled-components';

import { AppRoutes } from "./routes";



import StratosSkyengWoff from './fonts/Stratos-Regular.woff';
import StratosSkyengWoff2 from './fonts/Stratos-Regular.woff2';



const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:before,
*:after {
    box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}

button,
._btn {
    cursor: pointer;
}

ul li {
    list-style: none;
}

@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url(${StratosSkyengWoff2}) format('woff2'),
        url(${StratosSkyengWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
}


html,
body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;

}
`;




function App() {
   
 const token = localStorage.getItem('token'); 

  return(
      <>
      <GlobalStyle /> 
      
      <AppRoutes user={token} />
    
      </>
      
  )
}

export default App;



