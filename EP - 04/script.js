import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/template/20190309/ourmid/pngtree-modern-kitchen-logo-image_65849.jpg" alt="Logo" />
            </div>

            <div>
                <h1> WELCOME </h1>
            </div>


            <div className="nav">
                <ul className="nav-items">
                    <li> Craving? </li>
                    <li> Cart </li>
                    <li> About Us </li>
                </ul>
            </div>
        </div>
    )
}

const Kitchens = () => {
    return (
        <div className="kitchens">
            <h3> Kithen's Name </h3>
            <img />
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                {/* <input> Choose Your Kitchen </input>
                <button> search </button> */}
            </div>

            <div className="kitchen-container">
                <Kitchens />
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
            <Body />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);