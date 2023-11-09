import { useState } from 'react';

function Project({projects}) {
    console.log("Project loaded successfully");

    return (
        <div id={projects.section} key={projects.id}>
            <h4>{projects.title}</h4>

            <div>
                
            </div>
        </div>
    );
};


export default Project;