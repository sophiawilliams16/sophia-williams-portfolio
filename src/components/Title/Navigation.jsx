import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import About from '../About/About';

function Navigation() {
    //const [nav, setNav] = useState(false);
    //const handleClick = () => setNav(!nav);
    
    return (
    <div className='flex justify-end p-5 text-white text-lg'>
        <ul className='list-group grid grid-cols-3'>
            <li>
            <a href="#about">
                About
            </a>
            </li>
            <li>
            <a href='#project'>
                Work
            </a>
            </li>
            <li>
            <a href='#footer'>
                Contact
            </a>
            </li>
        </ul>
    </div>
    );


};

export default Navigation;