import React from "react";
import { CardData, CardTitle } from "../util/Card";
function Card() {
  return (
    <div id="projects" className=" cardd w-full sm:h-[170vh] h-[480vh] flex justify-center gap-[80px] flex-col ">
     <div className="flex justify-center">
     {CardTitle.map((cardinfo) => (
          <div className="text-white">
            <h1 className="poppins font-bold text-[38px] pointer-events-none">{cardinfo.title}</h1>
            <span className="normal font-some leading-10 pointer-events-none">{cardinfo.text}</span>
          </div>
        ))}
     </div>
      <div className=" flex justify-center items-center gap-[25px]  w-full flex-wrap ">
        {CardData.map((card) => (
          <div key={card.id} className=" flex gap-60">
            <div className="card flex  flex-col  w-[315px] h-[450px] rounded-[10px] text-white
             items-center gap-[10px] pointer-events-none  ">
              <img src={card.Image} alt="" className="w-[100%] h-[45%]  rounded-t-lg" />
              <h1 className="pt-1 font-normal  text-[22px]">{card.title}</h1>
              <span className="w-[90%] font-mono ">{card.text1}</span>
              <span className="w-[90%] font-thin">{card.text2}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
