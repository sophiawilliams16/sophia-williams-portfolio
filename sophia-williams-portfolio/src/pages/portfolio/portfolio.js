import React from "react";
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Project from '../../components/Project';
import Footer from '../../components/Footer';
import projectList from '../../utils/projects';
import "./portfolio.css";

function Portfolio() {
    return (
        <div>
            <Header />
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
