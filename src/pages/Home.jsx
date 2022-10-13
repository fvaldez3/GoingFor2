import React from "react";
import AboutUs from "../components/home/AboutUs";
import RoadMap from "../components/home/RoadMap";
import Welcome from "../components/home/Welcome";

function Home() {
  return (
    <React.Fragment>
      <Welcome> </Welcome>
      <RoadMap></RoadMap>
      <AboutUs></AboutUs>
    </React.Fragment>
  );
}

export default Home;
