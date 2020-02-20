import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/Location";
import Footer from "./components/header_footer/footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Header />
      <Element name="Header">
        <Featured />
      </Element>

      <Element name="VenueNFO">
        <VenueNfo />
      </Element>

      <Element name="Highlights">
        <Highlights />
      </Element>
      <Element name="Pricing">
        <Pricing />
      </Element>

      <Element name="Location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
