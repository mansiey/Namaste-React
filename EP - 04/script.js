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
            <h4> Rating : 4.4 </h4>
            <img alt="Biryanii" src="https://static.apps.ristaapps.com/b/b646d853-c880-4b1f-a032-202f2710162a/images/68428f5710badf1a6227f1c2/original.jpg" ></img>
            <h3> Meghna's Kitchen </h3>
            <h4>  Hyderabadi, and North Indian </h4>
            <h4> 30-35 minutes </h4>
            <img />
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>

            <div className="kitchen-container">
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
                <Kitchens />
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
            <Footer />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

