import React, {Component, useState} from "react";
import Header from "./header";
import FourSteps from "./fourSteps";
import AboutUs from "./aboutUs";
import WhoWeHelp from "./whoWeHelp";
import ContactUs from "./contactUs";

const Home = () => {

    return (
        <>
            <Header/>
            <FourSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <ContactUs/>
            
        </>
    )
}
export default Home;