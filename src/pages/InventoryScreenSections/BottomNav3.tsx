import React from "react";
import { Link } from "react-router-dom";

// Import all images using Vite's static imports
import elementHga from "@/static/img/9athga-12.png";
import iconCoke from "@/static/img/icon-57.png";
import iconWeed from "@/static/img/icon-58.png";
import iconEnergy from "@/static/img/icon-50.svg";
import notificationIcon from "@/static/img/xthfgl-10.png";
import unionYou from "@/static/img/union-13.svg";
import layerMarket from "@/static/img/layer-1.svg";
import layerProduce from "@/static/img/layer-1-19.svg";
import iconMap from "@/static/img/icon-46.svg";
import iconRaid from "@/static/img/icon-47.svg";
import type { JSX } from "react";

export const BottomNav3 = (): JSX.Element => {
  return (
    <div className="md:relative md:w-auto md:h-20 md:top-0 md:left-0 w-full min-w-[390px] bg-black">
      {/* Top stats bar - Hide on desktop */}
      <div className="md:hidden bg-gradient-to-b from-[#303030] to-[#1b1b1b] border-b border-black w-full py-2">
        <div className="flex items-center gap-1 justify-end px-4">
          {/* Balance - Gray gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              $120.64
            </div>
          </div>

          {/* Respect - Blue gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border-none rounded gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img
              className="h-[14px] w-[11px] relative z-10"
              alt="Element hga"
              src={elementHga}
            />
            <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              100
            </div>
          </div>

          {/* Coke - Black to gray gradient */}
          <div className="flex items-center bg-gradient-to-b from-black to-[#8992a5] border-none rounded gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img className="h-[13px] w-[11px] relative z-10" alt="Icon" src={iconCoke} />
            <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              10
            </div>
          </div>

          {/* Weed - Green gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border-none rounded gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img className="h-[13px] w-[12px] relative z-10" alt="Icon" src={iconWeed} />
            <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              20
            </div>
          </div>

          {/* Energy/Capacity - Gray gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img
              className="h-[11px] w-[11px] relative z-10"
              alt="Icon"
              src={iconEnergy}
            />
            <div className="font-['Roboto_Condensed'] text-sm font-bold tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              <span className="text-white">30</span>
              <span className="text-[#aaaaaa]">/70</span>
            </div>
          </div>
        </div>

        {/* Notification icon - Hide on desktop */}
        <div className="md:hidden absolute left-4 top-0 transform -translate-y-2">
          <div className="relative">
            <div className="bg-gradient-to-b from-black to-[#414141] border-none rounded-full h-12 w-12 flex items-center justify-center overflow-hidden relative before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
              <div className="transform rotate-180 relative z-10">
                <img
                  className="h-5 w-4 transform -rotate-180"
                  alt="Notification"
                  src={notificationIcon}
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-black to-[#414141] border-none rounded-full h-5 w-5 absolute -top-1 -right-1 flex items-center justify-center relative before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
              <div className="font-['Roboto_Condensed'] text-xs font-semibold text-[#ffaa22] tracking-0 leading-normal relative z-10">
                2
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="md:w-auto md:relative md:top-0 md:left-0 bg-black w-full min-w-[390px]">
        <div className="w-full px-2 py-2">
          <div className="flex items-center justify-between w-full">
            {/* YOU - Active */}
            <Link className="bg-gradient-to-b from-[#1c1c1c] to-black border-r border-transparent h-16 flex-1 flex flex-col items-center justify-center" to="/player/inventory" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <img
                className="h-8 w-8 mb-1"
                alt="Union"
                src={unionYou}
              />
              <div className="font-['Roboto_Condensed'] text-xs font-black text-white tracking-0 leading-normal whitespace-nowrap">
                YOU
              </div>
            </Link>

            {/* MARKET */}
            <Link className="border-r border-transparent h-16 flex-1 flex flex-col items-center justify-center" to="/market" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <img className="h-8 w-8 mb-1" alt="Layer" src={layerMarket} />
              <div className="font-['Roboto_Condensed'] text-xs font-black text-[#aaaaaa] tracking-0 leading-normal whitespace-nowrap">
                MARKET
              </div>
            </Link>

            {/* PRODUCE */}
            <Link className="border-r border-transparent h-16 flex-1 flex flex-col items-center justify-center" to="/production" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <img
                className="h-8 w-8 mb-1"
                alt="Layer"
                src={layerProduce}
              />
              <div className="font-['Roboto_Condensed'] text-xs font-black text-[#aaaaaa] tracking-0 leading-normal whitespace-nowrap">
                PRODUCE
              </div>
            </Link>

            {/* MAP */}
            <Link className="border-r border-transparent h-16 flex-1 flex flex-col items-center justify-center" to="/map" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <img className="h-8 w-8 mb-1" alt="Icon" src={iconMap} />
              <div className="font-['Roboto_Condensed'] text-xs font-black text-[#aaaaaa] tracking-0 leading-normal whitespace-nowrap">
                MAP
              </div>
            </Link>

            {/* RAID */}
            <Link className="h-16 flex-1 flex flex-col items-center justify-center" to="/raid">
              <img className="h-8 w-8 mb-1" alt="Icon" src={iconRaid} />
              <div className="font-['Roboto_Condensed'] text-xs font-black text-[#aaaaaa] tracking-0 leading-normal whitespace-nowrap">
                RAID
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};