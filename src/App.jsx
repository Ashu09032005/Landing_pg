import React from "react";

import "./index.css"; // Ensure Tailwind styles are imported

import Navbar from "./Navbar.jsx";

import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";





const App = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <Footer />
    </div>
  );
}

export default App;

