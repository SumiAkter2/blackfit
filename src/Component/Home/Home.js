import React from "react";
import About from "../About/About";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <About />
    </div>
  );
};

export default Home;
