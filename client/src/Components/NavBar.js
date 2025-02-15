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
            <h1>Women's World Cup Players Searches - June ~ July 2019</h1>
            <div className="dark-mode__toggle" data-testid="dark-mode">
            <div onClick={toggleMode} 
            className={darkMode ? 'toggle toggled' : 'toggle'}/>
            </div>
        </nav>
    )
}

export default NavBar;
