import React from 'react';

import styles from './track.module.scss';

const SkeletonPlaylistItem = ({className}) => (
  <div className={className.item}>
    <div className={`${className.track} ${className.track}`}>
      <div className={styles.title}>
        <div className={`${styles.image} ${styles.skeleton}`}/>
        <div className={`${styles.title_text} ${styles.skeleton}`}/>
      </div> 
      <div className={`${styles.author} ${styles.skeleton}`} />
      <div className={`${styles.album} ${styles.skeleton}`} />
    </div>
  </div>
)

export default SkeletonPlaylistItem
