import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    //const [nav, setNav] = useState(false);
    //const handleClick = () => setNav(!nav);
    
    return (
    <div className='flex justify-end mr-2'>
        <ul className='list-group grid grid-cols-3'>
            <li>
            <Link to='project'>
                Work
            </Link>
            </li>
            <li>
            <Link to='about'>
                About
            </Link>
            </li>
            <li>
            <Link to='footer'>
                Contact
            </Link>
            </li>
        </ul>
    </div>
    );


};

export default Navigation;