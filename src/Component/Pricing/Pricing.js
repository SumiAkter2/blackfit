import React from "react";
import { courses } from "../../info";
import PricingCard from "./PricingCard";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="">
      <h1
        className="text-center bg-black lg:text-5xl text-3xl font-bold py-12 pricing-content"
        style={{ fontSize: "90px" }}
      >
        <span className="text-black " style={{ WebkitTextStroke: "1px white" }}>
          PROGRAM
        </span>
        <span className="text-primary mt-12"> PRICING</span>
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
