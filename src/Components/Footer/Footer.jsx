import React from 'react';

const Footer = () => {
  return (
    <div className=' py-[2%] bg-[#06091A] text-white'>

      <div className='px-[3%] flex flex-col items-center gap-14 '>

        <img className='h-32 w-32 object-cover' src="../../../Public/assets/logo-footer.png" alt="" />

        <div className='grid md:grid-cols-3 justify-items-start '> 
      {/* left   */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>About Us</h3>
          <p className='opacity-60 '>We are a passionate team <br /> dedicated to providing the best <br />services to our customers.</p>




        </div>

      {/* center   */}
        <div>

          <h3 className='text-lg font-semibold'>Quick Links </h3>
          <ul className='opacity-60 list-disc px-6 space-y-3 mt-4'>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* right  */}
        <div>
        <h3 className='text-lg font-semibold'>
          Subscribe
        </h3>
        <p className='opacity-60 my-4'>Subscribe to our newsletter for the <br />latest updates.</p>
        

        <div>
          <input className='bg-white border-none outline-0 text-black px-7 py-3.5 rounded-l-xl' type="email" name="" id="" placeholder='Enter your email' />
          <button className='px-7 py-3.5 rounded-r-2xl bg-gradient-to-r from-gray-500 via-yellow-300 to-pink-700 shadow-lg text-black font-bold' >SubScribe</button>

        </div>

        </div>





        </div>






      </div>

      <hr  className='mt-16 mb-7 opacity-15'/>

      <h6 className='opacity-60 text-center'>@2024 Your Company All Rights Reserved.</h6>

    </div>
  );
};

export default Footer;