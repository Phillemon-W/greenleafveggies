import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  //   fixing little issue having with the duplicate active menu
  useEffect(() => {
    if (location.pathname !== "/") {
      Array.from(document.querySelectorAll(".first")).forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
    }
  }, [location, menuOpen]);

  // on scroll menu animation
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector(".scroll").style.top = "0px";
      setTopNow(true);
    } else {
      document.querySelector(".scroll").style.top = "-200px";
      setTopNow(false);
    }
  };
  // scroll to tp
  const scrollToTop = () => {
    const topElm = document.querySelector(".header");
    topElm.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const [topNow, setTopNow] = useState(false);

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, [topNow]);

  // automatic scroll to top on each component mont
  useEffect(() => {
    const topElm = document.querySelector(".header");
    topElm.scrollIntoView({ behavior: "auto", block: "end" });
  }, []);

  // side menu
  const SideMenu = () => {
    return (
      <>
        <div className="back" onClick={() => setMenuOpen(false)}></div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="side-menu"
        >
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
              <NavLink to="/produits">Products</NavLink>
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="close"
          onClick={() => setMenuOpen(false)}
        >
          <MdClose />
        </motion.div>
      </>
    );
  };

  return (
    <>
      {/* normal header */}
      <div className="header">
        <div className="logo">
          <NavLink to="/">
            <img src="./img/logo.png" alt="lfish logo" />
          </NavLink>
        </div>

        <div className="menu">
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
              <NavLink to="/produits">Products</NavLink>
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

        <div className="menu-mobile" onClick={() => setMenuOpen(true)}>
          <HiOutlineMenuAlt3 />
        </div>
      </div>
      <div className="bottom-line"></div>

      {/* on scroll header */}
      <div className="scroll">
        <div className="onscroll-header">
          <div className="logo">
            <NavLink to="/">
              <img src="./img/logo.png" alt="lfish logo" />
            </NavLink>
          </div>

          <div className="menu">
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
                <NavLink to="/produits">Products</NavLink>
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

          <div className="menu-mobile" onClick={() => setMenuOpen(true)}>
            <HiOutlineMenuAlt3 />
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>

      {menuOpen && <SideMenu />}

      {/* scroll to top */}
      {topNow && (
        <div className="back-to-top" onClick={() => scrollToTop()}>
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};

export default Header;
