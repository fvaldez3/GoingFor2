import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import FFTools from "./pages/FFTools";
import Rankings from "./pages/Rankings";
import Podcasts from "./pages/Podcasts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route path="/GoingFor2" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/fftools" element={<FFTools />} />
      </Routes>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
