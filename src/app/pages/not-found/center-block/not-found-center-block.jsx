import React from 'react';

import Search from '../../../components/centerBlock/search/search';

import styles from './center-block.module.scss';
import BlockNotFound from './not-found-block';


const CenterBlockNotFound = ({className}) => (
  <div className={className}>
    <Search className={styles.search}/>
    <BlockNotFound className={styles.content}/>
  </div>
)
  
export default CenterBlockNotFound;
