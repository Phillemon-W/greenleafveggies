import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionA = () => {
  return (
    <div className="sectionA">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="texts"
      >
        <h4>Expertise</h4>
        <div className="line"></div>
        <h2 className="h2">
          We are key players in supply of naturally produced sun-dried Kunde.
        </h2>
        <h3>
          Our team is mandated to ensure that all our customers get access to high quality, organic and 100% natural sun-dried Kunde. Quality is the key factor in ensuring success in our business.
        </h3>
        <div>
          <NavLink to="/contact">
            <button>Contact Us</button>
          </NavLink>
        </div>
      </motion.div>
      <div className="illustration">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="./img/actuals/expert1.jpg"
          alt="expt"
        />
        <motion.div
          initial={{ opacity: 0, x: "-1rem" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="image"
        ></motion.div>
      </div>
    </div>
  );
};

export default SectionA;
