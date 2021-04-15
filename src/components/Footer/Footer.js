import React from 'react';
import './Footer.scss';

//icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__left">
                Copyright 2021
            </div>
            <div className="footer__center">Jon Hunt</div>
            <div className="footer__right">
                <ul>
                    <li><LinkedInIcon /></li>
                    <li><GitHubIcon /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
