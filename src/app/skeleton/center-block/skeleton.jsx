import React from 'react';

import Filter from '../../components/centerBlock/filter/filter';
import Search from '../../components/centerBlock/search/search';

import styles from './center-block.module.scss';
import SkeletonContent from './skeleton-content'; 

const SkeletonCenterBlock = ({className}) => (
  <div className={className.center}>
    <Search className={styles.search}/>
    <h2 className={styles.title}>{}</h2>
    <Filter className={styles.filter}/>
    <SkeletonContent className={styles.content}/>
  </div>
)

export default SkeletonCenterBlock;
