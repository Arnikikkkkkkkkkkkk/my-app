/* eslint-disable jsx-a11y/media-has-caption */
import React, {useState, useRef, useCallback, useEffect} from 'react';
import { Outlet } from 'react-router-dom';

import SkeletonBar from '../../skeleton/bar/skeleton-bar';
import SkeletonSidebar from '../../skeleton/sidebar/skeleton-sidebar';
import Bar from '../bar/bar';
import Footer from '../footer/footer';
import NavBar from '../nav/nav';
import Sidebar from '../sidebar/sidebar';

import styles from './main.module.scss';


const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const [isPlay, setIsPlay] = useState(false);
  const [trackData, setTrackData] = useState([]);
  const [currentTrack, setTrack] = useState(null);
  const [progressTime, setProgressTime] = useState(null)

  const refButton = useRef([]);
  const refAudio = useRef(null);

  const handlerClickWindow = useCallback(() => {
    window.addEventListener('click', (event) => {
      const { target } = event;
  
      const targetElement = refButton.current.find(element => {
        if(target.closest('.js-button') === null) {
          return null
        } 
        if (element === target.closest('.js-button')) {
          return element;
        } 
        return null   
      })
  
      if(target.closest('.js-button') !== targetElement) {
        setActiveModal(false);
      };
    })
  }, [])
  
  const handlerOnKeyDown = (event) => {
    const button = event.target.closest('.js-button');
    const nameButton = button.getAttribute('name');
  
    if(event.key === 'Enter') {
      setActiveModal(nameButton) 
    }
  }
  
  const handlerModalButtonActive = (event) => {
    const button = event.target.closest('.js-button');
    const nameButton = button.getAttribute('name');
  
    if(event.target.closest('.modal')) {
      return
    }
    if(nameButton === activeModal) {
      setActiveModal(null)
      return;
    };
    setActiveModal(nameButton);
  }

  useEffect(() => {
    if(isPlay) {
      refAudio.current.play();
    } else {
      refAudio.current.pause()
    }
  }, [isPlay]);

  const getTimeAudio = () => {
    const { duration, currentTime } = refAudio.current

    setProgressTime({...progressTime, 'progress': (currentTime / duration) * 100, 'duration': duration})
  }

  const handlerEndAudio = () => {
    const { ended } = refAudio.current
    const index = trackData.findIndex(track => track.name === currentTrack.name)
    const lastIndexTrack = trackData.length - 1;

    if(ended) {
      if(index === lastIndexTrack) {
        setTrack(trackData[0])
      }
  
      if(index !== lastIndexTrack) {
        setTrack(trackData[index + 1])
      }
      setIsPlay(!isPlay)
    };

    setTimeout(() => {
      setIsPlay(true)
      refAudio.current.play();
    }, 500);
  }

  return(
    <>
      <main className={styles.main}>
        <NavBar className={styles.main__nav}/>
        {!loading && <audio
          preload='true'
          src={currentTrack ? currentTrack.track_file : null}
          ref={refAudio}
          onTimeUpdate={getTimeAudio}
          onEnded={handlerEndAudio}
        />}
        <Outlet context={[
          loading, 
          handlerModalButtonActive, 
          handlerOnKeyDown, 
          handlerClickWindow, 
          setLoading,
          styles,
          activeModal,
          refButton,
          setTrackData,
          setTrack
        ]}/>
        {loading && <SkeletonSidebar className={styles.main__sidebar}/> } 
        {!loading && <Sidebar className={styles.main__sidebar}/>}
      </main>
      {loading && <SkeletonBar/>} 
      {!loading && <Bar 
        isPlay={isPlay} 
        setIsPlay={setIsPlay}
        trackData={trackData}
        refAudio={refAudio}
        currentTrack={currentTrack}
        setTrack={setTrack}
        progressTime={progressTime}/>}
      <Footer/>
    </>
  )
} 

export default Layout;
