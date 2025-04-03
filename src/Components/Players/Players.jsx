import React, { use, useState } from "react";
import PlayerAvail from "../AvailablePlayer/PlayerAvail";
import Selected from "../Selected/Selected";


import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";







const Players = ({ playersData,coins,setCoin }) => {
  const allData = use(playersData);

  // state and function for toggling between available player and selected player

  const [visibility, setVisibility] = useState(true);

  const toggle = (status) => {
    if (status === "available") {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  // function and selected player state for choosing player
  const [player, setPlayer] = useState([]);


  // remove player by trash icon 

  const dlt=(playerId)=>{
    let addPrice=0;
    const newArr=player.filter(item=>{
      if(item.id===playerId){
       addPrice=item.price
      }
      return item.id!==playerId
    })
    setPlayer(newArr)
    setCoin(prev=>prev+addPrice)
    

  }

  //all toast

  const playerSelected=(name)=>toast.success( `${name} Selected Successfully.`,{
    position:"top-center",
    autoClose:2000,
    
  })
  const alreadyAdded=(name)=>toast.error(`${name} is already added.`,{
    position:"top-center",
    autoClose:2000,
  })

  const maxSelected=()=>toast.error("Cannot Add More than 6 Players!!!",{
    position:"top-center",
    autoClose:2000,
  })
  const moneyShort=()=>toast.warning("Not Enough Money!!!",{
    position:"top-center",
    autoClose:2000,
  })


//choose player function

  const choosePlayer = (playerId) => {

    if(player.length>5){
      maxSelected();
      return;
    }

    let playerPrice=0;
    let playerName="";

    const playerDetails = allData.find((element) => {
      if( element.id === playerId){
        playerPrice=element.price;
        playerName=element.name;
        return element;
      }
    });

    if(playerPrice>coins){
      moneyShort();
      return;
    }
    // here checking if same player added twice or not
    const existingPlayer = player.find((element) => element.id === playerId);
  
  if (existingPlayer) {
    alreadyAdded(playerName);
    return;
  }
  
  

  setCoin(prev=>prev-playerPrice)

    const newArr = [...player, playerDetails];
    setPlayer(newArr);
    playerSelected(playerName)

   
  };
  
 

  return (
    <div className=" mx-[3%]  mb-32">
      {/* toast  */}
      <ToastContainer  />
      {/* top part constant  */}
      <div className="flex justify-between">
        <h2 className="text-[28px] font-bold">
          {" "}
          {visibility ? "Available Players" : "Selected Player "}
          {!visibility && <span>({player.length}/6)</span>}
        </h2>

        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-fit">
          <button
            onClick={() => toggle("available")}
            className={`px-5 py-2 font-semibold transition-colors duration-200 ${
              visibility ? "bg-[#E7FE29] text-black" : "text-gray-500"
            } `}
          >
            Available
          </button>
          <button
            onClick={() => toggle("")}
            className={`px-5 py-2 font-semibold  transition-colors  duration-200 ${
              !visibility ? "bg-[#E7FE29] text-black" : "text-gray-500"
            } `}
          >
            Selected ({player.length})
          </button>
        </div>
      </div>

      {/* available players data  */}

      {visibility && (
        <div className="grid md:grid-cols-3 gap-4 mt-7  ">
          {allData.map((singleData, index) => (
            <PlayerAvail
              choosePlayer={choosePlayer}
              key={index}
              playerData={singleData}
            ></PlayerAvail>
          ))}
        </div>
      )}

      {/* selected players section  */}

      {!visibility && (
        <div className=" mt-7 space-y-5"> 
            {
               player.map((playerInfo)=><Selected key={playerInfo.id} playerInfo={playerInfo} dlt={dlt}></Selected>)

            }
            
        <button  
      onClick={()=>setVisibility(true)}
    
      className='h-14 border border-black text-black rounded-2xl py-[5px] px-[5px] font-bold flex justify-center mt-12'>  <span className='bg-[#E7FE29] py-3 px-2 rounded-xl '>Add More Player</span> </button>
  
  



        </div>



      )}
    </div>
  );
};

export default Players;
