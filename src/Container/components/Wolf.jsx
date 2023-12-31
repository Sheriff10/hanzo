import React from "react";
import { useInView } from "react-intersection-observer";

export default function Wolf() {
   // first container
   const [ref1, inView1] = useInView({ threshold: 0.3 });
   const [ref2, inView2] = useInView({ threshold: 0.3 });

   //second container
   const [ref3, inView3] = useInView({ threshold: 0.3 });

   return (
      <div className="bg-black py-10">
         <div className="wolf-bg">
            <div className="wolf-bg-grad">
               <div className="container my-10">
                  <div className="flex justify-between items-center">
                     <div className="text-wrap col">
                        <div
                           ref={ref2}
                           className={`flex justify-center ${
                              inView2 ? "fade-in-left" : "fade-out"
                           }`}
                        >
                           <div className="msg bg-black w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex items-center justify-center md:p-3 p-7 rounded-circle text-white border-2 border-hanzu-yellow">
                              "In the shadows of the blockchain, we strike not
                              just with precision, but with a wild heart." -
                              Hattori Hanzo
                           </div>
                        </div>
                     </div>
                     <div className="img-wrap flex justify-end">
                        <img
                           src="/asset/wolf1.png"
                           alt="Wolf"
                           className={`w-[500px] ${
                              inView1 ? "fade-in-right" : "fade-out"
                           }`}
                           ref={ref1}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            ref={ref3}
            className={`container mx-auto text-center py-16 ${
               inView3 ? "fade-in" : "fade-out"
            }`}
         >
            <div className="col-md-6 mx-auto">
               <div
                  className={`heading text-hanzu-yellow font-bold text-2xl text-center`}
               >
                  <span>Embrace the Blade - $HANZO Token</span>
               </div>
               <div className="text-wrap my-4">
                  <span className="text-sm text-white">
                     In the silent whispers of the blockchain, a new shuriken is
                     forged. Behold, HANZO, the token with the spirit of a
                     ninja. Inspired by the legendary Hattori Hanzo, this token
                     is a symbol of strategy, precision, and stealth.{" "}
                  </span>
               </div>
               <div className="text-wrap font-bold text-xl text-pri">
                  <span>
                     Designed for those who move silently but trade fiercely in
                     the crypto world.
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
