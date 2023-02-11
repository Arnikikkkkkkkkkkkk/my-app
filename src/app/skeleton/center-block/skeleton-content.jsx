import React from 'react';

import styles from './content.module.scss'
import SkeletonPlaylist from './skeleton-playlist';
import Icon from './svg-icon/icon';

const SkeletonContent = ({className}) => (
  <div className={`${className}`}>
    <div className={`${styles.header}`}>
      <div className={`${styles.col} ${styles.col01}`}>Трек</div>
      <div className={`${styles.col} ${styles.col02}`}>Исполнитель</div>
      <div className={`${styles.col} ${styles.col03}`}>Альбом</div>
      <div className={`${styles.col} ${styles.col04}`}>
        <Icon className={styles.icon}/>
      </div>
    </div>
    <SkeletonPlaylist className={styles.playlist}/>
  </div>
)

export default SkeletonContent;
