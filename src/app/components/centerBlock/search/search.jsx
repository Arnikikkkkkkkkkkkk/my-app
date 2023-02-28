import React from 'react';

import Input from '../../../UI/input/input';

import styles from './search.module.scss';
import Icon from './svg-icon/icon';


const Search = ({className}) => (
  <div className={`${className} ${styles.search}`}>
    <Icon className={styles.icon} />
    <Input classInput={styles.input} type='search' placeholder='Поиск'/>
  </div>
)

export default Search;
