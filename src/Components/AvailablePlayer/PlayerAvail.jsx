import React from 'react';
import { FaUser } from "react-icons/fa";



import { IoFlagSharp } from "react-icons/io5";



const PlayerAvail = ({playerData ,choosePlayer }) => {


  const {id,name,country,role,image_url,price,batting_hand,bowling_hand}=playerData


  
  return (
    <div className='border border-[rgba(19,19,19,0.10)] p-4 rounded-2xl'>
      <img className='rounded-2xl h-60 w-full object-cover mb-5' src={image_url} alt="" />


      <div className='space-y-3'> 
        <div className='flex gap-3 items-center'>
        <FaUser className='h-5 w-5' />
        <h3 className='text-xl font-semibold'>{name}</h3>

        </div>
        {/* flag and  country part  */}

        <div className='flex items-center justify-between '>
            <div className='flex items-center gap-2 opacity-50'>
              <IoFlagSharp className='h-4 w-4' />
              <p>{country}</p>

            </div>

            <button className='bg-[rgba(19,19,19,0.05)] px-3 py-2 rounded-lg text-sm '>{role}</button>


        </div>




      </div>

      <hr className="opacity-10 my-3" />

      {/* down part   */}


      <div className='space-y-3'>
          <h3 className='font-bold'>Details</h3>

          <div className='flex justify-between items-center'>
            <h3 className='font-semibold'>{batting_hand}-Hand-Bat</h3>
            <h3 className='opacity-70'>{bowling_hand}-Hand-Bowl</h3>
          </div>

          <div className='flex justify-between items-center'>
            <h3 className='font-semibold'>Price: ${price}</h3>
            <button onClick={()=>choosePlayer(id)} className='border border-gray-300 px-3 py-2 rounded-lg text-sm hover:border-[rgba(19, 19, 19, 0.3)] hover:bg-gray-200'>Choose Player </button>
            
            
          </div>

      </div>

     
      
    </div>
  );
};

export default PlayerAvail;