import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./sections/AboutMe";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className="bg-black text-white divide-y divide-border">
      <Header />
      <section id="hero" className="py-16">
        <Hero />
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
      <section id="about" className="py-16">
        <AboutMe />
      </section>
      <section id="contacts" className="py-16">
        <Contacts />
      </section>
      <Footer />
    </main>
  );
}

export default App;
