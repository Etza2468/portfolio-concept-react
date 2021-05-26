import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="about-image">
        <img src={about} alt="About" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Johan García Trejo</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          eligendi veritatis. Sint aperiam atque quaerat laborum reprehenderit
          animi porro sequi?
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Johan García Trejo</p>
            <p>: 50</p>
            <p>: Mexicana</p>
            <p>: Español, Ingles</p>
            <p>: Tamazunchale San Luis Potosi</p>
            <p>: Mexico</p>
          </div>
        </div>
        <button className="btn-cv">
          <p className="text-d">Download CV</p>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
