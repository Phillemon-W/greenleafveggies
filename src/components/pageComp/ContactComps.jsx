import React from "react";
import ContactForm from "../ContactForm";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactComps = () => {
  return (
    <div className="contact-container">
      <motion.div
        className="infomations"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="head">
          <h2>Contact Us</h2>
          <div className="line2"></div>
          <h3>
            You can contact us directly using our contact information provided below or by filling out the form.
          </h3>
        </div>
        <div className="actual-info">
          <div className="item">
            <a href="tel:+254752243399">
              <MdOutlinePhone />
              <p>+254752243399 </p>
            </a>
          </div>
          <div className="item">
            <a href="https://api.WhatsApp.com/send?phone=+254752243399&text=Hello Greenleaf Veggies, I am contacting you from your website.">
              <BsWhatsapp />
              <p>+254752243399</p>
            </a>
          </div>
          <div className="item">
            <a href="mailto:greenleafveggies21@gmail.com">
              <MdOutlineEmail />
              <p>greenleafveggies21@gmail.com</p>
            </a>
          </div>
          <div className="item">
            <a href="https://greenleafveggies.com">
              <TbWorld />
              <p>greenleafveggies.com</p>
            </a>
          </div>
          <div className="item">
            <a href="https://facebook.com">
              <FaFacebookF />
              <p>Facebook</p>
            </a>
          </div>
        </div>
      </motion.div>

      <ContactForm />
    </div>
  );
};

export default ContactComps;
