import React from "react";
import "./NotFound.css";
import img from "../../img/notfound.jpg";
const NotFound = () => {
  return (
    <div className="notfound-content">
      <img src={img} alt="notfound-img" />
    </div>
  );
};

export default NotFound;
