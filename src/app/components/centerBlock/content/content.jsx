import React from 'react';

import Playlist from '../playlist/playlist';

import styles from './content.module.scss'
import Icon from './svg-icon/icon';


const Content = ({tracks, className}) => (
  <div className={`${className}`}>
    <div className={`${styles.header}`}>
      <div className={`${styles.col} ${styles.col01}`}>Трек</div>
      <div className={`${styles.col} ${styles.col02}`}>Исполнитель</div>
      <div className={`${styles.col} ${styles.col03}`}>Альбом</div>
      <div className={`${styles.col} ${styles.col04}`}>
        <Icon className={styles.icon}/>
      </div>
    </div>
    <Playlist className={styles.playlist} tracks={tracks}/>
  </div>
)

export default Content;
