import React, {useCallback} from 'react';

import styles from './filter.module.scss'
import Modal from './modal/ModalFlitter';

const Filters = ({tracks, className, active, onClickModal, refButton, onKeyDown}) => {
  const ModalsDate = [
    {id:1, body: 'исполнителю', name: 'author'}, 
    {id:2, body: 'жанру', name: 'genre'},
    {id:3, body: 'году выпуска', name: 'year'}, 
  ];

  const modalRef = useCallback((element) => {
    if(!refButton) return
    
    refButton.current.push(element)
  }, [refButton])
 
  return(
    <div className={className}>
      <div className={styles.title}>Поиск по:</div>
      {ModalsDate.map((modal) => (<Modal 
        key={modal.id} 
        active={active}
        onClick={onClickModal}
        onKeyDown={onKeyDown}
        tracks={tracks} 
        name={modal.name}
        ref={modalRef}>
        {modal.body}
      </Modal>))}
    </div>
  )
}

export default Filters;
