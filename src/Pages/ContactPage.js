import React from "react";
import Title from "../Components/Title";
import ContactItem from "../Components/ContactItem";
import location from "../img/location.svg";
import email from "../img/emailme.svg";
import phone from "../img/phone.svg";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Title title={"Contact Me"} span={"Contact Me"} />
      <div className="contact-section-main">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            title="Address Location"
          ></iframe>
        </div>
        <div className="contact-section">
          <ContactItem
            icon={phone}
            title={"Phone"}
            text1={"+52 818 476 4678"}
            text2={"+52 484 114 5402"}
          />
          <ContactItem
            icon={email}
            title={"Email"}
            text1={"johan.garcia.dev@gmail.com"}
            text2={"johan.garcia@gmail.com"}
          />
          <ContactItem
            icon={location}
            title={"Address"}
            text1={"Chapulhuacan, Hidalgo"}
            text2={"Tamazunchale, SLP"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
