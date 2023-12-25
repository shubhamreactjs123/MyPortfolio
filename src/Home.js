import React from "react";
import NavBar from "./components/navBar";
import ProfileHero from "./components/profileHero";
import Features from "./components/features";
import Products from "./components/products";

const Home  = () => {
    return(
        <div>
            <NavBar/>
            <ProfileHero/>
            <Features/>
            <Products/>
        </div>
    )
}
export default Home