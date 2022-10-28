import React from "react";
import SingleProduct from "../SingleProduct";
import ProductMessage from "../ProductMessage";

const products = [
  {
    title: "Sun-dried <span>cowpea leaves(Kunde)</span> ",
    desc: "Our products have a longer shelf life and no refrigeration is required. <br> Our dried Kunde contains antioxidants and immune boosters. it is also rich in: ",
    points: [
      "Vitamins such as <b> provitamin A, folate, thiamin, riboflavin & Vitamin C</b>",
      "Minerals such as  <b> Calcium and Phosphorus </b>",
      " <b>Rich in Iron</b>",
    ],
    tags: [
      "Sun-dried veggies",
      "African veggies",
      "Fresh veggies",
    ],
  },
];

const ProduitsComps = () => {
  return (
    <div className="produits">
      {products.map((item, idx) => (
        <SingleProduct
          key={idx}
          title={item.title}
          desc={item.desc}
          points={item.points}
          tags={item.tags}
        />
      ))}

      <ProductMessage />
    </div>
  );
};

export default ProduitsComps;
