import About from './components/About';
import Blobs from './blobs/Blobs';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';

function App() {
  return (
    <div className="app">
      <Blobs />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Hobbies />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
