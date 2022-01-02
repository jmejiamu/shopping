import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import Pagination from "../components/Pagination/Pagination";
import Products from "../components/Products/Products";
const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Products />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
