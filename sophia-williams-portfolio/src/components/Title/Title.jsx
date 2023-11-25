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
            <div className="w-full h-full my-20 pl-2">
                <h1 className="md:text-6xl text-4xl"> {"{sophia williams}"} </h1>
                <p className="pl-4">developing beautiful, functional technology from the inside out</p>
                <div className="grid grid-cols-3 pl-4 mt-5 w-1/2 md:text-s text-xs space-x-3">
                    <button className="border-2 border-light-gray rounded-3xl p-1">view my resume</button>
                    <button className="border-2 border-light-gray rounded-3xl p-1">send me an email</button>
                    <button className="border-2 border-light-gray rounded-3xl p-1">browse my github</button>
                </div>
            </div>
            <div className="flex justify-end mr-2">discover my work</div>
        </div>

    );
};

export default Title;