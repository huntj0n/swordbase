import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav__Column">
                    <ul className="nav__Links">
                        <li>Home</li>
                        <li>Work</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
