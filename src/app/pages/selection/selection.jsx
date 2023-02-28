import React, {useState, useEffect} from 'react';
import { useOutletContext, useParams } from 'react-router-dom';


import CenterBlock from '../../components/centerBlock/centerBlock';
import SkeletonCenterBlock from '../../skeleton/center-block/skeleton';

const Selection = () => {
  const [tracksList, setTracksList] = useState([]);
  const [
    loading, 
    handlerModalButtonActive, 
    handlerOnKeyDown, 
    handlerClickWindow, 
    setLoading, 
    styles, 
    activeModal, 
    refButton,
    setTrackData,
  ] = useOutletContext();
  const params = useParams();

  const titlesList = ['Плейлист дня', '100 танцевальных хитов', 'Инди-заряд'];


  useEffect(() => {
    setLoading(true)
    handlerClickWindow();
  
    const fetchDate =  async () => {
      fetch(`https://painassasin.online/catalog/selection/${params.id}`)
        .then(res => res.json())
        .then(items => {
          setLoading(false)
          setTracksList(items)
          setTrackData(items.items);
        });
    };
  
    fetchDate();
  }, [handlerClickWindow, setLoading, params, setTrackData]);


  return(
    <>
      {loading && <SkeletonCenterBlock className={styles}/>}
      {!loading && <CenterBlock 
        tracks={tracksList.items} 
        onClickModal={handlerModalButtonActive}
        onKeyDown={handlerOnKeyDown}
        active={activeModal}
        refButton={refButton}
        title={`${titlesList[params.id - 1]}`}
        className={styles.center}/>}
    </>
  )
}

export default Selection;
