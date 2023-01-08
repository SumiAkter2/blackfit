import React from "react";
import img1 from "../../img/barbell-1839086__340.jpg";
import img2 from "../../img/pexels-airam-datoon-13106586.jpg";
import img9 from "../../img/pexels-ivan-samkov-4164761.jpg";
import img7 from "../../img/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg";
import img8 from "../../img/pexels-sabel-blanco-1738629.jpg";
import img3 from "../../img/pexels-william-choquette-1954524.jpg";
import img4 from "../../img/pexels-scott-webb-136405.jpg";
import img5 from "../../img/istockphoto-1132086660-612x612.jpg";
import img10 from "../../img/pexels-cottonbro-studio-4753892.jpg";
import img11 from "../../img/pexels-ivan-samkov-4162481.jpg";
import img12 from "../../img/pexels-josef-pascal-1978505.jpg";
import img13 from "../../img/shutterstock_1012770097-min-scaled.jpg";
import img14 from "../../img/class.jpg";
import img15 from "../../img/class2.jpg";
import img16 from "../../img/class3.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="containers bg-black text-white">
        <h2 className="heading-text uppercase text-center lg:text-5xl text-2xl font-bold mb-12">
          OUR <span> GALLERY</span>
        </h2>
     
      <div class="row">
        <div class="column">
          <img src={img1} style={{ width: "100%" }} className="myImg" alt="gym-img" />
          
            <img
              src={img2}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            <img
              src={img3}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            <img
              src={img16}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
          </div>
          <div class="column">
            <img
              src={img4}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            <img
              src={img5}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            {/* <img src={img7} style={{ width: "100%" }} className="myImg" alt="gym-img" /> */}
            <img
              src={img11}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
          </div>

          <div class="column">
            <img
              src={img10}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            <img
              src={img8}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            <img
              src={img15}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            <img
              src={img13}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
          </div>

          <div class="column">
            <img
              src={img14}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            <img
              src={img12}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
            <img
              src={img9}
              style={{ width: "100%" }}
              className="myImg"
              alt="gym-img"
            />
          </div>
          {/* <div class="column">
          
           
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
