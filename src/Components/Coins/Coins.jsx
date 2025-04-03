import React from 'react';
import { TbCoin } from "react-icons/tb";

const Coins = ({totalCoin}) => {
  return (
    <div>

        <button className='flex items-center font-bold gap-1 border border-[rgba(19,19,19,0.1)] rounded-xl p-3'> {totalCoin} <span className='flex items-center gap-1'>Coin <TbCoin /></span> </button>
      
    </div>
  );
};

export default Coins;