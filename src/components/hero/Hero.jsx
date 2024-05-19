import Navbar from "../navbar/Navbar";
import "./hero.scss";
import { motion } from "framer-motion";



const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};


const Hero = () => {
  return (
  
    <div className="hero">
      <Navbar />
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          animate="animate"
          initial="initial"
        >
          <motion.h2 variants={textVariants}>LOUIS MONIÉ</motion.h2>

          <motion.h1 variants={textVariants}>
            Développeur web et designer
          </motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <a  href="#Portfolio">Mes réalisations</a>
            <motion.a variants={textVariants} href="#Contact">Me contacter</motion.a>
          </motion.div>

          <motion.img
            variants={textVariants}
            src="/scroll.png"
            animate="scrollButton"
            alt=""
          />
        </motion.div>
        <div className="imageContainer">
          <img src="/header-img.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
