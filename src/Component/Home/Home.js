import React from "react";
import About from "../About/About";
import ChoseUs from "../ChoseUs/ChoseUs";
import Classes from "../Classes/Classes";
import FatBurning from "../FatBurning/FatBurning";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
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
      <Pricing />
      <ChoseUs />
      <Team />
    </div>
  );
};

export default Home;
