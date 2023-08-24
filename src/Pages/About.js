import React from "react";
import about from "../media/banner.jpg";
import "../Styles/about.css";

const About=()=>{
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${about})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>The food we serve is prepared in our kitchen by real peope who share 
                    a love for food and passion for cooking.Every plate of food served by 
                    LE2MET SETTI is prepared using the most fresh ingredients based on authentic 
                    ,regional,oriental recipes .Our food is also free from any kind of 
                    chemical-based colourants,taste enhancers or preservatives.
                </p>
            </div>
        </div>
    )
}

export default About;