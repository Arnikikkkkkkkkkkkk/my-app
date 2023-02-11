import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useAuth from '../../../hook/useAuth';
import Button from '../../../UI/button/button';

import styles from './center-block.module.scss';

const BlockNotFound = ({className}) => {
  const navigate = useNavigate();
  const { user } = useParams();
  const { setAuth } = useAuth();
  const backMain = () => {
    setAuth(true);
    navigate(`/mini-spotyfi/${user}/player` , {replace: true})
  }

  return(
    <div className={className}>
      <div className={styles.block}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Страница не найдена</h2>
        <p className={styles.text}>
          Возможно, она была удалена <br/> 
          или перенесена на другой адрес
        </p>
        <Button onClick={backMain}>Вернуться на главную</Button>
      </div>
    </div>
  )
}

export default BlockNotFound
