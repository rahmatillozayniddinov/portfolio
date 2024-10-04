import React from "react";
import {
  bootstrap,
  css,
  github,
  html,
  js,
  react,
} from "../assets";
import { MyTechData } from "../util/MyTech";

function MyTech() {
  return (
    <div id="skills" className="NavInfo mytech w-full sm:h-[90vh] h-[190vh]">
      <div className="MyTech flex items-center justify-center flex-col xs:h-0 h-[20vh]">
        {MyTechData.map((MyTech) => (
          <div>
            <h2 className="poppins font-bold text-[38px] pointer-events-none">
              {MyTech.text1}
            </h2>
            <span className="normal font-normal leading-10 pointer-events-none ">
              {MyTech.text}
            </span>
          </div>
        ))}
      </div>
      <div className="myres flex justify-center items-center w-full sm:h-[90vh] h-[160vh]">
        <div className=" flex flex-wrap sm:w-[80%] w-full justify-center  gap-[100px] ">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
          <img src={bootstrap} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MyTech;
