import React from "react";
import aboutImg from "../../img/pexels-scott-webb-136405.jpg";
const About = () => {
  return (
    <section className="hero text-white bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={aboutImg}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="gym-img"
        />
        <div>
          <p className="text-sm mb-12">About us</p>
          <h1 className="lg:text-3xl text-xl font-bold">
            From the moment you walk through the door you know BlackFit is a
            unique place
          </h1>
          <p className="py-6">
            When we created Gym Base, we knew we wanted to be more than just a
            simple gym. Having worked in traditional gyms in the past, we knew
            we needed to create a concept that would provide our members with
            the most effective tools for success. This meant we needed to offer
            a wide range of classes both for children and adults.
          </p>

          <div className="lg:flex justify-between items-center w-1/2">
            <div className="mt-4">
              <p className="text-sm">ENVIRONMENT </p>
              <p>Clean and Airy</p>
            </div>
            <div className="mt-4">
              <p className="text-sm">CLASSES </p>
              <p>Every Level</p>
            </div>
            <div className="mt-4">
              <p className="text-sm">PRICES </p>
              <p>Affordable</p>
            </div>
          </div>
          <button className="btns mt-12">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
