import React from "react";

export default function Wolf() {
   return (
      <div className="bg-black py-10">
         <div className="wolf-bg">
            <div className="wolf-bg-grad">
               <div className="container my-10">
                  <div className="flex justify-between items-center">
                     <div className="text-wrap col">
                        <div className="flex justify-center">
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
                           className="w-[500px]"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container mx-auto py-8 text-center">
            <div className="col-md-6 mx-auto">
               <div className="heading text-hanzu-yellow font-bold text-xl text-center">
                  <span>Embrace the Blade - $HANZO Token</span>
               </div>

               <div className="text-wrap my-3">
                  <span className="text-sm text-white">
                     In the silent whispers of the blockchain, a new shuriken is
                     forged. Behold, HANZO, the token with the spirit of a
                     ninja. Inspired by the legendary Hattori Hanzo, this token
                     is a symbol of strategy, precision, and stealth.{" "}
                  </span>
               </div>

               <div className="text-wrap font-bold text-lg text-pri">
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
