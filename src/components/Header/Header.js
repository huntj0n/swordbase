import React from 'react';
import './Header.scss';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    JH.
                </div>

                <div className="external">
                    <a href="#">Work</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    {/* <GitHubIcon /> */}
                    <LinkedInIcon />
                </div>
            </div>
        </header>
    )
}

export default Header