import React from 'react';

import styles from './burger.module.scss';


const NavBurger = ({setActive, active, className}) => (
  <div onClick={()=> {setActive(!active)}} 
    role='presentation' 
    className={
        active ? 
          `${styles.burger} ${styles.active} ${className} js-burger` 
          :
          `${styles.burger} ${className} js-burger`
      }>
    <span className={styles.line} />
    <span className={styles.line} />
    <span className={styles.line} />
  </div>
)

export default NavBurger;
