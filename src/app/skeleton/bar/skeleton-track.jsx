import React from 'react';

import Dislike from './track-svg/dislike';
import Like from './track-svg/like';
import styles from './track.module.scss'

const SkeletonPlayerTrack = ({className}) => (
  <div className={`${className}`}>
    <div className={styles.container}>
      <div className={`${styles.image} ${styles.skeleton}`} />
      <div className={`${styles.author} ${styles.skeleton}`} />
      <div className={`${styles.album} ${styles.skeleton}`} />
    </div>
    <div className={`${styles.like_dis}`}>
      <div className={styles.like}>
        <Like className={styles.like_icon}/>
      </div>
      <div className={styles.dislike}>
        <Dislike className={styles.dislike_icon}/>
      </div>
    </div>
  </div>
)

export default SkeletonPlayerTrack;
