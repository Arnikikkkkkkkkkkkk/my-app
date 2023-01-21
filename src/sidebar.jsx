import './css/style.css';


 // ------------------------------ SideBar-------------------------- //

function UserName() {
    return(
        <p className='sidebar__personal-name'>Sergey.Ivanov</p>
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

function SidebarList() {
    return(
        <div className='sidebar__item'>
            <SidebarItem image = "playlist01.png" />
            <SidebarItem image = "playlist02.png" />
            <SidebarItem image = "playlist03.png" />
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