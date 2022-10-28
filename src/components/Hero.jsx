import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: "url(/img/hero3.jpg)" }}>
      <motion.div
        className="hero1"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h3> Welcome to GreenLeaf Kunde</h3>
      </motion.div>
      <motion.div
        className="hero2"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ color: "#ffe802"}}>Your number one supplier of sun-dried Kunde to spice up your diet</h1>
      </motion.div>
      <motion.div
        className="hero3"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our products are 100% natural and have been approved!</h2>
      </motion.div>
      <NavLink to="/nous">
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Learn more
        </motion.button>
      </NavLink>
    </div>
  );
};

export default Hero;
