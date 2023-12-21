//import Profile from "../assets/profile.jpg";

function Bio() {
    console.log("Bio loaded successfully");

    return (
        <div>
            <h1 className="text-center p-5 text-3xl">About Me</h1>
            <p className="text-center">Sophia is a New York City based product-focused Full Stack Developer specializing in Javascript. After working as a fashion model and in the financial services industry, she has now found her passion in building beautiful, functional technology from the inside out. </p>
            <br />
            <p className="text-center font-bold pb-5">Actively looking for a frontend developer role at a high-growth startup.</p>
            {/* <h1 className="text-center p-5">Skills</h1> */}

        </div>

    );
};

export default Bio;