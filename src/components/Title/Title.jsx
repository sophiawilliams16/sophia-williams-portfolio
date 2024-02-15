import Navigation from "./Navigation";
import Modal from "./Modal";
import React, { useState } from 'react';

function Title() {
    console.log("Title loaded successfully");

    // const backgroundImageStyle = {
    //     backgroundImage: `url(../../assets/background2.jpeg)`,
    //     backgroundSize: 'cover',
    // };

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="bg-fixed text-gray-700">
            <Navigation />
            <div className="grid grid-cols-2">
                <div className="w-full h-full my-20 pl-2">
                    <h1 className="md:text-6xl text-4xl pl-4"> {"{sophia williams}"} </h1>
                    <p className="pl-4 pt-2 italic">developing beautiful, functional technology from the inside out</p>
                    <div className="grid grid-cols-3 pl-4 mt-5 md:text-s text-xs space-x-3">
                        <button className="border-2 border-light-gray rounded-3xl p-1" onClick={handleShowModal}>view my resume</button>
                        <a className="border-2 border-light-gray rounded-3xl p-1 text-center" href="mailto:sophiaashleighwilliams@gmail.com">send me an email</a>
                        <a className="border-2 border-light-gray rounded-3xl p-1 text-center" href="https://github.com/sophiawilliams16">browse my github</a>
                    </div>
                </div>
                <div className="justify-self-center sm:p-10 md:p-20 max-w-2xl">
                    <img className="" src="./assets/AIsophia.png" alt="sophia williams profile photo" />
                </div>
            </div>

            <div className="flex justify-end mr-2 animate-bounce text-lg">
                <a href="#project">discover my work</a>
            </div>

            <Modal isOpen={showModal} onClose={handleCloseModal} resumeUrl="../assets/sophiawilliams.pdf" />

        </div>

    );
};

export default Title;