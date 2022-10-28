import React from "react";
import { BsGlobe2, BsEnvelope } from "react-icons/bs";
import { RiTrelloLine } from "react-icons/ri";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <>
      <Header />
      <div className="app-heading">
        <h1>GreenLeaf Apps</h1>
      </div>
      <div className="apps-container">
        <Link to="/">
          <div className="app">
            <BsGlobe2 className="icon" />
            <p>Site Web</p>
          </div>
        </Link>
        <a href="https://server245.web-hosting.com:2096/">
          <div className="app">
            <BsEnvelope className="icon" />
            <p>Email</p>
          </div>
        </a>
        <a href="https://trello.com/login">
          <div className="app">
            <RiTrelloLine className="icon" />
            <p>Trello</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Apps;
