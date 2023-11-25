function Footer() {
    console.log("Footer loaded successfully");

    return (
        <div className='bg-med-gray bg-cover text-light-gray'>
            <div className="card-header">
                <h4 className="display-4 text-center text-flight">contact me</h4>
            </div>

            <div>
                <a href="https://github.com/sophiawilliams16">GitHub</a>
                <br />
                <a href="https://www.linkedin.com/in/sophiaashleighw/">LinkedIn</a>
                <br />
                <p>Email:</p>
                <a href="mailto:sophiaashleighwilliams@gmail.com">sophiaashleighwilliams@gmail.com</a>
            </div>
        </div>
    );

};

export default Footer;