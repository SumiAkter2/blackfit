import React from "react";
import "./Banner.css";
import { banner } from "../../info";
const Banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <div className="">
      <div className="banner-container hero ">
        <div className="banner-content opacity-70 hero-overlay"> </div>
        <div className="hero-content ">
          <div className="text-center mt-48">
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
      {/* <div
        className=" grid grid-cols-1 lg:grid-cols-3  
     banner-info banner-next-info mx-auto gap-12"
      >
        <div className="bg-info p-6">
          <h1>Upcoming Classes See what is next</h1>
          <div className="flex justify-between items-center">
            <p>Active Adults</p>
            <p>11:00 am - 02:00 pm</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Active Kids</p>
            <p>02:00 pm - 05:00 pm</p>
          </div>
        </div>
        <div className="bg-secondary p-6">
          <h1>Upcoming Classes See what is next</h1>
          <div className="flex justify-between items-center">
            <p>Active Adults</p>
            <p>11:00 am - 02:00 pm</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Active Kids</p>
            <p>02:00 pm - 05:00 pm</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
