import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import MobileSidebar from "../components/sidebar";
import Shop from "../components/shop";
import Sale from "../components/Sale";
import Importants from "../components/Importants";
import NewShop from "../components/NewShop";
import Section7 from "../components/Section7";
import Underline from "../components/Underline";
import Articles from "../components/Articles";
import LogoFooter from "../components/LogoFooter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <MobileSidebar />
      <Header />
      <Shop />
      <Sale />
      <NewShop />
      <Section7 />
      <Underline />
      <Importants />
      <Articles />
      <LogoFooter />
      <Footer />
    </div>
  );
};

export default Home;
