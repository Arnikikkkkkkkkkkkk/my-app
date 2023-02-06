
import * as Styled from './styles';


import Bar from '../bar/bar';
import MainCenterBlock from '../centerblock/centerblock';
import MainSideBar from '../sidebar/sidebar';
import Navigation from '../navigation/nav';





function Footer() {
    return(
        <footer className='footer' />
    )
}

function Main() {
    return(
        <Styled.Main>
            <Navigation />
            <MainCenterBlock />
            <MainSideBar />
        </Styled.Main>
    )
}

export function Container() {
    return(
        <Styled.Container>
            <Main />
            <Bar />
            <Footer />
        </Styled.Container>
    )
}

