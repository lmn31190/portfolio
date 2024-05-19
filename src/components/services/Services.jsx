import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";



const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div className="services" variants={variants}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          Je m'efforce d'aider votre marque à <br /> se développer et à évoluer
        </p>
        <hr />
      </motion.div>

      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={"animate"}
      >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            Idées <motion.b whileHover={{color: 'orange'}}>Uniques</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color: 'orange'}}>Pour votre</motion.b> business
          </h1>
          <a href="#Portfolio">MES RÉALISATIONS</a>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
      >
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            cursor: "pointer",
          }}
        >
          <h2>DESIGN</h2>
          <p>
          Mon expertise en design me permet de concevoir des interfaces utilisateur intuitives et esthétiques, tout en assurant une expérience de navigation fluide et agréable. Chaque projet est pour moi une opportunité de fusionner créativité et fonctionnalité, garantissant ainsi des sites web qui ne sont pas seulement beaux, mais également performants et accessibles.
          </p>
          <a href="#Portfolio" className="go">Mes réalisations</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            cursor: "pointer",
          }}
        >
          <h2>CONCEPTION</h2>
          <p>
          Que ce soit pour la création de sites vitrine, de boutiques en ligne ou d'applications web complexes, je veille à ce que chaque ligne de code soit optimisée pour la rapidité, la sécurité et la fiabilité. Mon objectif est de transformer vos idées en réalisations concrètes et durables, en offrant un service personnalisé et un accompagnement de qualité tout au long du processus de développement.
          </p>
          <a href="#Portfolio" className="go">Mes réalisations</a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
