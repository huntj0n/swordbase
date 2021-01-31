import React from 'react';
import './Intro.scss';

const Intro = () => {
    return (
        <div className='intro'>
            <div className="intro__sliders">
                <div className="intro__slider"></div>
                <div className="intro__slider"></div>
                <div className="intro__slider"></div>
            </div>
            <div className="intro__text">
                <h1 className="hide">
                    <span className='text'>Creating engaging websites and</span>
                </h1>
                <h1 className="hide">
                    <span className='text'>applications is what I do.</span>
                </h1>
                <div className="intro__textSlider"></div>
            </div>
        </div>
    )
}

export default Intro
