import React from "react";
import "../styles/Home.css";
import Airplane from "../images/airplane.jpg";

function Home() {
  return (
    <div className = "main">
      <div className="main_image">
        <img className = "home_image" src={Airplane} alt=""/>
      </div>         
      <div className = "main_header">
        <h1 className = "main_heading">Book Your Ticket Now</h1>
        <a href = "#book">
        <button className = "main_btn">Book Now</button>
        </a>
      </div>
       
    </div>
  );
}

export default Home;
