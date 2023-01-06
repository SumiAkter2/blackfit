import React from "react";
import { courses } from "../../info";
import PricingCard from "./PricingCard";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div>
      <h1
        className="text-center bg-black lg:text-5xl text-3xl font-bold py-12 "
        style={{ fontSize: "90px" }}
      >
        <span
          className="text-black pt-12"
          style={{ WebkitTextStroke: "1px white" }}
        >
          PROGRAM
        </span>
        <span className="text-primary"> PRICING</span>
      </h1>
      <div className="bg-pricing text-white ">
        <div className="bg-black opacity-50">
          <div className="grid lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <PricingCard key={course.id} course={course}></PricingCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
