import './css/style.css';
import { useState, useEffect } from 'react';



function Progress(){
    return(
        <div className='bar__player-progress' />
    )
}

// -------------------Player__Controls----------------------//

function ButtonPrevious(){
    return(
        <div className='player__btn-prev'>
            <svg className='player__btn-prev-svg' alt='prev'>
                <use xlinkHref='img/icon/sprite.svg#icon-prev' />
            </svg>
        </div>
    )
}

function ButtonPlay(){
    return(
        <div className='player__btn-play _btn'>
            <svg className='player__btn-play-svg'>
                <use xlinkHref='img/icon/sprite.svg#icon-play' />
            </svg>
        </div>
    )
}

function ButtonNext(){
    return(
        <div className='player__btn-next'>
            <svg className='player__btn-next-svg' alt='next'>
                <use xlinkHref='img/icon/sprite.svg#icon-next' />
            </svg>
        </div>
    )
}

function ButtonRepeat(){
    return(
        <div className='player__btn-repeat _btn-icon'>
            <svg className='player__btn-repeat-svg' alt='repeat'>
                <use xlinkHref='img/icon/sprite.svg#icon-repeat' />
            </svg>
        </div>
    )
}

function ButtonShuffle(){
    return(
        <div className='player__btn-shuffle _btn-icon'>
            <svg className='player__btn-shuffle-svg' alt='shuffle'>
                <use xlinkHref='img/icon/sprite.svg#icon-shuffle' />
            </svg>
        </div>
    )
}

function PlayerControls() {
    return(
        <div className='player__controls'>
            <ButtonPrevious />
            <ButtonPlay />
            <ButtonNext />
            <ButtonRepeat />
            <ButtonShuffle />
        </div>
    )
}

// ------------------------------Player__Track-Play-----------------------//

function TrackPlayImage(){
    return(
        <div className='track-play__image'>
            <svg className='track-play__svg' alt='music'>
                <use xlinkHref='img/icon/sprite.svg#icon-note' />
            </svg>
        </div>
    )
}

function TrackPlayAuthor(props){
    return(
        <div className='track-play__author'>
            <a className='track-play__author-link' href={props.link}>{props.text}</a>
        </div>
    )
}

function TrackPlayAlbum(props){
    return(
        <div className='track-play__album'>
            <a className='track-play__album-link' href={props.link}>{props.text}</a>
        </div>
    )
}

function TrackPlaySkeletonImage() {
    return(
        <div className='track-play__image'>
            <div className='skeleton__track_image'></div>
        </div>
        )
}

function TrackPlaySkeletonAuthor() {
    return(
        <div className='track-play__author'>
            <div className='skeleton__track_author'></div>
        </div>
    )
}

function TrackPlaySkeletonAlbum(){
    return(
        <div className='track-play__album'>
            <div className='skeleton__track_album'></div>
        </div>
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
        <div className='track-play__contain'>
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
           
        </div>
    )
}

function TrackPlayLike(){
    return(
        <div className='track-play__like _btn-icon'>
            <svg className='track-play__like-svg' alt='like'>
                <use xlinkHref='img/icon/sprite.svg#icon-like' />
            </svg>
        </div>
    )
}

function TrackPlayDislike(){
    return(
        <div className='track-play__dislike _btn-icon'>
            <svg className='track-play__dislike-svg' alt='dislike'>
                <use xlinkHref='img/icon/sprite.svg#icon-dislike' />
            </svg>
        </div>
    )
}

function TrackPlayLikeDislike(){
    return(
        <div className='track-play__like-dis'>
            <TrackPlayLike />
            <TrackPlayDislike />
        </div>
    )
}

function PlayerTrackPlay(){
    return(
        <div className='player__track-play track-play'>
            <TrackPlayContain />
            <TrackPlayLikeDislike />
        </div>
    )
}


// ----------------------------Bar__Player-------------------------//

function BarPlayer(){
    return(
        <div className='bar__player player'>
            <PlayerControls />
            <PlayerTrackPlay />
        </div>
    )
}

// ----------------------------Bar__Volume---------------------------//

function VolumeImage() {
    return(
        <div className='volume__image'>
            <svg className='volume__svg' alt='volume'>
                <use xlinkHref='img/icon/sprite.svg#icon-volume' />
            </svg>
        </div>
    )
}

function VolumeProgress(){
    return(
        <div className='volume__progress _btn'>
            <input className='volume__progress-line _btn' type='range' name='range' />
        </div>
    )
}

function BarVolumeBlock() {
    return(
        <div className='bar__volume-block volume'>
            <div className='volume__content'>
                <VolumeImage />
                <VolumeProgress />
            </div>
        </div>
    )
}



function BarPlayerBlock(){
    return(
        <div className='bar__player-block'>
            <BarPlayer />
            <BarVolumeBlock />
        </div>
    )
}

function BarContent() {
    return(
        <div className='bar__content'>
            <Progress />
            <BarPlayerBlock />
        </div>
    )
}


function Bar() {
    return(
        <div className='bar'>
            <BarContent />
        </div>
    )
}

export default Bar;