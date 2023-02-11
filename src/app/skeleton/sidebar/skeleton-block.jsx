import React from 'react';

import styles from './sidebar.module.scss';

const SkeletonSidebarBlock = () => (
  <div className={styles.block}>
    <div className={styles.list}>
      <div className={`${styles.item} ${styles.skeleton}`}/>
      <div className={`${styles.item} ${styles.skeleton}`}/>
      <div className={`${styles.item} ${styles.skeleton}`}/>
    </div>
  </div>
)

export default SkeletonSidebarBlock
