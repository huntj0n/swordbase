import React from 'react';
import './About.scss';
import Competencies from './Competencies';

const About = () => {
    return (
        <>
        <div className='about'>
            <div className="container">
                <div className="row">
                    <h1>Hi, <span>I'm Jon</span></h1>

                    <div className="background">
                        <div className="mua">
                            <div className="yoursTruly">
                                le photo
                            </div>
                        </div>
                        
                        <p>
                        Im a Salt Lake City based software developer. Over the past few years coding has developed into a passion of mine, specifically in web development. I enjoy creating websites and applications with clean user experiences and a modern design that help solve problems. Currently I spend most of my free time learning web technologies so that I can participate in creative projects that affect people in positive ways. I believe its important to always have a growth mindset and contribute to the best of my ability. Outside of programming I like the outdoors, climbing, and Brazilian jiu jitsu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Competencies />
        </>
    )
}

export default About
