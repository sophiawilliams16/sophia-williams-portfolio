import React from 'react';
import projectList from '../../utils/projects';

function Project({projects}) {
    console.log("Project loaded successfully");

    return (
        <div className='bg-med-gray grid grid-cols-2'>
            {projectList.map((project) => (
                <div key={project.id} className="bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg shadow-2xl">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {/* Add more details as needed */}
                    <a href={project.view_link} target="_blank" rel="noopener noreferrer">View Project</a>
                    <a href={project.git_link} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    {/* Add an image if available */}
                    {project.img && <img src={project.img} alt={project.title} />}
                    <p>Technologies: {project.tech}</p>
                </div>
            ))}
        </div>
    );
};


export default Project;