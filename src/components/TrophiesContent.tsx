import React from "react";
import type { JSX } from "react";

export const TrophiesContent = (): JSX.Element => {
  return (
    <div className="font-['Roboto_Condensed'] h-[439px] overflow-hidden overflow-y-scroll flex w-full h-full align-center justify-center scrollbar-hide">
      <div className="h-[469px] relative top-4 w-[362px]">
        <div className="bg-gradient-to-b from-[#666666] to-[#454545] border border-[#666666] rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[200px] left-0 overflow-hidden absolute top-0 w-[361px] flex items-center justify-center">
          <div className="text-white font-[Bangers] text-2xl">
            TROPHIES COMING SOON
          </div>
        </div>
      </div>
    </div>
  );
};