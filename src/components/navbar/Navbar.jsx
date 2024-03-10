import SideBar from "../sidebar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <SideBar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.5}}
        >
          Louis Monié
        </motion.span>
        <div>
          <a className="social">
            <a target="_blank" href="https://www.linkedin.com/in/louismonie/"><img src="/linkedin.png" alt="" /></a>
            <a target="_blank" href="https://github.com/lmn31190"><img src="/github.png" alt="" /></a>
            <a href="#Contact"><img src="/gmail.png" alt="" /></a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
