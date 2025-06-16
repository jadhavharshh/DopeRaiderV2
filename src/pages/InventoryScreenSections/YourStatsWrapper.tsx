import React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

export const YourStatsWrapper = (): JSX.Element => {
  return (
    <div className="border-b border-black h-[43px] left-0 absolute top-[250px] w-[393px]">
      <div className="flex items-center gap-6 left-[22px] absolute top-3 w-[349px]">
        <div className="font-[Bangers] text-[22px] font-normal text-white tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit">
          INVENTORY
        </div>

        <Link
          className="font-[Bangers] text-[22px] font-normal text-[#aeaeae] tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit"
          to="/doperaider-u8212-you-u8212-upgrades2"
        >
          UPGRADES
        </Link>

        <Link
          className="font-[Bangers] text-[22px] font-normal text-[#aeaeae] tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit"
          to="/doperaider-u8212-you-u8212-upgrades"
        >
          SOCIAL
        </Link>

        <Link
          className="font-[Bangers] text-[22px] font-normal text-[#aeaeae] tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit"
          to="/doperaider-u8212-you-u8212-trophies"
        >
          TROPHIES
        </Link>
      </div>

      <div className="bg-[#ffaa22] h-[3px] left-[22px] absolute top-10 w-[77px]" />
    </div>
  );
};