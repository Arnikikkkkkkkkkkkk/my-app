import React from 'react';


import PlayerController from '../../components/bar/player/controls/controls';
import Volume from '../../components/bar/player/volume/volume';

import styles from './player.module.scss'
import SkeletonPlayerTrack from './skeleton-track';

const SkeletonPlayer = ({className}) => (
  <div className={className.player_block}>
    <div className={`${className.player}`}>
      <PlayerController/>
      <SkeletonPlayerTrack className={styles.play}/>
    </div>
    <Volume className={className.volume_block}/>
  </div>
)

export default SkeletonPlayer;
