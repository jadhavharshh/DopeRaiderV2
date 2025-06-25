import React from "react";
import type { JSX } from "react";

// Import images using Vite's static imports
import athga11Png from "@/static/img/9athga-11.png";
import vector38Svg from "@/static/img/vector-38.svg";
import vector39Svg from "@/static/img/vector-39.svg";

export const FriendsSection = (): JSX.Element => {
  return (
    <div className="flex-none w-full rounded-lg bg-[#262626] px-4 py-3 shadow-sm"> {/* Removed mb-2 */}
      <div className="flex items-center justify-between w-full">
        {/* Left side - Icon and FRIENDS text */}
        <div className="flex items-center gap-3">

          <div className="text-white font-['Roboto_Condensed'] text-lg font-bold tracking-[0] leading-normal whitespace-nowrap">
            FRIENDS
          </div>
        </div>
        {/* Right side - Action buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gradient-to-b from-[#95a9cd] to-[#666666] border border-white/10 rounded-full h-8 w-8">
            <img
              className="h-4 w-4"
              alt="Element hga"
              src={athga11Png}
            />
          </div>
          <div className="flex items-center justify-center bg-gradient-to-b from-[#95a9cd] to-[#666666] border border-white/10 rounded-full h-8 w-8">
            <img
              className="h-4 w-4"
              alt="Element hga"
              src={vector38Svg}
            />
          </div>
          <div className="flex items-center justify-center bg-gradient-to-b from-[#95a9cd] to-[#666666] border border-white/10 rounded-full h-8 w-8">
            <img
              className="h-4 w-4"
              alt="Vector"
              src={vector39Svg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};