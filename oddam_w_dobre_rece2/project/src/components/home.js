import React, {Component, useState} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-dom'
import Header from "./header";
import FourSteps from "./fourSteps";
import AboutUs from "./aboutUs";
import WhoWeHelp from "./whoWeHelp";
import ContactUs from "./contactUs";
import Login from "./login";
import Register from "./register";
import Logout from "./logout";


const x_Login = <Login/>
const x_Register = <Register/>
const x_Logout = <Logout/>

const x_header = <Header/>
const x_fourSteps = <FourSteps/>
const x_AboutUs = <AboutUs/>
const x_WhoWeHelp = <WhoWeHelp/>
const x_ContactUs = <ContactUs/>


let x = parseInt(localStorage.getItem('x'));
localStorage.setItem('x', JSON.stringify(3));
let render_component_1 = null;
let render_component_2 = null;
let render_component_3 = null;
let render_component_4 = null;
let render_component_5 = null;
let render_component_6 = null;

if (x === 0) {
    render_component_1 = x_Login;
    render_component_2 = null;
    render_component_3 = null;
    render_component_4 = null;
    render_component_5 = null;
    render_component_6 = null;
}
if (x === 1) {
    render_component_1 = x_Register;
    render_component_2 = null;
    render_component_3 = null;
    render_component_4 = null;
    render_component_5 = null;
    render_component_6 = null;
}
if (x === 2) {
    render_component_1 = x_Logout;
    render_component_2 = null;
    render_component_3 = null;
    render_component_4 = null;
    render_component_5 = null;
    render_component_6 = null;
}
if (x === 3) {
    render_component_1 = null;
    render_component_2 = x_header;
    render_component_3 = x_fourSteps;
    render_component_4 = x_AboutUs;
    render_component_5 = x_WhoWeHelp;
    render_component_6 = x_ContactUs;
}

const Home = () => {

    return (
        <>
            {render_component_1}
            {render_component_2}
            {render_component_3}
            {render_component_4}
            {render_component_5}
            {render_component_6}
        </>
    )
}
export default Home;