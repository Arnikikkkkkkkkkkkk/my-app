import React from 'react';

import useTheme from '../../../../hook/useTheme';
import Input from '../../../../UI/input/input';
import { themes } from '../../../theme/theme-provider';


import VolumeSvg from './volume-svg/volume';
import styles from './volume.module.scss'

const Volume = ({className, volume, setVolume, setMuted, muted}) => {
  const {theme} = useTheme();


  const handlerMuted = () => {
    setMuted(!muted);
  }

  const handlerVolume = (event) => {
    const inputStepValue = event.target.value
    setVolume(inputStepValue)
  }

  const handlerMousemoveInput = (event) => {
    const { target } = event;
    const range = target.value;

    const color = `linear-gradient(90deg, ${theme === themes.light ? 'rgb(173, 97, 255)' : 'rgb(255, 255, 255)'} ${range}%, ${theme === themes.light ? 'rgb(196, 196, 196)' : 'rgb(121, 121, 121)'} ${range}%)`;
    target.setAttribute('style', `background:${color}`);
  }
  

  return(
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.image}>
          <VolumeSvg muted={muted} isActiveMuted={handlerMuted} styles={styles}/>
        </div>
        <div className={styles.progress}>
          <Input 
            value={volume} 
            onChange={handlerVolume}
            onMouseMove={handlerMousemoveInput}
            classInput={styles.range} 
            type='range' 
            max='100' 
            min='0'
            step='0.1'/>
        </div>
      </div>
    </div>
  )
};

export default Volume;
