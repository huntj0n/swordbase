import React from 'react';
import './Header.scss';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="name">
                    JH.
                </div>
            </div>

            <div className="external">
                <GitHubIcon />
                <LinkedInIcon />
            </div>
        </header>
    )
}

export default Header
