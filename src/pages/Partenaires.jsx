import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallHero from "../components/SmallHero";
import PartenaireComps from "../components/pageComp/PartenaireComps";
import Banner from "../components/Banner";

const Partenaires = () => {
  return (
    <>
      <Header />
      <SmallHero heading={"Partners"} image={"/img/actuals/head1.jpg"} />
      <PartenaireComps />
      <Banner />
      <Footer />
    </>
  );
};

export default Partenaires;
