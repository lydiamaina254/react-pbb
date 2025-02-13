import React from 'react';

const Navbar = () => {
    // Local Variables Here

    // Return Statement Here
    return (
        <nav className='navbar-wrapper'>
            {/* Logo */}
            <div>
                <img
                    src="/Images/Logo/pbb-logo.png"
                    alt="PBB Logo"
                />
            </div>
            {/* Menu */}
            <div className='navbar-links'>
                {/* Home link */}
                <div>
                    <a href="home">Home</a>
                </div>
                {/* Our Story link */}
                <div>
                    <a href="#our-story">Our Story</a>
                </div>
                {/* Assemblies link */}
                <div>
                    <a href="#assemblies">Assemblies</a>
                </div>
                {/* Blogs link */}
                <div>
                    <a href="#blogs">Blogs</a>
                </div>
                {/* Events link */}
                <div>
                    <a href="#events">Events</a>
                </div>
                {/* Contact link */}
                <div>
                    <a href="#contact">Contact</a>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;