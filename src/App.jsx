import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div>
      <section id="Accueil">
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
      <Portfolio />
      </section>
      {/* <section id="Contact">
        <Contact />
      </section>  */}
    </div>
  );
};

export default App;
