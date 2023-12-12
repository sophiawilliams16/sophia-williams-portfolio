import React from 'react';
import projectList from '../../utils/projects';

function Project() {
    console.log("Project loaded successfully");

    return (
        <div className='bg-med-gray'>
            <div className='overflow-x-scroll scrollbar-hide'>
                <div className='flex flex-no-wrap'>
                    {projectList.map((project) => (
                        <div key={project.id} className="min-w-1/3 bg-white bg-opacity-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg shadow-2xl flex-shrink-0 mx-5 my-10 w-72 text-center p-5">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <a href={project.view_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                            <a href={project.git_link} target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 hover:underline">GitHub Repo</a>
                            {project.img && <img src={project.img} alt={project.title} className="mt-4 rounded" />}
                            <p className="text-gray-300 mt-4">{project.tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;