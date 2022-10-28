import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionAs = () => {
  return (
    <div className="sectionB">
      <div className="width-seter">
        <div className="illustration ">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="./img/actuals/activite.jpg"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, x: "1rem" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="image"
          ></motion.div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="texts as"
        >
          <h2>Quality control of our products</h2>
          <div className="line"></div>
          <h3>
            The quality control of the vegetables supplied to consumers is done at our premises. It begins with choosing the best quality green veggies sourced directly from the farmers, reception and storage, sun-drying, packaging up to the finished products analyzed and delivered.
          </h3>
          <div>
            <NavLink to="/contact">
              <button>Contact Us</button>
            </NavLink>
          </div>
        </motion.div>
      </div>

      <div
        className="layer1"
        style={{ backgroundImage: "url(/img/layers/circle1.png)" }}
      ></div>
    </div>
  );
};

export default SectionAs;
