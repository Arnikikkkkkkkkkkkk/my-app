import React from 'react';

import Progress from '../../components/bar/progress/progress';

import styles from './bar.module.scss';
import SkeletonPlayer from './skeleton-player';


const SkeletonBar = () => (
  <div className={styles.bar}>
    <div className={styles.container}>
      <Progress styles={styles}/>
      <SkeletonPlayer className={styles}/>
    </div>
  </div>
)

export default SkeletonBar;
