import React from "react";


// add sticky footer 
const Footer = () => {
    return (
        <div className="footer"style={{position: "fixed", left: "0", bottom: "0", width: "100%", backgroundColor: "#9858cc"}}>
            <div className="footer-center">
                <p>Recipeez is a place where guests can share their recipes with the world!</p>
            </div>
        </div>
    );
};

export default Footer;