import React from "react";
import "./logo.css";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/GoingFor2");
  };

  return (
    <div className="logo-container" onClick={goHome}>
      <h2 className="logo-text">GOING FOR 2</h2>
    </div>
  );
}

export default Logo;
