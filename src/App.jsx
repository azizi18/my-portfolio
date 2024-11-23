import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
// import HomePage from "./pages/HomePage.Jsx";
// import Footer from "./components/Footer";
function App() {

  return (
   <div>
      {/* navbar */}
      <Navbar />

      {/* content */}
      <Hero />
      <About />
      
      {/* footer */}
   </div>
  )
}

export default App
