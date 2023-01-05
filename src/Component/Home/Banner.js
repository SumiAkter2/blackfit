import React from "react";
import "./Banner.css";
import { BiTimer } from "react-icons/bi";
import { GiStairsGoal } from "react-icons/gi";
import { banner } from "../../info";
const Banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <div className="">
      <div className="banner-container hero">
        <div className="banner-content opacity-70 hero-overlay"> </div>
        <div className="hero-content ">
          <div className="text-center mt-12">
            <h1 className="text-black lg:text-5xl text-xl font-serif font-bold uppercase ">
              <span> {titlePart1}</span>
            </h1>
            <h1 className="text-primary lg:text-5xl  font-serif font-bold uppercase ">
              {titlePart2}
            </h1>

            <p className=" text-gray-500 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam a ratione animi neque distinctio eum, mollitia tempore
            </p>

            <button className="my-12 button">
              <span></span>Let's Start
            </button>

            <div className=" lg:mt-12 p-6 lg:p-12 mb-6">
              <p className="text-xl text-primary font-bold font-serif uppercase">
                Want to be healthy and have a perfect body? BLACKFIT is the
                right decision for you! It will create your personal training
                program and balance your diet so you could get the shape of your
                dream shortly!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ======banner next info=========== */}
      <div
        className=" lg:flex   
     mx-auto mb-6 "
      >
        <div className="hero flex-1 banner-next-info">
          <div className="hero-overlay bg-black bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" text-primary p-6">
              <BiTimer size="70px" className="mx-auto" />

              <h1 className="mb-5 lg:text-4xl font-bold text-xl">
                PROGRESSION
              </h1>
              <p className="mb-5">
                The point of using Lorem Ipsum is that it has pi motive
                re-or-less for normal distribution.
              </p>
              <button class="btns"> view Progression</button>
            </div>
          </div>
        </div>
        <div className="hero flex-1 banner-next-info2">
          <div className="hero-overlay bg-black bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" text-primary p-6">
              <GiStairsGoal size="70px" className="mx-auto" />

              <h1 className="mb-5 lg:text-4xl font-bold text-xl">
                Achieve Your Goals
              </h1>
              <p className="mb-5 ">
                Ready to kick start your new healthy lifestyle? Contact us for a
                20% off your introductory training session.
              </p>
              <button class="btns"> view Class Schedule</button>
            </div>
          </div>
        </div>
        <div className="hero flex-1 banner-next-info3">
          <div className="hero-overlay bg-black bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" text-primary p-6">
              <BiTimer size="70px" className="mx-auto" />

              <h1 className="mb-5 lg:text-4xl font-bold text-xl">
                Train Day and Night
              </h1>
              <p className="mb-5">
                Our members wanted more flexible opening hours, so we offer them
                24/7 access since the last year.
              </p>
              <button class="btns"> Find Your Perfect Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
