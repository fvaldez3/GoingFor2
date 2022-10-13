import React, { useState } from "react";
import "./welcome.css";
import Video from "./videos/siteBackground.mp4";

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
        <h1 className="welcome-header">Welcome!</h1>
        <p className="welcome-message">
          Thank you for coming to our site! Now, lets get you a RING! Support us
          on Patreon where there will be exclusive benefits waiting for you.
          Scroll down to learn about us and our aspirations!
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
