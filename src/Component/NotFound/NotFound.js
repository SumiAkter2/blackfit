import React from "react";
import './NotFound.css';
import img from "../../img/404-error-page-not-found.jpg";
const NotFound = () => {
  return (
    <div className="notfound-content">
      <img src={img} alt="notfound-img"  />
    </div>
  );
};

export default NotFound;
