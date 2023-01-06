import React from "react";
import team from "../../img/pexels-sabel-blanco-1738629.jpg";
import team2 from "../../img/pexels-scott-webb-136405.jpg";
import team3 from "../../img/pexels-cottonbro-studio-4753996.jpg";
import team4 from "../../img/pexels-josef-pascal-1978505.jpg";
import "./Team.css";
const Team = () => {
  return (
    <div className="bg-black text-primary pb-12">
      <h1
        className="text-center  lg:text-5xl text-3xl font-bold pt-12 uppercase"
        style={{ fontSize: "90px" }}
      >
        <span
          className="text-black pt-12"
          style={{ WebkitTextStroke: "1px white" }}
        >
          Meet
        </span>
        <span className="text-primary"> Our COACHES</span>
      </h1>
      <p className="text-gray-500 text-center  mx-auto my-6 lg:max-w-lg">
        We are a team of experienced people, nutrition, sports and fitness
        passionate experts with talent and knowledge unsurpassed in the
        industry. Get to know us.hic eum a explicabo enim quia, quis facilis
        quos, optio nobis? Consequatur repellat sint harum.
      </p>
      <div className="lg:flex justify-center items-start py-12 px-6 ">
        <div className="  img-container mx-auto mt-4">
          <img src={team} alt="team-member-img" className="image" />
          <div className="overlays">
            <div className="text">Jennifer</div>
          </div>
        </div>
        <div className="  img-container mx-auto mt-4">
          <img src={team2} alt="team-member-img" className="image" />
          <div className="overlays">
            <div className="text">Natalia</div>
          </div>
        </div>
        <div className="  img-container mx-auto mt-4">
          <img src={team3} alt="team-member-img" className="image" />
          <div className="overlays">
            <div className="text">Trashcan </div>
          </div>
        </div>
        <div className="  img-container mx-auto mt-4">
          <img src={team4} alt="team-member-img" className="image" />
          <div className="overlays">
            <div className="text">Leo Bro</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
