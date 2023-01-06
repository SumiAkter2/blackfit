import React from "react";
import { BsArrowRight } from "react-icons/bs";
import img from "../../img/class.jpg";
import img2 from "../../img/class2.jpg";
import img3 from "../../img/class3.jpg";
import "aos/dist/aos.css";
import "./Classes.css";

const Classes = () => {
  return (
    <div className="bg-black ">
      <h1
        className="text-center  lg:text-5xl text-3xl font-bold pt-12 "
        style={{ fontSize: "90px" }}
      >
        <span
          className="text-black pt-12"
          style={{ WebkitTextStroke: "1px white" }}
        >
          OUR
        </span>
        <span className="text-primary"> CLASSES</span>
      </h1>
      <p className="text-gray-500 text-center lg:max-w-md mx-auto mt-6">
        Whether you want to loose weight, tone up, gain muscle or improve
        strength, we provide a wide range of classes to help you achieve your
        goals in a friendly and airy environment.
      </p>

      <div className="lg:flex justify-center items-center py-12 gap-x-6">
        <div className="img-effect mt-4 mx-auto lg:mx-0 ">
          <img src={img} alt="" className="img-body" />
          <div className="overlay flex justify-between items-center">
            <div>
              <p>Active Adults </p>
              <p>STRENGTH, SPEED, STAMINA</p>
            </div>
            <p>
              <BsArrowRight />
            </p>
          </div>
          <div className="hover:hidden mt-4 flex justify-between items-center">
            <div>
              {" "}
              <p>Active Adults </p>
              <p>STRENGTH, SPEED, STAMINA</p>
            </div>
            <p>
              <BsArrowRight />
            </p>
          </div>
        </div>
        <div className="img-effect mt-4 mx-auto lg:mx-0">
          <img src={img2} alt="" className="img-body" />
          <div className="overlay flex justify-between items-center">
            <div>
              <p>Active Adults </p>
              <p>STRENGTH, SPEED, STAMINA</p>
            </div>
            <p>
              <BsArrowRight />
            </p>
          </div>

          <div className="hover:hidden mt-4 flex justify-between items-center">
            <div>
              <p>Active Adults </p>
              <p>STRENGTH, SPEED, STAMINA</p>
            </div>
            <p>
              <BsArrowRight />
            </p>
          </div>
        </div>
        <div className="img-effect mt-4 mx-auto lg:mx-0">
          <img src={img3} alt="" className="img-body" />
          <div className="overlay flex justify-between items-center">
            <div>
              <p>Active Adults </p>
              <p>STRENGTH, SPEED, STAMINA</p>
            </div>
            <p>
              <BsArrowRight />
            </p>
          </div>

          <div className="hover:hidden mt-4 flex justify-between items-center">
            <div>
              <p>Active Adults </p>
              <p>STRENGTH, SPEED, STAMINA</p>
            </div>
            <p>
              <BsArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
