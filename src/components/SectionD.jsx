import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionD = () => {
  return (
    <div className="sectionA">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="texts"
      >
        <h4>Innovation</h4>
        <div className="line"></div>
        <h2>Research and Development Greenleaf Veggies</h2>
        <h3>
          Our predominantly agricultural country offers a variety of products for  brimming with useful nutritional values for growth and development of healthy green veggies such as Cowpeas(kunde). 
        </h3>
        <h3>
          The provision of raw materials for production of farm inputs, manure and sustainability mechanisms are at the heart of production of quality green veggies at Greenleaf Veggies, for the happiness of the consumers that you are! To create a better world where hunger, malnutrion and malnourishment no longer have a place , we will have to work on innovation to make our business responsible and sustainable.  
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
          src="./img/actuals/cereal2.jpg"
          alt=""
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

export default SectionD;
