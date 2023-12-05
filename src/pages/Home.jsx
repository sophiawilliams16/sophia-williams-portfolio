import React from "react";
import Title from "../components/Title/Title";
import Project from "../components/Project/Project";
import About from "../components/About/About";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Title />
            {/* <Project /> */}
            <About />
            <Footer />
        </div>
    );
}

export default Home;

