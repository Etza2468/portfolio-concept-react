import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Johan García Trejo</span>
        </h1>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          perspiciatis minima facilis amet inventore vitae dolor explicabo
          laboriosam non placeat incidunt, adipisci sed dolore quae provident,
          deleniti nostrum ut quaerat?
        </p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
