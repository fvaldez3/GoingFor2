import React, { useState } from "react";
import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";
import { useMediaQuery } from "react-responsive";
import { GoThreeBars } from "react-icons/go";
import MobileNavBar from "./MobileNavBar";
import "./navbar.css";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 756 });
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileView = () => {
    setMobileNavActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <div className="navbar-container">
        <div className="navbar-logo-section">
          <Logo />
        </div>
        {isMobile ? (
          <div className="navbar-hamburger-section">
            <div className="navbar-hamburger-button" onClick={toggleMobileView}>
              <GoThreeBars size={45} color="000028" />
            </div>
          </div>
        ) : (
          <div className="navbar-menu-section">
            <NavLinks />
          </div>
        )}
      </div>

      <MobileNavBar
        isOpen={isMobileNavActive}
        toggle={toggleMobileView}
      ></MobileNavBar>
    </React.Fragment>
  );
}

export default Navbar;
