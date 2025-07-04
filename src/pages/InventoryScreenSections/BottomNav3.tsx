import React from "react";
import { Link, useLocation } from "react-router-dom";

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

export const BottomNav3 = ({ onNotificationClick }: { onNotificationClick?: () => void }): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className="md:relative md:w-full md:h-20 md:top-0 md:left-0 w-full bg-black">
      {/* Top stats bar - Hide on desktop */}
      <div className="md:hidden bg-gradient-to-b from-[#303030] to-[#1b1b1b] border-b border-black w-full py-2">
        <div className="flex items-center gap-0.5 justify-end px-2">
          {/* Balance - Gray gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-1 h-8 py-1 px-1.5 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              $120.64
            </div>
          </div>

          {/* Respect - Blue gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border-none rounded gap-1 h-8 py-1 px-1.5 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
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
          <div className="flex items-center bg-gradient-to-b from-black to-[#8992a5] border-none rounded gap-1 h-8 py-1 px-1.5 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img className="h-[13px] w-[11px] relative z-10" alt="Icon" src={iconCoke} />
            <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              10
            </div>
          </div>

          {/* Weed - Green gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border-none rounded gap-1 h-8 py-1 px-1.5 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img className="h-[13px] w-[12px] relative z-10" alt="Icon" src={iconWeed} />
            <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              20
            </div>
          </div>

          {/* Energy/Capacity - Gray gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-1 h-8 py-1 px-1.5 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
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
        <div className="md:hidden absolute left-4 top-0 transform -translate-y-2" onClick={onNotificationClick}>
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

      {/* Bottom navigation - Full width */}
      <div className="md:w-full md:relative md:top-0 md:left-0 bg-black w-full">
        <div className="w-full pb-2">
          <div className="flex items-center justify-between md:justify-center w-full">
            {/* YOU */}
            <Link 
              className={`h-16 md:h-20 flex-1 md:flex-none md:w-24 flex flex-col items-center justify-center border-r md:border-r-0 border-transparent ${pathname.startsWith("/player") ? "bg-gradient-to-b from-[#1c1c1c] to-black" : ""}`} 
              to="/player/inventory" 
              style={{
                borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
                borderRightStyle: 'solid',
                borderRightWidth: '1px'
              }}
            >
              <img
                className={`h-7 w-7 md:h-10 md:w-10 mb-1 md:mb-2 ${pathname.startsWith("/player") ? "brightness-125 contrast-125" : "brightness-75 opacity-75"}`}
                alt="Union"
                src={unionYou}
              />
              <div className={`font-['Roboto_Condensed'] text-xs md:text-sm font-black tracking-0 leading-normal whitespace-nowrap ${pathname.startsWith("/player") ? "text-white" : "text-[#aaaaaa]"}`}>
                YOU
              </div>
            </Link>

            {/* MARKET */}
            <Link 
              className={`h-16 md:h-20 flex-1 md:flex-none md:w-24 flex flex-col items-center justify-center border-r md:border-r-0 border-transparent ${pathname.startsWith("/market") ? "bg-gradient-to-b from-[#1c1c1c] to-black" : ""}`} 
              to="/market" 
              style={{
                borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
                borderRightStyle: 'solid',
                borderRightWidth: '1px'
              }}
            >
              <img className={`h-7 w-7 md:h-10 md:w-10 mb-1 md:mb-2 ${pathname.startsWith("/market") ? "brightness-125 contrast-125" : "brightness-75 opacity-75"}`} alt="Layer" src={layerMarket} />
              <div className={`font-['Roboto_Condensed'] text-xs md:text-sm font-black tracking-0 leading-normal whitespace-nowrap ${pathname.startsWith("/market") ? "text-white" : "text-[#aaaaaa]"}`}>
                MARKET
              </div>
            </Link>

            {/* PRODUCE */}
            <Link 
              className={`h-16 md:h-20 flex-1 md:flex-none md:w-24 flex flex-col items-center justify-center border-r md:border-r-0 border-transparent ${pathname.startsWith("/production") ? "bg-gradient-to-b from-[#1c1c1c] to-black" : ""}`} 
              to="/production" 
              style={{
                borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
                borderRightStyle: 'solid',
                borderRightWidth: '1px'
              }}
            >
              <img
                className={`h-7 w-7 md:h-10 md:w-10 mb-1 md:mb-2 ${pathname.startsWith("/production") ? "brightness-125 contrast-125" : "brightness-75 opacity-75"}`}
                alt="Layer"
                src={layerProduce}
              />
              <div className={`font-['Roboto_Condensed'] text-xs md:text-sm font-black tracking-0 leading-normal whitespace-nowrap ${pathname.startsWith("/production") ? "text-white" : "text-[#aaaaaa]"}`}>
                PRODUCE
              </div>
            </Link>

            {/* MAP */}
            <Link 
              className={`h-16 md:h-20 flex-1 md:flex-none md:w-24 flex flex-col items-center justify-center border-r md:border-r-0 border-transparent ${pathname.startsWith("/map") ? "bg-gradient-to-b from-[#1c1c1c] to-black" : ""}`} 
              to="/map" 
              style={{
                borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
                borderRightStyle: 'solid',
                borderRightWidth: '1px'
              }}
            >
              <img className={`h-7 w-7 md:h-10 md:w-10 mb-1 md:mb-2 ${pathname.startsWith("/map") ? "brightness-125 contrast-125" : "brightness-75 opacity-75"}`} alt="Icon" src={iconMap} />
              <div className={`font-['Roboto_Condensed'] text-xs md:text-sm font-black tracking-0 leading-normal whitespace-nowrap ${pathname.startsWith("/map") ? "text-white" : "text-[#aaaaaa]"}`}>
                MAP
              </div>
            </Link>

            {/* RAID */}
            <Link 
              className={`h-16 md:h-20 flex-1 md:flex-none md:w-24 flex flex-col items-center justify-center ${pathname.startsWith("/raid") ? "bg-gradient-to-b from-[#1c1c1c] to-black" : ""}`} 
              to="/raid"
            >
              <img className={`h-7 w-7 md:h-10 md:w-10 mb-1 md:mb-2 ${pathname.startsWith("/raid") ? "brightness-125 contrast-125" : "brightness-75 opacity-75"}`} alt="Icon" src={iconRaid} />
              <div className={`font-['Roboto_Condensed'] text-xs md:text-sm font-black tracking-0 leading-normal whitespace-nowrap ${pathname.startsWith("/raid") ? "text-white" : "text-[#aaaaaa]"}`}>
                RAID
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};