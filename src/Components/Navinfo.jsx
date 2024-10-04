import React from "react";
import { NavImg, NavInfo } from "../util/Nav";
function Navinfo() {
  return (
    <div id="hero"
      className=" sm:flex flex-row w-full h-[80vh] items-center sm:justify-around justify-between
      sm:ml-0 p-10 sm:gap-[200px] gap-0">
      <div className="flex flex-wrap flex-col text-[35px]  font-serif font-normal capitalize sm:pt-0 pt-[30px]">
        {NavInfo.map((NavInfo) => (
          <div key={NavInfo.id}>
            <h2 className="text-gradient">{NavInfo.text}</h2>
            <div className="text-icon flex pointer-events-none">
              <h2 className="text-gradient">{NavInfo.text1}</h2>
              <h2 className="text-white">{NavInfo.texticon}</h2>
            </div>
          </div>
        ))}
      </div>
      {NavImg.map((img) => (
        <div key={img.id} className="border flex items-center justify-center">
          <img
            src={img.images}
            alt=""
            className="w-[95%] h-[95%] sm:rounded-[100%] rounded-[50%]"
          />
        </div>
      ))}
    </div>
  );
}

export default Navinfo;
