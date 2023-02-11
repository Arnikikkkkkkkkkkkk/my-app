import React from 'react';

import PlaylistItem from './playlist-item';
import styles from './playlist.module.scss'

const Playlist = ({tracks, className}) => (
  <div className={`${className} ${styles.playlist}`}>
    {tracks && tracks.map(track=> (<PlaylistItem 
      classStyle={styles} 
      key={track.id} 
      name={track.name} 
      author={track.author} 
      album={track.album} 
      time={track.duration_in_seconds} 
      link={track.track_file}/>))}
  </div>
)

export default Playlist;
