import React from "react";
import { motion } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";
import kunde from "../img/lfish.jpeg"

const SingleProduct = ({ title, desc, points, tags }) => {
  const handleCommands = (e) => {
    // generate commande number
    let cmdNum = Math.floor(Math.random() * 90000);
    // send cmd
    const proName = e.target.parentElement.parentElement.children[0].innerText;
    window.location.replace(
      `https://api.WhatsApp.com/send?phone=+254752243399&text=Numero De Commande: ${cmdNum} -- Produit: ${proName} `
    );
  };
  const style = {
    width: "100%",
    marginBottom: '1rem',
    borderRadius:'10px'
    
  }

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="single-product sectionAf"
      >
        <h2 style={{
          marginBottom: '1.5rem',
          marginTop:'0'
        }} dangerouslySetInnerHTML={{ __html: title }}></h2>
        <div >
        <img style={style} src={kunde} alt="" />
        </div>
        <h3 className="poin" dangerouslySetInnerHTML={{ __html: desc }}></h3>
        <div className="points">
          <ul>
            {points.map((item, idx) => (
              <li>
                <BsCheckLg className="icons" />
                <span
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="tags">
          <ul>
            {tags.map((item, idx) => (
              <li key={idx}>{item} </li>
            ))}
          </ul>
        </div>
        <div className="product-button">
          <button onClick={(e) => handleCommands(e)}>
            Contact Via Whatsapp
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default SingleProduct;
