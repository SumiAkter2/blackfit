import React from "react";
import About from "../About/About";
import Classes from "../Classes/Classes";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <About />
      <Classes />
    </div>
  );
};

export default Home;
