import React from "react";
import { GoX } from "react-icons/go";
import { MobileNavbarContainer } from "./navbarElements";
import { Link } from "react-router-dom";
import "./mobilenavbar.css";

function MobileNavBar(props) {
  const closeMobileView = () => {
    props.toggle();
  };

  return (
    <MobileNavbarContainer isOpen={props.isOpen} onClick={closeMobileView}>
      <div className="mobile-nav-icon-container">
        <GoX className="mobile-nav-close-icon" size={38}></GoX>
      </div>
      <div>
        <ul className="mobile-nav-link-list">
          <li className="mobile-nav-link-list-item">
            <Link className="mobile-nav-link" to="/GoingFor2">
              Home
            </Link>
          </li>
          <li className="mobile-nav-link-list-item">
            <Link className="mobile-nav-link" to="/articles">
              Articles
            </Link>
          </li>
          <li className="mobile-nav-link-list-item">
            <Link className="mobile-nav-link" to="/rankings">
              Rankings
            </Link>
          </li>
          <li className="mobile-nav-link-list-item">
            <Link className="mobile-nav-link" to="/fftools">
              FFTools
            </Link>
          </li>
        </ul>
      </div>
    </MobileNavbarContainer>
  );
}

export default MobileNavBar;
