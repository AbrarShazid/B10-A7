import React, { use } from "react";
import PlayerAvail from "../AvailablePlayer/PlayerAvail";

const Players = ({playersData} ) => {
  const allData=use(playersData)
 
  
  
  return (
    <div className=" mx-[3%]  mb-96">
      {/* top part constant  */}
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Available Players</h2>

        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-fit">
          <button className="px-5 py-2 font-semibold bg-[#E7FE29] text-black">
            Available
          </button>
          <button className="px-5 py-2 font-semibold text-gray-500">
            Selected (0)
          </button>
        </div>
      </div>


      {/* available players data  */}

      <div className="grid grid-cols-3 gap-4 mt-7  ">

      {
      allData.map((singleData,index)=>  <PlayerAvail key={index} playerData={singleData} ></PlayerAvail>  )
     }

      </div>

     


    </div>
  );
};

export default Players;
