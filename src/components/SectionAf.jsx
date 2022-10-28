import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionAf = ({ text }) => {
  return (
    <motion.div
      className="sectionAf"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>{text.heading}</h2>
      <div className="line"></div>
      <h3 dangerouslySetInnerHTML={{ __html: text.body }}></h3>

      <div>
        <NavLink to="/contact">
          <button className="af-button">Contact Us</button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default SectionAf;
