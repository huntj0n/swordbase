import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';

const projects = [
    {
        id: 1,
        subtitle: 'Friday',
        title: 'Your Digital Planner',
        // pic: Run,
        color: '',
        url: '',
    },
    {
        id: 2, 
        subtitle: 'Amazon',
        title: 'Work Hard. Have Fun. Make Jeff Money.',
        // pic: Espresso,
        color: '',
        url: '',
    },
    {
        id: 3, 
        subtitle: 'EvilCorp', 
        title:'Helps us sell you',
        // pic: Airline,
        color: '',
        url: '',
    },
    {
        id: 4,
        subtitle: 'Ivory Foundation',
        title: 'Living life through giving',
        // pic: Run,
        color: '',
        url: '',
    },
    {
        id: 5,
        subtitle: 'Covid Tracker',
        title: 'Living life through giving',
        // pic: Run,
        color: '',
        url: '',
    },
]

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <div className="row">
                    <ProjectCard className='card'
                        info={projects[0]}
                    />
                </div>
                <div className="row">
                    <ProjectCard className='card'
                        info={projects[1]}
                    />
                    <ProjectCard className='card'
                        info={projects[2]}
                    />
                </div>
                <div className="row">
                    <ProjectCard className='card'
                        info={projects[3]}
                    />
                    <ProjectCard className='card'
                        info={projects[4]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
