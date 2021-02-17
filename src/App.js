import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Particle from "./components/Particles";

function App() {
  return (
    <>
      <Particle/>
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
