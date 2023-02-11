import React from 'react';

import Input from '../../../../UI/input/input';

import VolumeSvg from './volume-svg/volume';
import styles from './volume.module.scss'

const Volume = ({className}) => (
  <div className={className}>
    <div className={styles.container}>
      <div className={styles.image}>
        <VolumeSvg className={styles.icon}/>
      </div>
      <div className={styles.progress}>
        <Input classInput={styles.progress_line} type='range'/>
      </div>
    </div>
  </div>
);

export default Volume;
