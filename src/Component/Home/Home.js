import React from "react";
import About from "../About/About";
import ChoseUs from "../ChoseUs/ChoseUs";
import Classes from "../Classes/Classes";
import FatBurning from "../FatBurning/FatBurning";
import Pricing from "../Pricing/Pricing";
import Subscribe from "../Subscribe/Subscribe";
import Team from "../Team/Team";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <About />
      <Pricing />
      <ChoseUs />
      <Classes />
      <FatBurning />
      <Team />
      <Subscribe/>
    </div>
  );
};

export default Home;
