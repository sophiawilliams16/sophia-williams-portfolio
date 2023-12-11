import Bio from "./Bio";

function About() {
    console.log("Bio loaded successfully");

    return (
       <div className="bg-light-gray p-10">
            <Bio />
        </div>

    );
};

export default About;