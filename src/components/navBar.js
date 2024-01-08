import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    const navigate = useNavigate();
    const [display, setDisplay] = useState(false)
    const handleNavigation = () => {
        setDisplay(!display)
    }
    useEffect(() => {
        setDisplay(false)
    }, [navigate])
    return (
        <div className="nav-bar">
            <div className="left-nav">
                SHUBHAM
            </div>
            <div className="right-nav">
                <span onClick={() => navigate("/home")}>Home</span>
                <span>About</span>
                <span onClick={() => navigate("/home/experiments")}>Experiments</span>
                <span>Products</span>
                <span>Contact</span>
            </div>
            {/* Hamburger after */}
            <div onClick={handleNavigation} className="hamburger-container">
                <GiHamburgerMenu />
            </div>
            <div style={{
                display: display ? 'flex' : 'none'
            }} className="navigation-dropdown">
                <span onClick={() => navigate("/home")}>Home</span>
                <span>About</span>
                <span onClick={() => navigate("/home/experiments")}>Experiments</span>
                <span>Products</span>
                <span>Contact</span>
            </div>
        </div>
    )

}
export default NavBar