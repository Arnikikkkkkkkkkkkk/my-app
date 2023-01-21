import './css/style.css';

import Bar from './bar';
import MainCenterBlock from './centerblock';
import MainSideBar from './sidebar';
import Navigation from './nav';

function Footer() {
    return(
        <footer className='footer' />
    )
}

function Main() {
    return(
        <main className='main'>
            <Navigation />
            <MainCenterBlock />
            <MainSideBar />
        </main>
    )
}

function Container() {
    return(
        <div className='container'>
            <Main />
            <Bar />
            <Footer />
        </div>
    )
}

function Wrapper() {
    return(
        <div className='wrapper'>
            <Container />
        </div>
    )
}

export default Wrapper