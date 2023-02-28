/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';

import styles from './progress.module.scss'

const Progress = ({progressTime, refAudio}) => {
  const refProgress = useRef();

  const getWidthProgress = (event) => {
    const widthProgress = refProgress.current.clientWidth;
    const offSetX = event.nativeEvent.offsetX;
    const progress = (offSetX / widthProgress) * 100;

    refAudio.current.currentTime = progress / 100 * progressTime.duration;
  };

  return(
    <div 
      className={styles.progress} 
      ref={refProgress} 
      onClick={getWidthProgress} 
      role='progressbar' 
      tabIndex={0}>
      <div 
        className={styles.band} 
        style={progressTime ? {width: `${`${progressTime.progress}%`}`} : null}/>
    </div>
  )
}

export default Progress;
