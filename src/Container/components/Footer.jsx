import React from "react";

export default function Footer() {
   const iconFunc = (icons, link) => {
      return { icons, link };
   };
   const iconArr = [
      iconFunc("/asset/x.png", ""),
      iconFunc("/asset/tg.svg", "#"),
      iconFunc("/asset/ethscan.png", "#"),
      iconFunc("/asset/solscan.png", "#"),
   ];
   return (
      <div className="bg-black">
         <div className="flex container justify-between items-center pt-16 px-md-5 pb-4">
            <div className="logo-wrap">
               <img src="/asset/logotext.png" alt="Hanzo" />
            </div>
            <div className="icon-wrap flex justify-end gap-3">
               {iconArr.map((i, index) => (
                  <a href={i.link} target="_blank" key={index}>
                     <img src={i.icons} alt="" width={20} />
                  </a>
               ))}
            </div>
         </div>
      </div>
   );
}
