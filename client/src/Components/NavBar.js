import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode("darkMode", false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return(
        <nav className="navbar">
            <h1>Women's World Cup players</h1>
            <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}></div>
        </nav>
    )
}

export default NavBar;
