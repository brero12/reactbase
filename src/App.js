import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-sky-900 body-font">
      <Navbar />
      <About />      
      <Skills />
      <Projects />
      <Testimonials />
    </main>
  );
}

export default App;
