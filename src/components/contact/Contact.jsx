import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_idg1q8l", "template_0icb72m", formRef.current, {
        publicKey: "_82jvMxd4JIVdZWmN",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Travaillons ensemble</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>contact@louismonie.fr</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Adresse</h2>
          <span>31000 Toulouse</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Téléphone</h2>
          <span>+33 6 14 72 21 55</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="earthSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Shopicon">
              <motion.path
                strokeWidth={0.5}
                fill="none"
                initial={{ pathLength: 0, y: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ delay: 0.5, duration: 2 }}
                d="M24,44c5.343,0,10.365-2.08,14.143-5.858l-2.829-2.828C32.292,38.336,28.274,40,24,40c-8.822,0-16-7.178-16-16S15.178,8,24,8s16,7.178,16,16c0,2.206-1.794,4-4,4s-4-1.794-4-4v-8h-4v1.079C26.822,16.397,25.459,16,24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8c2.394,0,4.536-1.057,6.003-2.723C31.47,30.942,33.611,32,36,32c4.411,0,8-3.589,8-8c0-11.028-8.972-20-20-20S4,12.972,4,24S12.972,44,24,44z M24,28c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.206,28,24,28z"
              />
            </g>
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Nom complet" name="name" />
          <input type="email" name="email" required placeholder="Email" />
          <textarea style={{resize: "none"}} rows={8} name="email" placeholder="Message"></textarea>
          <button>Envoyer</button>
        </motion.form>
        {error && "Erreur"}
        {success && "Message Envoyé"}
      </div>
    </motion.div>
  );
};

export default contact;
