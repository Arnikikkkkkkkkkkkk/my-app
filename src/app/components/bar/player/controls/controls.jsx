/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react';

import Next from './controller-svg/next/next';
import Pause from './controller-svg/pause/pause';
import Play from './controller-svg/play/play';
import Prev from './controller-svg/prev/prev';
import Repeat from './controller-svg/repeat/repeat';
import Shuffle from './controller-svg/shuffle/shuffle';
import styles from './controls.module.scss'

const PlayerController = (
  {
    isPlay, 
    setIsPlay, 
    setTrack, 
    trackData, 
    currentTrack, 
    refAudio,
    isRandom,
    setIsRandom
  }) => {
  const [loopActive, setLoopActive] = useState(false);

  const handlerPlayAudio = () => {
    setIsPlay(!isPlay);
  }

  const handlerBackAudio = () => {
    const index = trackData.findIndex(track => track.name === currentTrack.name)
    

    if(index === 0) {
      setTrack(trackData[trackData.length - 1])
    }

    if(index !== 0) {
      setTrack(trackData[index - 1])
    }

    if(isPlay) {
      setTimeout(() => {
        setIsPlay(true)
        refAudio.current.play();
      }, 0);
    }
  }

  const handlerNextAudio = () => {
    const index = trackData.findIndex(track => track.name === currentTrack.name)
    const rand = 0 + Math.random() * (trackData.length + 1)
    const randomIndex = Math.floor(rand);
    const lastIndexTrack = trackData.length - 1;

    if (isRandom) {
      setTrack(trackData[randomIndex])
    } else if (index === lastIndexTrack && !isRandom) {
      setTrack(trackData[0])
    } else if (index !== lastIndexTrack && !isRandom) {
      setTrack(trackData[index + 1])
    }

    if(isPlay) {
      setTimeout(() => {
        setIsPlay(true)
        refAudio.current.play();
      }, 0);
    }
  }

  const handlerRepeatAudio = () => {
    if(refAudio.current.getAttribute('loop')) {
      refAudio.current.removeAttribute('loop')
      setLoopActive(!loopActive)
      return;
    }

    refAudio.current.setAttribute('loop', 'loop');
    setLoopActive(!loopActive)
  }

  const handlerShuffleAudio = () => {
    setIsRandom(!isRandom)
  }


  return (
    <div className={`${styles.controls} js-button`}>
      <div 
        className={styles.prev}
        role="button"
        tabIndex={0}
        onClick={handlerBackAudio}>
        <Prev/>
      </div>
      <div 
        className={`${styles.play} js-button`} 
        onClick={handlerPlayAudio}
        role="button"
        tabIndex={0}>
        {!isPlay ? <Play/> : <Pause/>}
      </div>
      <div 
        className={`${styles.next} js-button`}
        role="button"
        tabIndex={0}
        onClick={handlerNextAudio}>
        <Next/>
      </div>
      <div 
        className={`${styles.repeat} js-button`}
        role="button"
        tabIndex={0}
        onClick={handlerRepeatAudio}>
        <Repeat loopActive={loopActive}/>
      </div>
      <div 
        className={`${styles.shuffle} js-button`}
        role="button"
        tabIndex={0}
        onClick={handlerShuffleAudio}>
        <Shuffle shuffleActive={isRandom}/>
      </div>
    </div>
  )
}

export default PlayerController
