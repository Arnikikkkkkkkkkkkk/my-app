
import { useState, useEffect } from 'react';
import * as Styled from './styles'

 // ------------------------------ SideBar-------------------------- //

function UserName() {
    return(
        <Styled.SidebarPersonalName>Biba and Boba</Styled.SidebarPersonalName>
    )
}

function UserAvatar() {
    return(
        <Styled.SidebarAvatar />
    )
}

function SidebarPersonal() {
    return(
        <Styled.SidebarPersonal>
            <UserName />
            <UserAvatar />
        </Styled.SidebarPersonal>
    )
}

function SidebarItem(props) {

    return(
        <Styled.SidebarItem>
            <Styled.SidebarLink href='http://'>
                <Styled.SidebarImage src={props.image} alt='day"s playlist' />
            </Styled.SidebarLink>
        </Styled.SidebarItem>
    )
}

function SidebarSkeleton() {
    return(
        <Styled.SidebarItem>
            <Styled.SidebarSkeleton></Styled.SidebarSkeleton>
        </Styled.SidebarItem>
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
        <Styled.SidebarList>
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
        </Styled.SidebarList>
    )
}

function SidebarBlock() {
    return(
        <Styled.SidebarBlock>
            <SidebarList />
        </Styled.SidebarBlock>
    )
}

function MainSideBar() {
    return(
        <Styled.MainSidebar>
            <SidebarPersonal />
            <SidebarBlock />
        </Styled.MainSidebar>
    )
}

export default MainSideBar