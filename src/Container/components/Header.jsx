import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const navigation = [
      { name: "Twitter", href: "#" },
      { name: "Telegram", href: "#" },
      { name: "Solscan", href: "#" },
      { name: "Etherscan", href: "#" },
   ];
   //    const navi = useNavigate();

   return (
      <header className="absolute inset-x-0 top-0 z-50 text-gray-900 shadow bg-black">
         <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
         >
            <div className="flex lg:flex-1">
               <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                     className="h-8 w-auto"
                     src="/asset/logotext.png"
                     alt=""
                  />
               </a>
            </div>
            <div className="flex lg:hidden">
               <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
               >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
               </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
               {navigation.map((item) => (
                  <a
                     key={item.name}
                     href={item.href}
                     className="text-sm  leading-6 text-neutral-200"
                  >
                     {item.name}
                  </a>
               ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white btn bg-pri rounded-3xl p-1 px-3"
                  //   onClick={() => navi("/auth/login")}
               >
                  Buy Now <span aria-hidden="true">&rarr;</span>
               </a>
            </div>
         </nav>

         <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
         >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
               <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                     <span className="sr-only">Your Company</span>
                     <img
                        className="h-8 w-auto"
                        src="/asset/logotext.png"
                        alt=""
                     />
                  </a>
                  <button
                     type="button"
                     className="-m-2.5 rounded-md p-2.5 text-neutral-100"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     <span className="sr-only">Close menu</span>
                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
               </div>
               <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-300/10">
                     <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                           <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:text-gray-50 hover:bg-pri hover:bg-opacity-30"
                           >
                              {item.name}
                           </a>
                        ))}
                     </div>
                     <div className="py-6">
                        <a
                           href="#"
                           className="-mx-3 btn bg-pri text-center  block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                           //    onClick={() => navi("/auth/login")}
                        >
                           Buy Now
                        </a>
                     </div>
                  </div>
               </div>
            </Dialog.Panel>
         </Dialog>
      </header>
   );
}
