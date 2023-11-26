import Navigation from "./Navigation";

function Title() {
    console.log("Title loaded successfully");

    const backgroundImageStyle = {
        backgroundImage: `url(../../assets/background2.jpeg)`,
        backgroundSize: 'cover',
    };

    return (
        <div className="bg-fixed text-light-gray" style={backgroundImageStyle}>
            <Navigation />
            <div className="grid grid-cols-2">
                <div className="w-full h-full my-20 pl-2">
                    <h1 className="md:text-6xl text-4xl"> {"{sophia williams}"} </h1>
                    <p className="pl-4">developing beautiful, functional technology from the inside out</p>
                    <div className="grid grid-cols-3 pl-4 mt-5 md:text-s text-xs space-x-3">
                        <button className="border-2 border-light-gray rounded-3xl p-1">view my resume</button>
                        <button className="border-2 border-light-gray rounded-3xl p-1">send me an email</button>
                        <button className="border-2 border-light-gray rounded-3xl p-1">browse my github</button>
                    </div>
                </div>
                <div className="justify-self-center w-1/2 h-1/2">
                    <img className="" src="../../assets/profile.jpg" alt="sophia williams profile photo" />
                </div>
            </div>

            <div className="flex justify-end mr-2">
                <button>discover my work</button>
            </div>
        </div>

    );
};

export default Title;