import React from "react";
import Carrousel from "./carrousel";
import TimeUntil from "./TimeUntil";

const featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Amr Diab</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default featured;
