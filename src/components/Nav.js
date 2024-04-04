import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/_nav.scss';

function Nav() {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
    return (
        <div className='nav-wrapper'>
            <div className={`navbar ${menuVisible ? 'mobile-menu-open' : ''}`}>
                <Link to="/">OurMovieDB</Link>
                <nav className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/my-favorites">Favorites</Link></li>
                    </ul>
                </nav>
                <button className="hamburger-icon" onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
        </div>
    );
}
export default Nav;