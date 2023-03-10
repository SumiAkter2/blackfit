import React, { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import "./style.css";

const WhoWeAre = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black pb-24">
      <h1
        className="text-center  lg:text-5xl text-3xl font-bold pt-6 weAre-content"
        style={{ fontSize: "90px" }}
      >
        <span className="text-black" style={{ WebkitTextStroke: "1px white" }}>
          WHO
        </span>
        <span className="text-primary"> WE ARE</span>
      </h1>
      <p className="text-gray-500 text-center lg:max-w-md mx-auto mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis
      </p>
      <div className="container mx-auto ">
        <div className="bg-video h-[310px] bg-cover bg-center bg-no-repeat lg:h-[422px]  lg:w-[900px] w-[400px]  flex justify-center items-center rounded-md mt-[60px] pb-12  mx-auto  ">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-6xl lg:text-[120px] cursor-pointer hover:scale-130 transition text-orange"
          >
            <BsPlayCircleFill fill="white" />
          </div>
        </div>
      </div>
      <ModalVideo
        width="550"
        height="600"
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="8YGHbN-Xq4w"
        onClose={() => setIsOpen(false)}
      />
      <div className="flex justify-center items-center mt-12">
        <button className="btns ">Free Consultation</button>
      </div>
    </div>
  );
};

export default WhoWeAre;
