import './App.css';
import Hero from './Sections/Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from '../Server/Contact';
import Footer from './Footer/Footer';
function App() {
  return (
    <>
      <Hero />
      <Projects /> 
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
