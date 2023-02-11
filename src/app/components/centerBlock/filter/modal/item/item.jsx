import React from 'react';

const ItemModal = ({body, styles}) => {
  const handlerClickItem = (event) => {
    const target = event.target.closest('.js-item');

    target.classList.add(`${styles.active}`);
    event.stopPropagation();
  }

  const handlerOnKeyEnter = (event) => {
    const target = event.target.closest(`${styles.item}`);
    const item = target.querySelector('.js-item');

    if(event.key === 'Enter') {
      item.classList.add(`${styles.active}`);
    }
  }

  return(
    <div role="button" tabIndex={0} className={`${styles.item} js-modal-item`} onClick={handlerClickItem} onKeyDown={handlerOnKeyEnter}>
      <span className={`${styles.modal_button} js-item`}>{body}</span>
    </div>
  )
}

export default ItemModal;
