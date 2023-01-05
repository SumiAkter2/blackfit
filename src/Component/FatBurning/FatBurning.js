import React from "react";
import img from "../../img/istockphoto-1132086660-612x612.jpg";
import FatChart from "../Chart/FatChart";
const FatBurning = () => {
  return (
    <div className="lg:flex justify-center items-start bg-black text-primary py-6 opacity-95 px-4">
      <div className="flex-1">
        <img src={img} alt="gym-img" />
      </div>
      <div className="flex-1">
        <h1 className="lg:text-3xl text-xl font-bold my-6 ">
          Explore Our Top Fat Burning Classes
        </h1>
        <button className="btns mr-4 mb-6">Belly Fat</button>
        <button className="btns mr-4 mb-6">Cardio Fitness</button>
        <button className="btns mr-4 mb-6">Cycle Trining</button>
        <p>
          Body Attack is a Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perferendis possimus sunt accusantium. Placeat ullam voluptas
          repellat deserunt distinctio, quod repudiandae, nobis iure totam
          pariatur eum aperiam excepturi, eius mollitia omnis?
        </p>
        <div>
          <FatChart />
        </div>
      </div>
    </div>
  );
};

export default FatBurning;
