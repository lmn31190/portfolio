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
          <a href="#" className="social">
            <img src="/linkedin.png" alt="" />
            <img src="/github.png" alt="" />
            <img src="/gmail.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
