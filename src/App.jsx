import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <>
      <Navbar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <About />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Services />
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <Projects />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <Contact />
      </ScrollReveal>
    </>
  );
}

export default App;
