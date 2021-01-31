import React from 'react';
import './Intro.scss';

const Intro = () => {
    return (
        <div className='intro'>
            <div className="intro__slider"></div>
            <div className="intro__slider"></div>
            <div className="intro__slider"></div>

            <div className="intro__text">
                <h1 className="hide">
                    <span className='text'>Creating engaging websites and</span>
                </h1>
                <h1 className="hide">
                    <span className='text'>applications is what I do.</span>
                </h1>
            </div>
        </div>
    )
}

export default Intro
