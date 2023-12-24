import React from "react";
import { FaBox } from "react-icons/fa";

export default function Tokenomics() {
   return (
      <div className="tk flex items-center min-h-screen relative">
         <div className="bg-wrap col-12 min-h-screen py-3 ">
            <div className="container">
               <div className="col-md-6 mx-auto">
                  <div className="wrap">
                     <div className="heading text-center py-3">
                        <span className="font-extrabold text-3xl">
                           The Soul of Hanzo
                        </span>
                     </div>

                     {/* Percentage */}

                     <div className="flex rounded-3xl overflow-hidden my-5 mb-3">
                        <div className="box1 relative bg-pri h-[50px] w-[10%]"></div>
                        <div className="box2 relative bg-hanzu-yellow h-[50px] w-[90%]"></div>
                     </div>

                     <div className="percent mb-5">
                        <div className="flex font-bold px-4">
                           <div className="wrap col flex gap-4">
                              <FaBox className="text-pri" />{" "}
                              <span>10% Marketing</span>
                           </div>
                           <div className="wrap col flex gap-4">
                              <FaBox className="text-hanzu-yellow" />{" "}
                              <span>90% Liquidity Pool</span>
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        {/* Ticker */}
                        <div className="rounded-xl bg-black text-center text-hanzu-yellow p-4 leading-8">
                           <span className="font-bold">Ticker</span> <br />
                           <span className="font-thin">Hanzo</span>
                        </div>

                        {/* Name */}
                        <div className="rounded-xl bg-black text-center text-hanzu-yellow p-4 leading-8">
                           <span className="font-bold">Name</span> <br />
                           <span className="font-thin">Hattori Hanzo</span>
                        </div>

                        {/* Token Supply */}
                        <div className="rounded-xl bg-black text-center text-hanzu-yellow p-4 leading-8 col-span-2">
                           <span className="font-bold">Token Supply</span>{" "}
                           <br />
                           <span className="font-thin">
                              1 Billion - each one a silent whisper of power.
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Caption */}
               <div className="text-wrap mt-36 mx-auto">
                  .
                  <div className="absolute bottom-0 left-0 right-0 mb-5">
                     <div className="col-lg-6 mx-auto text-center">
                        <span className="text-sm text-white">
                           90% Liquidity Pool (LP): As deep and mysterious as
                           the ocean, ensuring unwavering stability. 10%
                           Marketing: The drumbeat of our war cry, echoing
                           through the crypto valleys.
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
