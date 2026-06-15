import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./GharKhana_Logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="./GharKhana_Logo.png" alt="Logo"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li> Craving? </li>
                    <li> Cart </li>
                    <li> About Us </li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">

            </div>

            <div className="kitchenContainer">

            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <div className="footer">
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
        <Header />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);