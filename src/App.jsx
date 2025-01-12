import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './index.css'; 
function App() {
 
  return (
 
   <div>

    
      {/* navbar */}
      <Navbar />

      {/* content */}
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      
     <Footer />
   </div>
  )
}

export default App
