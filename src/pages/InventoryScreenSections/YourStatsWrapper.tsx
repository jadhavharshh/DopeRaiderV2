import React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

export const YourStatsWrapper = (): JSX.Element => {
  return (
    <div className="md:border-none md:h-auto md:relative md:top-0 md:left-0 md:w-full border-b border-black h-[43px] left-0 absolute top-[250px] w-[393px]">
      <div className="md:flex md:items-center md:gap-6 md:left-0 md:relative md:top-0 md:w-full md:px-4 md:py-3 flex items-center gap-6 left-[22px] absolute top-3 w-[349px]">
        <div className="font-[Bangers] text-[22px] font-normal text-white tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit">
          INVENTORY
        </div>

        <Link
          className="font-[Bangers] text-[22px] font-normal text-[#aeaeae] tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit hover:text-white transition-colors"
          to="/player/upgrades"
        >
          UPGRADES
        </Link>

        <Link
          className="font-[Bangers] text-[22px] font-normal text-[#aeaeae] tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit hover:text-white transition-colors"
          to="/player/social"
        >
          SOCIAL
        </Link>

        <Link
          className="font-[Bangers] text-[22px] font-normal text-[#aeaeae] tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit hover:text-white transition-colors"
          to="/player/trophies"
        >
          TROPHIES
        </Link>
      </div>

      <div className="md:left-4 md:relative md:top-0 bg-[#ffaa22] h-[3px] left-[22px] absolute top-10 w-[77px]" />
    </div>
  );
};