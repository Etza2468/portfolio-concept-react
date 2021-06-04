import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItem({ menuItem }) {
  return (
    <div className="MenuItem">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt={item.title} />
              <ul className="hover-items">
                <li>
                  <a href={item.link1}>
                    <FontAwesomeIcon
                      icon={item.icon1}
                      className="icon youtube"
                    />
                  </a>
                  <a href={item.link2}>
                    <FontAwesomeIcon
                      icon={item.icon2}
                      className="icon github"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder paragraph</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItem;
