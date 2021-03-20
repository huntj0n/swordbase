import React from 'react';

const ProjectCard = ({info}) => {
    return (
        <div className='card'>
            <div className="card__info">
                <h1>{info.title}</h1>
                <h5>{info.subtitle}</h5>
                <div className="img"></div>
            </div>

            <div className="card__slider"></div>
        </div>
    )
}

// title
// tagline
// description/caption 
// github 
// visit site 


export default ProjectCard
