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
        <ul className="image-gallery ">
          <li>
            <img src={img1} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img2} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img9} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img7} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img8} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img3} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img4} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img5} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>

          <li>
            <img src={img10} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img12} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img11} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img13} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img14} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img15} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
          <li>
            <img src={img16} alt="" />
            <div className="overlays">
              <span>Image title</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
