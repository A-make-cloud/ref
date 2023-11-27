import React, { useState, useEffect } from "react";
// import Preloader from "./js/loader.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import './css/main.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Services from './pages/Services';
import Proj from './projects/Proj';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Banner from "./components/Banner";
import Preload from "./components/Preload";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}> */}
      <Preload />
      <Navbar />
      <Banner />
      <Proj />
      <Services />
      <About />
      <Technologies />

      <Footer />
      {/* </div> */}
    </Router>

  );
}

export default App;
