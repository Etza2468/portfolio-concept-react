import React from "react";

function ServicesSection({ image, title, description }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="Service" />
          <h5 className="service-title">{title}</h5>
          <p className="service-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
