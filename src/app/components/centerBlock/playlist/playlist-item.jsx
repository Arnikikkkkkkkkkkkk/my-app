import React from 'react';

import TrackLickSvg from './svg-components/track-like';
import TrackTitleSvg from './svg-components/track-title-svg';
import styles from './track.module.scss';

const PlaylistItem = ({classStyle, name, author, album, time, logo, link}) => {
  const minutes = String(Math.floor(time / 60));
  let seconds = String(time % 60);
  
  seconds = seconds.length <= 1 ? `0${seconds}`:`${seconds}`


  const textTime = `${minutes}:${seconds}`
  return (
    <div className={classStyle.item}>
      <div className={`${classStyle.track}`}>
        <div className={styles.title}>
          <div className={styles.image}>
            {!logo ? <TrackTitleSvg className={styles.icon} /> : logo}
          </div>
          <div className={styles.title_text}>
            <a className={styles.title_link} href={link}>
              {name}
              <span className={styles.title_span} />
            </a>
          </div>
        </div> 
        <div className={styles.author}>
          <a className={styles.author_link} href={link}>
            {author}
          </a>
        </div>
        <div className={styles.album}>
          <a className={styles.album_link} href={link}>
            {album}
          </a>
        </div>
        <div className={styles.time}>
          <TrackLickSvg className={styles.time_icon}/>
          <span className={styles.time_text}>{textTime}</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem
