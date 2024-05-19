import "./sideBar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};
const SideBar = () => {
  const [open, setOpen] = useState(false);


  return (
    <motion.div className="sideBar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
