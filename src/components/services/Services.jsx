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

  const isInView = useInView(ref, {margin: "-100px"})

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
        // whileInView="animate"
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
          <button>MES RÉALISATIONS</button>
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
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            culpa! Provident quisquam accusamus quod quidem doloribus
            dignissimos qui accusantium sunt, cum officia odit quo quos ducimus
            saepe suscipit molestiae natus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            cursor: "pointer",
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            culpa! Provident quisquam accusamus quod quidem doloribus
            dignissimos qui accusantium sunt, cum officia odit quo quos ducimus
            saepe suscipit molestiae natus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            cursor: "pointer",
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            culpa! Provident quisquam accusamus quod quidem doloribus
            dignissimos qui accusantium sunt, cum officia odit quo quos ducimus
            saepe suscipit molestiae natus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            cursor: "pointer",
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            culpa! Provident quisquam accusamus quod quidem doloribus
            dignissimos qui accusantium sunt, cum officia odit quo quos ducimus
            saepe suscipit molestiae natus.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
