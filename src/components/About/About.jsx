import Bio from "./Bio";

function About() {
    console.log("Bio loaded successfully");

    return (
       <div id="about" className="bg-light-gray p-10 px-60">
            <Bio />
        </div>

    );
};

export default About;