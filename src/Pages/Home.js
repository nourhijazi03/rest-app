import React from "react";
import { Link } from "react-router-dom";
import bk from "../media/bg.jpg";
import "../Styles/home.css";

function Home () {
    return (
        <div className="home" style={{backgroundImage:`url(${bk})`,}}>
            <div className="headerContainer" >
                <h1>Le2met Setti</h1>
                <p>We serve yummy and healthy food</p>
                <Link to="/menu">
                <button>Order Now</button>
                </Link>

            </div>
        </div>
    )
}

export default Home;