import React from "react";

const Navbar = (props) => {
    return (
        <nav>
            <div className="logo">{props.logotext}</div>
            {/* <div className="nav-brand">My App</div> */}
            <ul className="nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;