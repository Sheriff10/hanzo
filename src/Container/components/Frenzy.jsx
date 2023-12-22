import React from "react";

export default function Frenzy() {
   return (
      <div className="bg-black relative overflow-hidden">
         <div className="grid md:grid-cols-2 mt-10">
            <div className="img-wrap">
               <img src="/asset/cloud.png" alt="Hanzo" className="hidden md:block md:absolute w-[300px] bottom-0" />
               <img
                  src="/asset/halfWolf.png"
                  alt="Hanzo"
                  className="md:absolute w-[400px] bottom-0"
               />
            </div>
            <div className="wrap text-cente md:text-right py-4">
               <div className="container px-lg-4">
                  <div className="text-wrap text-white">
                     <span className="text-sm">
                        Ready to join the ranks of the fearless?{" "}
                     </span>{" "}
                     <br />
                     <span className="text-5xl font-extrabold">
                        Join the Frenzy
                     </span>
                  </div>{" "}
                  <br />
                  <div className="text-wrap text-neutral-200">
                     <span>
                        Embrace your inner ninja degen with $HANZO. <br /> Here,
                        you're not just trading; you're on a wild ride!
                     </span>
                  </div>{" "}
                  <br />
                  <div className="btn-wrap">
                     <button className="bg-pri p-2 px-3 font-bold rounded-pill text-white text-lg">
                        Buy Now
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
