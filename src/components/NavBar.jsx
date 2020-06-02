import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/"><strong>JerseyShop</strong></Link>
                <ul>
                    <li><Link to="/">Jersey</Link></li>
                    <li><Link to="/cart">My Cart</Link></li>
                </ul>
            </BrowserRouter>
        </div>
        

    )
}

export default NavBar;