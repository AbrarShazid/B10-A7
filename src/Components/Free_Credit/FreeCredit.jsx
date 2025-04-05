import React from 'react';

const Free_Credit = ({addCoin}) => {
  return (
    <div  className='bg-black  h-[420px] mt-[2%] mx-[3%] rounded-xl relative flex justify-center items-center  '  >


<img src="/assets/bg-shadow.png" className=' w-full h-full rounded-xl absolute pointer-events-none' alt="" />

<div className='text-white flex flex-col items-center  gap-5 '>


    <img src="/assets/banner-main.png" className='w-52 min-h-44' alt="" />
    <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <h3 className='opacity-70 text-2xl'>Beyond Boundaries Beyond Limits</h3>
    <button  
      onClick={addCoin}
    
    className='h-14 border border-[#E7FE29] text-black rounded-2xl py-[5px] px-[5px] font-bold flex justify-center '>  <span className='bg-[#E7FE29] py-3 px-2 rounded-xl '>Claim Free Credit</span> </button>



</div>


      
    </div>
  );
};

export default Free_Credit;