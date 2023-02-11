import React from 'react';

import styles from './sidebar.module.scss';

const SkeletonPersonal = () => (
  <div className={`${styles.personal} ${styles.skeleton}`}>
    <p className={styles.personal_name}>{}</p>
    <div className={styles.avatar}>{}</div>
  </div>
)

export default SkeletonPersonal
