import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    //const [nav, setNav] = useState(false);
    //const handleClick = () => setNav(!nav);
    
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#1f1f29] text-gray-300 cursor:pointer'>
        <ul className='hidden md:flex text-[#52eedf]'>
            <li className='hover:text-gray-300 hover:scale-150 duration-500'>
            <Link to='home' smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='hover:text-gray-300 hover:scale-150 duration-500'>
            <Link to='portfolio' smooth={true} duration={500}>
                Portfolio
            </Link>
            </li>
        </ul>
    </div>
    );


};

export default Navigation;