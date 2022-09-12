import About from './components/About';
import Blobs from './blobs/Blobs';
// import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
// import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Blobs />
      <Hero />
      <About id="About" />
      {/* <Skills id="Skills" /> */}
      <Projects id="Projects" />
      {/* <Experience id="Experience" /> */}
      {/* <Hobbies id="Hobbies" /> */}
      <Contact id="Contact" />
      <Footer />
    </div>
  );
}

export default App;
