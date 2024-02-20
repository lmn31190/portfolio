import "./app.scss";
import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Accueil">
        <Navbar />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
