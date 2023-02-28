import React from 'react';


import PlayerController from './controls/controls';
import styles from './player.module.scss'
import PlayerTrack from './track/track';
import Volume from './volume/volume';

const Player = (
  {
    className, 
    isPlay, 
    setIsPlay,
    refAudio,
    currentTrack,
    setTrack,
    trackData,
    isRandom,
    setIsRandom,
    listRandomTrack,
    setListRandomTrack,
    volume,
    setVolume,
    muted,
    setMuted
  }) => (
    <div className={className.player_block}>
      <div className={`${className.player}`}>
        <PlayerController 
          refAudio={refAudio}
          setIsPlay={setIsPlay}
          isPlay={isPlay}
          setTrack={setTrack}
          trackData={trackData}
          currentTrack={currentTrack}
          isRandom={isRandom}
          setIsRandom={setIsRandom}
          listRandomTrack={listRandomTrack}
          setListRandomTrack={setListRandomTrack}/>
        <PlayerTrack 
          className={styles.play}
          currentTrack={currentTrack}
            />
      </div>
      <Volume 
        className={className.volume_block}
        refAudio={refAudio}
        volume={volume}
        setVolume={setVolume}
        muted={muted}
        setMuted={setMuted}/>
    </div>
)

export default Player;
