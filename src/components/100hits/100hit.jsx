
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Search, ContentPlaylistTitle, SkeletonTrack, PlayListItem } from "../centerblock/centerblock";
import  Navigation  from "../navigation/nav";
import Bar from "../bar/bar";
import * as Styled from './styles'


const TRACKS = [
    { id: 1, sample: [{id: 1, author: 'Nero', album: 'Welcome Reality', title: 'Guilt', time: '4:44'},
    {id: 2, author: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22', title: 'Elektro'},
    {id: 3, author: 'Ali Bakgor', album: 'I’m Fire', time: '2:22', title: 'I’m Fire'},
    {id: 4, author: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12', title: 'Non Stop', subtitle: '(Remix)'},
    {id: 5, author: 'Jaded, Will Clarke, AR/CO', album: 'Run Run', time: '2:54', title: 'Run Run', subtitle: '(feat. AR/CO)'}]},
    { id: 2, sample: [ {id: 6, author: 'Nero222', album: 'Welcome Reality', title: 'Guilt', time: '4:44'},
    {id: 7, author: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22', title: 'Elektro'},
    {id: 8, author: 'Ali Bakgor', album: 'I’m Fire', time: '2:22', title: 'I’m Fire'},
    {id: 9, author: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12', title: 'Non Stop', subtitle: '(Remix)'},
    {id: 10, author: 'Jaded, Will Clarke, AR/CO', album: 'Run Run', time: '2:54', title: 'Run Run', subtitle: '(feat. AR/CO)'}]}
   
];

function IndiTitle() {
    return(
        <Styled.CenterblockTitle>100 Танцевальных хитов</Styled.CenterblockTitle>
    )
}

export const Content = () =>  {
    const params = useParams();
    const track = TRACKS.find((element) => element.id === Number(params.id));


    return(

            track.sample.map(({id, author, album, title, subtitle, time}) => 
            <PlayListItem key={id} author={author} album={album} title={title} subtitle={subtitle} time={time}/>
            )

    )
    
}


export function ContentPlaylistPlaylist() {


    const [skeleton, setSkeleton] = useState(false);
  
    useEffect(() => {
        setSkeleton(true);
        setTimeout(async () => {

            setSkeleton(false);

        }, 5000);
    }, []);
 

    return(
        <Styled.ContentPlaylist>
             {!skeleton ?
             <Content /> :
             (
             <>
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             </> 
             )
            } 
        </Styled.ContentPlaylist>
    )
     

}


export function CenterBlockContent(){
    return(
        <Styled.CenterblockContent>
            <ContentPlaylistTitle />
            <ContentPlaylistPlaylist />
        </Styled.CenterblockContent>
    )
}

function MainCenterBlock() {
    return(
        <Styled.MainCenterblock>
            <Search />
            <IndiTitle />
            <CenterBlockContent />
        </Styled.MainCenterblock>
    )
}




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
        </Styled.Main>
    )
}

export function PlaylistContainer() {
    return(
        <Styled.PlaylistContainer>
            <Main />
            <Bar />
            <Footer />
        </Styled.PlaylistContainer>
    )
}