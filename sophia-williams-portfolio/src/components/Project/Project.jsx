import { useState } from 'react';
//import projectList from '../../utils/projects';

function Project({projects}) {
    console.log("Project loaded successfully");

    return (
        <div id={projects.section} key={projects.id}>
            <div className='bg-med-gray'>
                <div>
                {projectList.map((projects) => (
                    <Project projects={projects} key={projects.id}/>
                ))}
            </div>
            </div>
        </div>
    );
};


export default Project;