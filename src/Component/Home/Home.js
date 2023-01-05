import React from "react";
import About from "../About/About";
import Classes from "../Classes/Classes";
import FatBurning from "../FatBurning/FatBurning";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <About />
      <Classes />
      <FatBurning />
    </div>
  );
};

export default Home;
