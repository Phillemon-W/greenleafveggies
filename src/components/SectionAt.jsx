import React from "react";
import { motion } from "framer-motion";

const SectionAt = () => {
  return (
    <div className="sectionB ">
      <div className="width-seter">
        <div className="illustration">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="./img/actuals/activite2.jpg"
            alt="cereal"
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
          className="texts sectionAt as"
        >
          <h2>Advice and assistance from our experts</h2>
          <div className="line"></div>
          <h3>
            Proximity to you, our customers, gives the products we deliver to you the ability to maintain its quality  right from the time it is delivered to preparation of your veggies. <br></br> We go beyond product supply and delivery for your good. We offer you with the a simple recipe and prepation procedures, well detailed in the package of our products. 
          </h3>
        </motion.div>
      </div>
      <div
        className="layer3"
        style={{ backgroundImage: "url(/img/layers/circle1.png)" }}
      ></div>
    </div>
  );
};

export default SectionAt;
