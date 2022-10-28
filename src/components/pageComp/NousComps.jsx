import React from "react";
import { motion } from "framer-motion";

const NousComps = () => {
  return (
    <div className="nous-content">
      <div className="sectionA">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="texts"
        >
          <h2>Our Mission</h2>
          <div className="line2"></div>
          <h3>
            Our mission is to provide high quality organic food. We also ensure that we provide affordable food since our products are cheap and can be afforded by everyone. our aim is to raise the living standards of African farmers through provision of a ready market for their farm produce.   
          </h3>
          <h3>
          As part of our extension activities,we also provide advice to farmers through educating them on best practices such as the choice of fertilizers, seed varieties and best seasons to ensure maximum productivity.
            
          </h3>
          <h3>
          We also have the mandate of encouraging people to eat more organic and African indigenous veggies. We empower the community through provision of information and educating them about healthy local food systems.
          </h3>
        </motion.div>
        <div className="illustration">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="./img/actuals/about1.jpg"
            alt=""
            className="carre"
          />
          <motion.div
            initial={{ opacity: 0, x: "-1rem" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="image"
          ></motion.div>
        </div>
      </div>

      {/* Vision */}
      <div className="sectionB">
        <div className="width-seter">
          <div className="illustration">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="./img/actuals/about2.jpg"
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
            className="texts"
          >
            <h2>Our Vision</h2>
            <div className="line2"></div>
            <h3>
             Our vision is to increase the desire of African culinary experience by bringing African veggies closer to the plate. We also aim to cut down on wastage and degradation of the veggies quality due to their short life span.
            </h3>
            <h3>
            The objective of our business is to provide a high quality product and reliable service for our customers. We hope you will enjoy visiting our web site and using our products as much as we enjoyed providing them for you.
            </h3>
            <h3>
            All our company actions are respecting nature. Commitment to nature engages us in safe guarding the environment by taking care of resources and properly handing plantation.Our customer is the most important person for our company weather who is visiting, writing, or telephone.For any other information about our products & services please contact us as we are here to serve you at anytime.
            </h3>
          </motion.div>
        </div>

        <div
          className="layer1"
          style={{ backgroundImage: "url(/img/layers/circle1.png)" }}
        ></div>
      </div>
    </div>
  );
};

export default NousComps;
