import React from 'react';

import styles from './playlist.module.scss';
import SkeletonPlaylistItem from './skeleton-playlist-item';

const SkeletonPlaylist = ({className}) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className={`${className} ${styles.playlist}`}>
      {Array(8).fill().map((item, index) => (<SkeletonPlaylistItem className={styles} key={numbers[index]}/>))}
    </div>
  )
}

export default SkeletonPlaylist
