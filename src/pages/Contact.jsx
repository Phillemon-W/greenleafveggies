import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallHero from "../components/SmallHero";
import ContactComps from "../components/pageComp/ContactComps";

const Contact = () => {
  return (
    <>
      <Header />
      <SmallHero heading={"Contact"} image={"/img/actuals/head2.jpg"} />
      <ContactComps />
      <Footer />
    </>
  );
};

export default Contact;
