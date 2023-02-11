import React from 'react';

import styles from './center-block.module.scss';
import Content from './content/content';
import Filters from './filter/filter';
import Search from './search/search';


const CenterBlock = ({tracks, className, onClickModal, active, refButton, onKeyDown, title}) => (
  <div className={className}>
    <Search className={styles.search}/>
    <h2 className={styles.title}>{title}</h2>
    <Filters 
      tracks={tracks} 
      onClickModal={onClickModal}
      onKeyDown={onKeyDown}
      active={active}
      refButton={refButton}
      className={styles.filter}/>
    <Content className={styles.content} tracks={tracks}/>
  </div>

)

export default CenterBlock;
