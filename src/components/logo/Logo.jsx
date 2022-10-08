import React from "react";
import LogoElements from "./logoElements";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/GoingFor2");
  };

  return (
    <LogoElements.LogoWrapper onClick={goHome}>
      <LogoElements.LogoText>GOING FOR 2</LogoElements.LogoText>
    </LogoElements.LogoWrapper>
  );
}

export default Logo;
