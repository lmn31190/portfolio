import { useRef } from "react";
import "./portfolio.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Next Ecommerce",
    img: "/next-ecommerce.png",
    desc: "Projet full stack site Ecommerce & pannel admin réalisé avec NEXT JS.",
    url: "https://next-ecommerce-front-seven.vercel.app/",
  },
  {
    id: 2,
    title: "LM Design",
    img: "/figma.webp",
    desc: "Projet clone figma collaboratif réalisé avec Next JS.",
    url: "https://lmdesign.vercel.app/",
  },
  {
    id: 3,
    title: "The restaut",
    img: "/restaut.png",
    desc: "Site vitrine restaurant",
    url: "https://the-resto.netlify.app/",
  },
  {
    id: 4,
    title: "LM Phone",
    img: "/iphone.png",
    desc: "Projet site' web apple utilisant Vite, Gsap, animation 3d.",
    url: "https://lmphone.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <a href={item.url} target="_blank">
            <img src={item.img} alt="" />
            </a>
          </div>

          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
              <a href={item.url} target="_blank">
                Voir démo
              </a>

          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Mes réalisations</h1>
        <div style={{ scaleX }} className="progressBar"></div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
