import React from 'react';

import styles from './bar.module.scss';
import Player from './player/player';
import Progress from './progress/progress';

const Bar = (
  {
    isPlay, 
    setIsPlay, 
    trackData, 
    refAudio, 
    currentTrack,
    progressTime,
    setTrack
  }) => (
    <div className={styles.bar}>
      <div className={styles.bar_container}>
        <Progress progressTime={progressTime} refAudio={refAudio}/>
        <Player 
          className={styles}
          isPlay={isPlay} 
          setIsPlay={setIsPlay}
          trackData={trackData}
          refAudio={refAudio}
          currentTrack={currentTrack}
          setTrack={setTrack}/>
      </div>
    </div>
)

export default Bar;
