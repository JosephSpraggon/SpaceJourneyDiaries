import React from 'react';
import '../../App.css';
import VideoBg from '../VideoBg';
import '../VideoBg.css';
import Navbar from '../Navbar';
import '../Navbar.css';

function Profiles() {
    return (
      <>
      <div className='overlay'></div>
      <h1>Profiles</h1>
      <VideoBg />
      <Navbar />
      </>
    )
  }
  
  export default Profiles;