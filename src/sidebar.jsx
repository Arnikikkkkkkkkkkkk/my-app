import './css/style.css';
import { useState, useEffect } from 'react';

 // ------------------------------ SideBar-------------------------- //

function UserName() {
    return(
        <p className='sidebar__personal-name'>Biba and Boba</p>
    )
}

function UserAvatar() {
    return(
        <div className='sidebar__avatar' />
    )
}

function SidebarPersonal() {
    return(
        <div className='sidebar__personal'>
            <UserName />
            <UserAvatar />
        </div>
    )
}

function SidebarItem(props) {

    return(
        <div className='sidebar__item'>
            <a className='sidebar__link' href='http://'>
                <img className='sidebar__img' src={props.image} alt='day"s playlist' />
            </a>
        </div>
    )
}

function SidebarSkeleton() {
    return(
        <div className='sidebar__item'>
            <div className='skeleton_picture'></div>
        </div>
    )
}

function SidebarList() {
    const [skeleton, setSkeleton] = useState(false);
  
    useEffect(() => {
        setSkeleton(true);
        setTimeout(async () => {

            setSkeleton(false);

        }, 5000);
    }, []);
 
    return(
        <div className='sidebar__item'>
            {!skeleton ?
            (<>
                <SidebarItem image = "playlist01.png" />
                <SidebarItem image = "playlist02.png" />
                <SidebarItem image = "playlist03.png" />
            </>)
                
                :
            (<>
                <SidebarSkeleton />
                <SidebarSkeleton />
                <SidebarSkeleton />
            </>)
                

            }
        </div>
    )
}

function SidebarBlock() {
    return(
        <div className='sidebar__block'>
            <SidebarList />
        </div>
    )
}

function MainSideBar() {
    return(
        <div className='main__sidebar sidebar'>
            <SidebarPersonal />
            <SidebarBlock />
        </div>
    )
}

export default MainSideBar