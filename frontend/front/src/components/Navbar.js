import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-items">
                    <BrowserRouter >
                        <Link to="/Login">Login</Link>
                        <Link to="/Register">Register</Link>
                    </BrowserRouter>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;