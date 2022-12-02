import React from 'react';
import '../../App.css';
import VideoBg from '../VideoBg';
import '../VideoBg.css';
import Navbar from '../Navbar';
import '../Navbar.css';

function Home() {
  return (
    <>
    <h1 className='title title-glow pulsate'>SPACE JOURNEY DIARIES</h1>
    <VideoBg />
    <Navbar />
    </>
  )
}

export default Home;