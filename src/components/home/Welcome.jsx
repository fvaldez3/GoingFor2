import React, { useState } from "react";
import "./welcome.css";
import Video from "./videos/siteBackground.mp4";
import { Link } from "react-router-dom";

function Welcome() {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div className="welcome-container">
      <div className="welcome-background">
        <video
          src={Video}
          className="welcome-background-video"
          typeof="video/mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="welcome-content">
        <h1 className="welcome-header">GOING FOR 2</h1>
        <p className="welcome-message">
          Lets get you a RING! Checkout our{" "}
          <Link className="welcome-link" to="/rankings">
            Rankings
          </Link>{" "}
          or our{" "}
          <Link className="welcome-link" to="/articles">
            Premium Articles
          </Link>{" "}
          free of charge! Support us on Patreon where there will be exclusive
          benefits waiting for you.
        </p>
        <div className="welcome-button-wrapper">
          <button
            className="welcome-button"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Patreon &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
