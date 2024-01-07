import React from "react";
import NavBar from "./components/navBar";
import ProfileHero from "./components/profileHero";
import Features from "./components/features";
import Products from "./components/products";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <div>
            <NavBar />
            {
                pathName === "/home" ?
                    <>
                        <ProfileHero />
                        <Features />
                        <Products />
                    </> :
                    <Outlet />
            }
        </div>
    );
}

export default Home;
