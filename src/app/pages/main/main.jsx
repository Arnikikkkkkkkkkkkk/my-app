import React, {useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';


import CenterBlock from '../../components/centerBlock/centerBlock';
import SkeletonCenterBlock from '../../skeleton/center-block/skeleton';

;

const Main = () => {
  const [tracksList, setTracksList] = useState([]);
  const [ 
    loading, 
    handlerModalButtonActive, 
    handlerOnKeyDown, 
    handlerClickWindow, 
    setLoading, styles, 
    activeModal, 
    refButton,
    setTrackData,
    setTrack,
  ] = useOutletContext();
  
  useEffect(() => {
    setLoading(true)
    handlerClickWindow();
  
    const fetchDate =  async () => {
      fetch('https://painassasin.online/catalog/track/all/')
        .then(res => res.json())
        .then(items => {
          setLoading(false)
          setTracksList(items)
          setTrackData(items);
        });
    };
  
    fetchDate();
  }, [handlerClickWindow, setLoading, setTrackData, setTrack]);
  
  
  return(
    <>
      {loading && <SkeletonCenterBlock className={styles}/>}
      {!loading && <CenterBlock 
        tracks={tracksList} 
        onClickModal={handlerModalButtonActive}
        onKeyDown={handlerOnKeyDown}
        active={activeModal}
        refButton={refButton}
        title="Треки"
        className={styles.center}/>}
    </>
  )
}


export default Main;
