import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="mx-auto bg-black max-w-screen-sm my-12">
      <Bars
        height="80"
              width="120"
              color="white"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
