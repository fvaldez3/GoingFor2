import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function NavLinks() {
  return (
    <div className="navbar-links-container">
      <ul className="navbar-links-list">
        <li className="navbar-links-list-item">
          <Link className="navbar-link" to="/GoingFor2">
            Home
          </Link>
        </li>
        <li className="navbar-links-list-item">
          <Link className="navbar-link" to="/podcasts">
            Podcasts
          </Link>
        </li>
        <li className="navbar-links-list-item">
          <Link className="navbar-link" to="/articles">
            Articles
          </Link>
        </li>
        <li className="navbar-links-list-item">
          <Link className="navbar-link" to="/rankings">
            Rankings
          </Link>
        </li>
        <li className="navbar-links-list-item">
          <Link className="navbar-link" to="/fftools">
            FFTools
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
