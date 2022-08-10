import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Hobbies />
      <Socials />
      <div className="blob-top-l"></div>
      <div className="blob-top-m"></div>
      <div className="blob-top-s"></div>
      <div className="blob-bottom-l"></div>
      <div className="blob-bottom-m"></div>
      <div className="blob-bottom-s"></div>
    </div>
  );
}

export default App;
