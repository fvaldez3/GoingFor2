import React from "react";
import RoadMapImage from "./images/roadmap.jpg";
import "./roadmap.css";
import { Link } from "react-router-dom";

function RoadMap() {
  return (
    <div className="roadmap-container">
      <img className="roadmap-image" src={RoadMapImage} alt="Road Map"></img>
      <div className="roadmap-content-container">
        <h1 className="roadmap-header">Road Map</h1>
        <ul className="roadmap-feature-list">
          <li>
            We are practicing{" "}
            <Link className="roadmap-link" to="/podcasts">
              Podcasts
            </Link>{" "}
            as you read this. Once ready we will start dropping episodes on
            platforms you enjoy. Eventually this site will be a platform for our
            own podcast as well.
          </li>
          <li>
            <Link className="roadmap-link" to="/rankings">
              Rankings
            </Link>{" "}
            will be our first feature here on the site. The first set will be
            Dynasty Rankings, followed by Weekly Rankings, then next off season
            Rookie Rankings and Redraft Ranknings.
          </li>
          <li>
            The seconnd feature will be{" "}
            <Link to="/articles" className="roadmap-link">
              Articles
            </Link>
            . We want to give our our followers a good read at work or on the
            tiolet.. wait.. thats just me? Anyways this feature is just another
            way for you to digest our content without the podcast.
          </li>
          <li>
            The third and biggest feature will be{" "}
            <Link to="/fftools" className="roadmap-link">
              Fantasy Football Tools
            </Link>{" "}
            or FFTools for short. The feature will contain multiple features.
            The first being a Start/Sit tool to help you determine who to start
            based on our rankings. The second being a Weather Tool which is to
            just simply check the weather at all outdoor stadiums for bad
            weather.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RoadMap;
