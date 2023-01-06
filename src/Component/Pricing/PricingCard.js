import React from "react";

const PricingCard = ({ course }) => {
  return (
    <div>
      <div className="card bg-transparent shadow-xl border mx-12 mt-6 my-12">
        <figure className=" w-32 h-32 mx-auto">
          <img src={course.img} alt="Logo" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <p>{course.title0}</p>
          <p>{course.title}</p>
          <p>{course.title1}</p>
          <p>{course.title1}</p>
          <p>{course.title2}</p>
          <p>{course.title3}</p>
          <p>{course.title4}</p>
          <p>{course.title5}</p>
          <h2 className="card-title lg:text-3xl">{course.price}</h2>
          <div className="card-actions">
            <button className="btns uppercase">Purchase Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
