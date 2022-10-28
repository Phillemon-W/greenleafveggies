import React from "react";
import { motion } from "framer-motion";

const SmallHero = ({ heading, image, desc }) => {
  return (
    <div className="small-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="shadow"></div>
      <motion.div
        className="elm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2>{heading}</h2>
        <h3 className="bottomh3">{desc}</h3>
      </motion.div>
    </div>
  );
};

export default SmallHero;
