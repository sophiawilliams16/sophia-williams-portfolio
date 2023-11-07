import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    //const [nav, setNav] = useState(false);
    //const handleClick = () => setNav(!nav);
    
    return (
    <div className='container'>
        <ul className='list-group'>
            <li>
            <Link to='home'>
                Home
            </Link>
            </li>
            <li>
            <Link to='portfolio'>
                Portfolio
            </Link>
            </li>
        </ul>
    </div>
    );


};

export default Navigation;