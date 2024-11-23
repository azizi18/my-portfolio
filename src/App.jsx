import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skill from "./pages/Skill";
// import Footer from "./components/Footer";
function App() {

  return (
   <div>
      {/* navbar */}
      <Navbar />

      {/* content */}
      <Hero />
      <About />
      <Skill />
      
      {/* footer */}
   </div>
  )
}

export default App
