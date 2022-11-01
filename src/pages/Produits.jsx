import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SmallHero from "../components/SmallHero";
import ProduitsComps from "../components/pageComp/ProduitsComps";
import Banner from "../components/Banner";

const Produits = () => {
  return (
    <>
      <Header />
      <SmallHero
        heading={"Products"}
        image={"/img/nous.jpg"}
        desc={
          "Key player in production and supply of African Traditional Veggies."
        }
      />
      <ProduitsComps />
      <Banner />
      <Footer />
    </>
  );
};

export default Produits;
