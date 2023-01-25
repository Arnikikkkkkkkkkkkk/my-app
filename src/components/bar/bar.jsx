import { useState, useEffect } from 'react';
import * as Styled from './styles'



function Progress(){
    return(
        <Styled.BarPlayerProgress />
    )
}

// -------------------Player__Controls----------------------//

function ButtonPrevious(){
    return(
        <Styled.PlayerButtonPrev>
            <Styled.PlayerButtonPrevSvg alt='prev'>
                <use xlinkHref='img/icon/sprite.svg#icon-prev' />
            </Styled.PlayerButtonPrevSvg>
        </Styled.PlayerButtonPrev>
    )
}

function ButtonPlay(){
    return(
        <Styled.PlayerButtonPlay>
            <Styled.PlayerButtonPlaySvg>
                <use xlinkHref='img/icon/sprite.svg#icon-play' />
            </Styled.PlayerButtonPlaySvg>
        </Styled.PlayerButtonPlay>
    )
}

function ButtonNext(){
    return(
        <Styled.PlayerButtonNext>
            <Styled.PlayerButtonNextSvg alt='next'>
                <use xlinkHref='img/icon/sprite.svg#icon-next' />
            </Styled.PlayerButtonNextSvg>
        </Styled.PlayerButtonNext>
    )
}

function ButtonRepeat(){
    return(
        <Styled.PlayerButtonRepeat>
            <Styled.PlayerButtonRepeatSvg alt='repeat'>
                <use xlinkHref='img/icon/sprite.svg#icon-repeat' />
            </Styled.PlayerButtonRepeatSvg>
        </Styled.PlayerButtonRepeat>
    )
}

function ButtonShuffle(){
    return(
        <Styled.PlayerButtonShuffle>
            <Styled.PlayerButtonShuffleSvg alt='shuffle'>
                <use xlinkHref='img/icon/sprite.svg#icon-shuffle' />
            </Styled.PlayerButtonShuffleSvg>
        </Styled.PlayerButtonShuffle>
    )
}

function PlayerControls() {
    return(
        <Styled.PlayerControls>
            <ButtonPrevious />
            <ButtonPlay />
            <ButtonNext />
            <ButtonRepeat />
            <ButtonShuffle />
        </Styled.PlayerControls>
    )
}

// ------------------------------Player__Track-Play-----------------------//

function TrackPlayImage(){
    return(
        <Styled.TrackPlayImage>
            <Styled.TrackPlaySvg>
                <use xlinkHref='img/icon/sprite.svg#icon-note' />
            </Styled.TrackPlaySvg>
        </Styled.TrackPlayImage>
    )
}

function TrackPlayAuthor(props){
    return(
        <Styled.TrackPlayAuthor>
            <Styled.TrackPlayLinkAuthor href={props.link}>{props.text}</Styled.TrackPlayLinkAuthor>
        </Styled.TrackPlayAuthor>
    )
}

function TrackPlayAlbum(props){
    return(
        <Styled.TrackPlayAlbum>
            <Styled.TrackPlayLinkAlbum href={props.link}>{props.text}</Styled.TrackPlayLinkAlbum>
        </Styled.TrackPlayAlbum>
    )
}

function TrackPlaySkeletonImage() {
    return(
        <Styled.TrackPlayImage>
            <Styled.SkeletonTrackImage></Styled.SkeletonTrackImage>
        </Styled.TrackPlayImage>
        )
}

function TrackPlaySkeletonAuthor() {
    return(
        <Styled.TrackPlayAuthor>
           <Styled.SkeletonTrackAlbum></Styled.SkeletonTrackAlbum>
        </Styled.TrackPlayAuthor>
    )
}

function TrackPlaySkeletonAlbum(){
    return(
        <Styled.TrackPlayAlbum>
            <Styled.SkeletonTrackAlbum></Styled.SkeletonTrackAlbum>
        </Styled.TrackPlayAlbum>
    )
}

function TrackPlayContain(){
    const [skeleton, setSkeleton] = useState(false);
  
    useEffect(() => {
        setSkeleton(true);
        setTimeout(async () => {

            setSkeleton(false);

        }, 5000);
    }, []);

    return(
        <Styled.TrackPlayContain>
             {!skeleton ?
             (
            <>
            <TrackPlayImage />
            <TrackPlayAuthor text='Ты та...'/>
            <TrackPlayAlbum text='Баста'/>
            </>) :
            (
                <>
                <TrackPlaySkeletonImage />
                <TrackPlaySkeletonAuthor />
                <TrackPlaySkeletonAlbum />
                </>
            )
            }          
        </Styled.TrackPlayContain>
    )
}

function TrackPlayLike(){
    return(
        <Styled.TrackPlayLike>
            <Styled.TrackPlayLikeSvg alt='like'>
                <use xlinkHref='img/icon/sprite.svg#icon-like' />
            </Styled.TrackPlayLikeSvg>
        </Styled.TrackPlayLike>
    )
}

function TrackPlayDislike(){
    return(
        <Styled.TrackPlayDislike>
            <Styled.TrackPlayDislikeSvg alt='dislike'>
                <use xlinkHref='img/icon/sprite.svg#icon-dislike' />
            </Styled.TrackPlayDislikeSvg>
        </Styled.TrackPlayDislike>
    )
}

function TrackPlayLikeDislike(){
    return(
        <Styled.TrackPlayLikeDis>
            <TrackPlayLike />
            <TrackPlayDislike />
        </Styled.TrackPlayLikeDis>
    )
}

function PlayerTrackPlay(){
    return(
        <Styled.TrackPlay>
            <TrackPlayContain />
            <TrackPlayLikeDislike />
        </Styled.TrackPlay>
    )
}


// ----------------------------Bar__Player-------------------------//

function BarPlayer(){
    return(
        <Styled.BarPlayer>
            <PlayerControls />
            <PlayerTrackPlay />
        </Styled.BarPlayer>
    )
}

// ----------------------------Bar__Volume---------------------------//

function VolumeImage() {
    return(
        <Styled.VolumeImage>
            <Styled.VolumeSvg alt='volume'>
                <use xlinkHref='img/icon/sprite.svg#icon-volume' />
            </Styled.VolumeSvg>
        </Styled.VolumeImage>
    )
}

function VolumeProgress(){
    return(
        <Styled.VolumeProgress>
            <Styled.VolumeProgressLine name='range' />
        </Styled.VolumeProgress>
    )
}

function BarVolumeBlock() {
    return(
        <Styled.BarVolumeBlock>
            <Styled.VolumeContent>
                <VolumeImage />
                <VolumeProgress />
            </Styled.VolumeContent>
        </Styled.BarVolumeBlock>
    )
}



function BarPlayerBlock(){
    return(
        <Styled.BarPlayerBlock>
            <BarPlayer />
            <BarVolumeBlock />
        </Styled.BarPlayerBlock>
    )
}

function BarContent() {
    return(
        <Styled.BarContent>
            <Progress />
            <BarPlayerBlock />
        </Styled.BarContent>
    )
}


function Bar() {
    return(
        <Styled.Bar>
            <BarContent />
        </Styled.Bar>
    )
}

export default Bar;