import React from 'react';
import Coins from '../Coins/Coins';

const Header = ({totalCoin}) => {
  return (
    <div className='flex items-center justify-between mt-[2%] mx-[3%]'>
      {/* logo */}
      <div>
        
        <img src="/logo.png" alt="logo" />
      </div>
      {/* right side content of header  */}
      <div> 

          <ul className='flex gap-10 items-center'>
            <li className='opacity-70'>Home</li>
            <li className='opacity-70'>Fixture</li>
            <li className='opacity-70'>Teams</li>
            <li className='opacity-70'>Schedules</li>
            <Coins  totalCoin={totalCoin} ></Coins>
          </ul>

      </div>
      
    </div>
  );
};

export default Header;