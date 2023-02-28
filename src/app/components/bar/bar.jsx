/* eslint-disable jsx-a11y/media-has-caption */
import React, {useState, useEffect, useRef} from 'react';

import styles from './bar.module.scss';
import Player from './player/player';
import Progress from './progress/progress';

const Bar = ({trackData, loading}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentTrack, setTrack] = useState(trackData[0]);
  const [isRandom, setIsRandom] = useState(false);
  const [listRandomTrack, setListRandomTrack] = useState(null);
  const [progressTime, setProgressTime] = useState(null)
  const [volume, setVolume] = useState(30);
  const [isMuted, setMuted] = useState(false)
  const refAudio = useRef(null);

  useEffect(() => {
    if(refAudio) {
      refAudio.current.volume = volume / 100;
    }

    refAudio.current.muted = isMuted;
  }, [volume, isMuted]);


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
    };

    setTimeout(() => {
      refAudio.current.play()
    }, 0);
  }

  return(
    <div className={styles.bar}>
      <div className={styles.bar_container}>
        <Progress progressTime={progressTime} refAudio={refAudio}/>
        {!loading && <audio
          preload='true'
          src={currentTrack ? currentTrack.track_file : null}
          ref={refAudio}
          muted={isMuted}
          onTimeUpdate={getTimeAudio}
          onEnded={handlerEndAudio}
        />}
        <Player 
          className={styles}
          isPlay={isPlay} 
          setIsPlay={setIsPlay}
          trackData={trackData}
          refAudio={refAudio}
          currentTrack={currentTrack}
          setTrack={setTrack}
          isRandom={isRandom}
          setIsRandom={setIsRandom}
          listRandomTrack={listRandomTrack}
          setListRandomTrack={setListRandomTrack}
          volume={volume}
          setVolume={setVolume}
          muted={isMuted}
          setMuted={setMuted}/>
      </div>
    </div>
  )
}

export default Bar;
