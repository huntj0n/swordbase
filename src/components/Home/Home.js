import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
           <div className="home__Container">
               <div className="home__Banner">
                   <h1>
                       <div className="line">
                           <span>Creating engaging websites and</span>
                       </div>
                       <div className="line">
                           <span>applications is what I do<span>.</span></span>
                       </div>
                   </h1>
               </div>
               <h4>
                   About <span>/</span> Projects <span>/</span> Contact
                </h4>
           </div>
        </div>
    )
}

export default Home
