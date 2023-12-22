import React from "react";

export default function Intro() {
   return (
      <div className="intro bg-black text-neutral-100 py-32">
         <div className="container  mx-auto text-center">
            <div className="text-wrap">
               <span className="text-3xl text-ninja">WELCOME TO</span> <br />
               <span className="sm:text-9xl text-8xl "> $<span className="text-ninja">HANZO</span></span>
            </div>
            <div className="text-wrap ">
               <span className="font-bold text-3xl text-pri">
                  The Way of The Degen
               </span>{" "}
               <br />
               <span className=" text-hanzu-yellow text-sm">
                  Named after Hattori Hanzo, the Greatest Ninja of All-Time
               </span>
            </div>
         </div>
      </div>
   );
}
