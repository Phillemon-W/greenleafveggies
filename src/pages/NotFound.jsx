import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="notfound">
        <div>
          <h1>404</h1>
          <p>Sorry, the resource you are looking for was not found</p>
        </div>
        <Link className="backto" to="/">
          Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
