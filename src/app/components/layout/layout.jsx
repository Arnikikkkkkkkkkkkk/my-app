/* eslint-disable jsx-a11y/media-has-caption */
import React, {useState, useRef, useCallback} from 'react';
import { Outlet } from 'react-router-dom';

import SkeletonBar from '../../skeleton/bar/skeleton-bar';
import SkeletonSidebar from '../../skeleton/sidebar/skeleton-sidebar';
import Bar from '../bar/bar';
import Footer from '../footer/footer';
import NavBar from '../nav/nav';
import Sidebar from '../sidebar/sidebar';

import styles from './main.module.scss';


const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [trackData, setTrackData] = useState([]);

  const refButton = useRef([]);

  const handlerClickWindow = useCallback(() => {
    window.addEventListener('click', (event) => {
      const { target } = event;
  
      const targetElement = refButton.current.find(element => {
        if(target.closest('.js-button') === null) {
          return null
        } 
        if (element === target.closest('.js-button')) {
          return element;
        } 
        return null   
      })
  
      if(target.closest('.js-button') !== targetElement) {
        setActiveModal(false);
      };
    })
  }, [])
  
  const handlerOnKeyDown = (event) => {
    const button = event.target.closest('.js-button');
    const nameButton = button.getAttribute('name');
  
    if(event.key === 'Enter') {
      setActiveModal(nameButton) 
    }
  }
  
  const handlerModalButtonActive = (event) => {
    const button = event.target.closest('.js-button');
    const nameButton = button.getAttribute('name');
  
    if(event.target.closest('.modal')) {
      return
    }
    if(nameButton === activeModal) {
      setActiveModal(null)
      return;
    };
    setActiveModal(nameButton);
  }

  return(
    <>
      <main className={styles.main}>
        <NavBar className={styles.main__nav}/>
        <Outlet context={[
          loading, 
          handlerModalButtonActive, 
          handlerOnKeyDown, 
          handlerClickWindow, 
          setLoading,
          styles,
          activeModal,
          refButton,
          setTrackData,
        ]}/>
        {loading && <SkeletonSidebar className={styles.main__sidebar}/> } 
        {!loading && <Sidebar className={styles.main__sidebar}/>}
      </main>
      {loading && <SkeletonBar/>} 
      {!loading && <Bar trackData={trackData} loading={loading}/>}
      <Footer/>
    </>
  )
} 

export default Layout;
