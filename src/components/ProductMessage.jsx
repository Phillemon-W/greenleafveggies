import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const ProductMessage = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="product-message"
    >
      <h4>What we offer</h4>
      <div className="line"></div>
      <h2>
        Contact Greenleaf Veggies directly to place your order for our sun-dried veggies to get them delivered at the comfort of your home. You can also contact us to inquire about other products and services that we offer other than sun-dried kunde.
      </h2>
      <h3>
        100% natural, organic and <br />
        Sun-Dried African Veggies such as Kunde.
      </h3>

      <div>
        <NavLink to="/contact">
          <button>Contact Us</button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default ProductMessage;
