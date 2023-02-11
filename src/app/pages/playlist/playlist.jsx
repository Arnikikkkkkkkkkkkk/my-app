import React, {useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';


import CenterBlock from '../../components/centerBlock/centerBlock';
import SkeletonCenterBlock from '../../skeleton/center-block/skeleton'

const Playlist = () => {
  const [tracksList, setTracksList] = useState([]);
  const  [
    loading, 
    handlerModalButtonActive, 
    handlerOnKeyDown, 
    handlerClickWindow, 
    setLoading, 
    styles, 
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
          setTrack(items[0]);
        });
    };
  
    fetchDate();
  }, [handlerClickWindow, setLoading, setTrack, setTrackData]);


  return (
    <>
      {loading && <SkeletonCenterBlock className={styles}/>}
      {!loading && <CenterBlock 
        tracks={tracksList} 
        onClickModal={handlerModalButtonActive}
        onKeyDown={handlerOnKeyDown}
        active={activeModal}
        refButton={refButton}
        title="Мой плейлист"
        className={styles.center}/>}
    </>
  )
}

export default Playlist
