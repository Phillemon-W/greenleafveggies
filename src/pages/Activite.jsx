import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallHero from "../components/SmallHero";
import ActiviteComps from "../components/pageComp/ActiviteComps";

const Activite = () => {
  return (
    <>
      <Header />
      <SmallHero heading={"Key Activities"} image={"/img/actuals/head2.jpg"} />
      <ActiviteComps />
      <Footer />
    </>
  );
};

export default Activite;
