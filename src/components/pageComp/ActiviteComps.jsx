import React from "react";
import SectionAf from "../SectionAf";
import SectionAs from "../SectionAs";
import SectionAt from "../SectionAt";
import Banner from "../Banner";

const textA = {
  heading: "GreenLeaf Kunde, a trusted green veggies supply company, to the satisfaction of the consumers.",
  body: "GreenLeaf Veggies ensures continous supply of dried and fresh African veggies to our customers at a cheaper price, compared to our competitors.<br><br> Our veggies are sourced directly from the farmers, processed and dried to preserve them for a longer shelf life.Our products such as the dried Cowpea leaves(Kunde) have a longer shelf life of up to 2yrs with same taste as fresh Kunde. We use a waterproof zip lock bag to keep the vegetables airtight and fresh.",
};

const textB = {
  heading: "Research and Development at GreenLeaf Kunde",
  body: "Our predominantly agricultural country offers a variety of products for brimming with useful nutritional values for growth and development of healthy green veggies such as Cowpeas(kunde). The provision of raw materials for production of farm inputs, manure and sustainability mechanisms are at the heart of production of quality green veggies at Greenleaf Veggies, for the happiness of the consumers that you are! <br><br> To create a better world where hunger, malnutrion and malnourishment no longer have a place , we will have to work on innovation to make our business responsible and sustainable. <br><br> <b>CONTACT US TODAY IF YOU WANT TO BE PART OF THIS WONDERFUL ADVENTURE. </b>",
};

const ActiviteComps = () => {
  return (
    <div className="activite">
      <SectionAf text={textA} />
      <SectionAs />
      <SectionAf text={textB} />
      <SectionAt />
      <Banner />
    </div>
  );
};

export default ActiviteComps;
