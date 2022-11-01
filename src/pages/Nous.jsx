import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallHero from "../components/SmallHero";
import NousComps from "../components/pageComp/NousComps";
import Banner from "../components/Banner";

const Nous = () => {
  return (
    <>
      <Header />
      <SmallHero
        heading={"Who are we?"}
        image={"/img/nous.jpg"}
        desc={
          "We are a trusted African Traditional Veggies supply company."
        }
      />
      <NousComps />
      <Banner />
      <Footer />
    </>
  );
};

export default Nous;
