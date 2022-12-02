import React from 'react';
import '../../App.css';
import VideoBg from '../VideoBg';
import '../VideoBg.css';
import Navbar from '../Navbar';
import '../Navbar.css';
import './Logs.css';

function Logs() {
    return (
      <>
      <div className='overlay'></div>
      <VideoBg />
      <Navbar />
      <h1>Logs</h1>
      <div className='mixCloudContainter'>
        <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMusicBoxRadioUK%2Fspace-journey-diaries-thursday-28th-july-2022%2F" frameborder="0" ></iframe>
      </div>
      </>
    )
  }
  
  export default Logs;