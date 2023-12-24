import React, { useState, useEffect } from "react";

export default function Intro() {
   const [hasFadedIn, setHasFadedIn] = useState(false);
   const [fadedIn, setFadedIn] = useState(false);

   useEffect(() => {
      // Check if the fading effect has not occurred yet
      if (!hasFadedIn) {
         // Add the class after a short delay (you can adjust the delay as needed)
         setTimeout(() => {
            setHasFadedIn(true);
            setFadedIn(true);
         }, 700); // 500 milliseconds delay
      }
   }, [hasFadedIn]);

   return (
      <div className="intro bg-black text-neutral-100">
         <div className="bg-wrap min-h-[80vh] flex items-center justify-center py-32">
            <div className="container mx-auto text-center">
               <div
                  className={`text-wrap ${
                     hasFadedIn ? "fade-in-left" : "fade-out"
                  }`}
               >
                  <span className="text-3xl text-ninja">WELCOME TO</span> <br />
                  <span className="sm:text-9xl text-8xl ">
                     {" "}
                     <span className="text-ninja2">$</span>
                     <span className="text-ninja">HANZO</span>
                  </span>
               </div>
               <div className="text-wrap">
                  <span
                     className={`font-bold text-3xl text-pri text-ninja2 ${
                        fadedIn ? "fade-in" : "fade-out"
                     }`}
                  >
                     The Way of The Degen
                  </span>{" "}
                  <br />
                  <span
                     className={`text-hanzu-yellow text-sm text-ninja2 test ${
                        fadedIn ? "fade-in" : "fade-out"
                     }`}
                  >
                     Named after Hattori Hanzo, the Greatest Ninja of All-Time
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
