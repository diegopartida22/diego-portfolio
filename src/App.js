import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Habilities from "./components/Habilities";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Habilities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
