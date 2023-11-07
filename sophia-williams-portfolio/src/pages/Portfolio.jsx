import React from "react";
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import Footer from '../components/Footer';
import projectList from '../utils/projects';

function Portfolio() {
    return (
        <div>
            <Navigation />
            <div>
                {projectList.map((projects) => (
                    <Project projects={projects} key={projects.id}/>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;
