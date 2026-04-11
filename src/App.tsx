import Header from "./components/Header";
import AboutMe from "./sections/AboutMe";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className="bg-black text-white">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </main>
  );
}

export default App;
