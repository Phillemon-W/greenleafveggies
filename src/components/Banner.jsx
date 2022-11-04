import React from "react";
import { motion } from "framer-motion";
import { FaLeaf} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Spice your meals with our organic, 100% natural and nutritious sun-dried Kunde.
      </motion.h2>
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact us to place your order today and get it delivered to your doorstep in less than 24hrs! Buy a packet of <b>50g</b> sun-dried Kunde for as low as <b>ksh100</b> and <b>80g</b> going for <b>ksh150</b> only.
      </motion.h3>
      <div>
        <NavLink to="/produits">
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Products
          </motion.button>
        </NavLink>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="fish-layers"
      >
        <div>
          <FaLeaf />
          <FaLeaf />
        </div>
        <div>
          <FaLeaf />
          <FaLeaf />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
