import { useState } from 'react';
import action1 from '../../public/images/action1.png';
import action2 from '../../public/images/action2.png';
import action3 from '../../public/images/action3.png';
import action4 from '../../public/images/action4.png';

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      
    <div className="text-center">
    
    <h1 className="text-4xl font-bold text-[#071b36]"> Jiber in <span className="ml-2 inline-block h-12 w-36 rounded-lg bg-purple-500 align-middle">Action</span> </h1>
        <h2 className="mt-2 text-4xl font-bold text-[#071b36]"> Simple. Fast. Powerful </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-4 gap-16">

       
       
        <div className="text">
          <div className="mx-auto flex h-[122px] w-[122px] items-center justify-center rounded-[24px] bg-[#f3f1ff]">
            
            <img
              src={action1}
              alt="action1"
              className="h-[100px] w-[100px] object-contain"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold leading-7 text-[#071b36]">
            Settle Up <br /> with Friends
          </h3>  
        </div>



        <div className="text">
          <div className="mx-auto flex h-[122px] w-[122px] items-center justify-center rounded-[24px] bg-[#f3f1ff]">
            <img
              src={action2}
              alt="Support your favorite creators"
              className="h-[100px] w-[100px] object-contain"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold leading-7 text-[#071b36]">
            Support Your Favorite <br /> Creators
          </h3>
        </div>



        <div className="text">
          <div className="mx-auto flex h-[122px] w-[122px] items-center justify-center rounded-[24px] bg-[#f3f1ff]">
            <img
              src={action3}
              alt="Unlock new revenue streams"
              className="h-[100px] w-[100px] object-contain"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold leading-7 text-[#071b36]">
            Unlock New Revenue <br /> Streams
          </h3>
        </div>



        <div className="text">
          <div className="mx-auto flex h-[122px] w-[122px] items-center justify-center rounded-[24px] bg-[#f3f1ff]">
            <img
              src={action4}
              alt="Spend your earnings anywhere"
              className="h-[100px] w-[100px] object-contain"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold leading-7 text-[#071b36]">
            Spend Your Earnings <br />Anywhere
          </h3>
        </div>

      </div>
    </main>
  );
}