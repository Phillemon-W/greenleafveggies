import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="footer-container"
    >
      <div className="footer">
        <div className="first">
          <img src="./img/logo.png" alt="lfish logo" />
          <p>
            We are a Kenyan based company with years of experience in processing and supply of dried vegetables with longer shelf life of up to 2years.
          </p>
          <div className="socials">
            <FaFacebookF />
            <FaEnvelope />
          </div>
        </div>
        <div className="second elm">
          <h4>Main Links</h4>
          <div className="line"></div>
          <ul>
            <li>
              <NavLink className="first" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/nous">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/activite">Key Activities</NavLink>
            </li>
            <li>
              <NavLink to="/partenaires">Partners</NavLink>
            </li>
            <li className="contact">
              <NavLink className="contact" to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="third elm">
          <h4>Entreprise</h4>
          <div className="line"></div>
          <ul>
            <li>
              <NavLink className="first" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/nous">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/activite">Key Activities</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">© Copyright GreenLeaf Veggies 2022</div>
    </motion.div>
  );
};

export default Footer;
