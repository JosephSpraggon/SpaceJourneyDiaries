import React from 'react'
import '../App.css';
import './VideoBg.css';

function VideoBg() {
  return (
    <div className='video-container'>
        <div className='overlay'></div>
        <video src='../videos/spcjy-bg.mp4' autoPlay loop muted />
    </div>
  )
}

export default VideoBg