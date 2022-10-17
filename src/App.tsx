import About from './components/About';
import Blobs from './blobs/Blobs';
import Contact from './components/Contact';
// import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Socials from './components/Socials';

function App() {
  return (
    <main className="app">
      <Blobs />
      <Hero />
      <About id="About" />
      {/* <Skills id="Skills" /> */}
      <Projects id="Projects" />
      {/* <Experience id="Experience" /> */}
      {/* <Hobbies id="Hobbies" /> */}
      {/* <Socials id="Socials" /> */}
      <Contact id="Contact" />
      <Footer />
    </main>
  );
}

export default App;
