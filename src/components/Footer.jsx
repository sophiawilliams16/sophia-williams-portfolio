function Footer() {
    console.log("Footer loaded successfully");

    return (
        <div className='bg-med-gray bg-cover text-light-gray'>
            <div className="card-header">
                <h4 className="display-4 text-center text-flight">Contact Me</h4>
            </div>

            <div className="grid grid-cols-3 pl-4 mt-5 md:text-s text-xs space-x-3">
                <a className="border-2 border-light-gray rounded-3xl p-1 text-center" href="https://github.com/sophiawilliams16">GitHub</a>
                <a className="border-2 border-light-gray rounded-3xl p-1 text-center" href="https://www.linkedin.com/in/sophiaashleighw/">LinkedIn</a>
                <a className="border-2 border-light-gray rounded-3xl p-1 text-center" href="mailto:sophiaashleighwilliams@gmail.com">sophiaashleighwilliams@gmail.com</a>
            </div>
        </div>
    );

};

export default Footer;