import React from "react";
import CountUp from "react-countup";
import './ChoseUs.css';
const ChoseUs = () => {
  return (
    <div className="bg-black">
      <h1
        className="text-center bg-black lg:text-5xl text-3xl font-bold py-12 chooseUs-content"
        style={{ fontSize: "90px" }}
      >
        <span className="text-black " style={{ WebkitTextStroke: "1px white" }}>
          Why
        </span>
        <span className="text-primary mt-12"> Choose us</span>
      </h1>
      <p className="text-gray-500 text-center  mx-auto mt-2 lg:max-w-lg">
        Hiceum a explicabo enim quia, quis facilis quos, optio nobis?
        Consequatur repellat sint harum.
      </p>
      <div className="lg:flex justify-around items-center text-white py-12 mx-auto">
        <div className="text-center font-bold mx-auto mt-6">
          <h1 className="text-5xl ">
            <CountUp duration={2.75} start={0} end={13} />
          </h1>
          <p>Training Programs</p>
        </div>
        <div className="text-center font-bold mx-auto mt-6">
          <h1 className="text-5xl ">
            <CountUp duration={2.75} start={0} end={8} />
          </h1>
          <p>Years Experience</p>
        </div>
        <div className="text-center font-bold mx-auto mt-6">
          <h1 className="text-5xl ">
            <CountUp duration={2.75} start={0} end={100} />
          </h1>
          <p>Happy clients</p>
        </div>
        <div className="text-center font-bold mx-auto mt-6">
          <h1 className="text-5xl ">
            <CountUp duration={2.75} start={0} end={15} />
          </h1>
          <p>Best Trainers</p>
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
