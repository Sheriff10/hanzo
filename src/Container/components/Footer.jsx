import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
   const iconFunc = (icons, link) => {
      return { icons, link };
   };
   const iconArr = [
      iconFunc(<FaTwitter /> , "https://twitter.com/HanzoINJ"),
      iconFunc(<FaTelegram />, "https://t.me/HanzoInj"),
   ];
   return (
      <div className="bg-black">
         <div className="flex container justify-between items-center pt-16 px-md-5 pb-4">
            <div className="logo-wrap">
               <img src="/asset/logotext.png" alt="Hanzo" />
            </div>
            <div className="icon-wrap flex justify-end gap-3">
               {iconArr.map((i, index) => (
                  <a href={i.link} target="_blank" className="text-md text-white" key={index}>
                     {i.icons}
                  </a>
               ))}
            </div>
         </div>
      </div>
   );
}
