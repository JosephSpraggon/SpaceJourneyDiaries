import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <>
        <nav className='navbar title-glow'>
            <div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick = {closeMobileMenu}>
                            SPCJY <i className='fa-solid fa-user-astronaut'/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/logs' className='nav-links' onClick={closeMobileMenu}>
                            Logs
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profiles' className='nav-links' onClick={closeMobileMenu}>
                            Profiles
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
      </>
    )
}

export default Navbar