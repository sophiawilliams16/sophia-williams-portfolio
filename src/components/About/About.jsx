import Bio from "./Bio";

function About() {
    console.log("Bio loaded successfully");

    return (
       <div id="about" className="bg-light-gray p-10 md:px-60 sm:px-10">
            <Bio />
        </div>

    );
};

export default About;