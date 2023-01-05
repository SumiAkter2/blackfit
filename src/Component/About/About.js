import React from "react";
import aboutImg from "../../img/pexels-scott-webb-136405.jpg";
const About = () => {
  return (
    <section className="hero text-white bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={aboutImg}
          className="max-w-md rounded-lg shadow-2xl"
          alt="gym-img"
        />
        <div>
          <h1 className="text-5xl font-bold">
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
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default About;
