import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-black py-6  px-6 ">
      <div className=" lg:flex justify-evenly items-center my-24 bg-gray-800  p-12 lg:m-12 rounded-md ">
        <div className="text-white">
          <h1 className="text-3xl text-center text-white">
            SIGN UP TO NEWSLETTER
          </h1>
          <h1 className="mt-4 text-white">
            Receive early updates Our products info.
          </h1>
        </div>
        <div className="lg:flex mt-4">
          <input
            type="text"
            placeholder="Type Email"
            className="input input-bordered input-secondary w-full mb-4"
          />
          <button className="btn btn-outline btn-primary ml-3 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
