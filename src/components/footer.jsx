import React from "react";

export default function footer()
  {
return(
   <footer className="border-t border-slate-200 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-pink-500 text-sm font-bold text-white">
                j
              </div>
              <span className="text-xl font-bold text-slate-900">Jiber</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <a href="#">Messaging</a>
              <a href="#">Payments</a>
              <a href="#">Monetization</a>
              <a href="#">FAQ</a>
            </div>

            <div className="text-sm text-slate-500">contact@jiber.app</div>
          </div>
        </footer>
);
  }