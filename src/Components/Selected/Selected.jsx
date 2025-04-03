import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";

const Selected = ({playerInfo,dlt}) => {

  
  const {id,name,image_url,batting_hand,bowling_hand}=playerInfo
  


  return (
    <div>

      <div className='p-4 border border-[rgba(19,19,19,0.10)] rounded-2xl flex justify-between'>
        <div className='flex gap-5 items-center'>
            <img className='w-20 h-20 object-cover rounded-2xl' src={image_url} alt="" />
            <div>
              <h2 className='text-2xl font-semibold'>{name}</h2>
              <p className='text-gray-800 opacity-60'>{batting_hand}-Hand-Bat</p>
              <p className='text-gray-800 opacity-60'>{bowling_hand}-Hand-Bowl</p> 

            </div>

        </div>
        <button onClick={()=>dlt(id)} ><FaRegTrashCan className='w-6 h-6 text-[#F14749]' /></button>

        </div>






















    



    </div>
  );
};

export default Selected;