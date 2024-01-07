import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () =>{
    const  navigate = useNavigate();

    return(
        <div className="nav-bar">
            <div className="left-nav">
                LOGO HERE
            </div>
            <div className="right-nav">
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