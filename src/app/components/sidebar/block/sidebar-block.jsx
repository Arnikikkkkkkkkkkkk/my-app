import React from 'react';
import { Link, useParams } from 'react-router-dom';

import ItemOne from '../../../../assets/images/playlist01.png'
import ItemTwo from '../../../../assets/images/playlist02.png'
import ItemThree from '../../../../assets/images/playlist03.png'

const SidebarBlock = ({styles}) => {
  const params = useParams();
  return (
    <div className={styles.block}>
      <div className={styles.list}>
        <div className={styles.item}>
          <Link className={styles.link} to={`/mini-spotyfi/${params.user}/selection/1`}>
            <img className={styles.img} src={ItemOne} alt="Day's playlist" />
          </Link>
        </div>
        <div className={styles.item}>
          <Link className={styles.link} to={`/mini-spotyfi/${params.user}/selection/2`}>
            <img className={styles.img} src={ItemTwo} alt="Day's playlist" />
          </Link>
        </div>
        <div className={styles.item}>
          <Link className={styles.link} to={`/mini-spotyfi/${params.user}/selection/3`}>
            <img className={styles.img} src={ItemThree} alt="Day's playlist" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SidebarBlock
