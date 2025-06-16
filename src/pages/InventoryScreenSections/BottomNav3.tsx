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

export const BottomNav3 = (): JSX.Element => {
  return (
    <div className="h-[120px] left-0 absolute top-[732px] w-[393px]">
      {/* Top stats bar */}
      <div className="bg-gradient-to-b from-[#303030] to-[#1b1b1b] border-b border-black h-10 left-0 absolute top-0 w-[393px]">
        <div className="flex items-center gap-[2px] justify-end left-20 absolute top-1">
          {/* Balance - Gray gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <div className="font-['Roboto_Condensed'] text-base font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
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
            <div className="font-['Roboto_Condensed'] text-base font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              100
            </div>
          </div>

          {/* Coke - Black to gray gradient */}
          <div className="flex items-center bg-gradient-to-b from-black to-[#8992a5] border-none rounded gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img className="h-[15px] w-[13px] relative z-10" alt="Icon" src={iconCoke} />
            <div className="font-['Roboto_Condensed'] text-base font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              10
            </div>
          </div>

          {/* Weed - Green gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border-none rounded gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img className="h-[15px] w-[14px] relative z-10" alt="Icon" src={iconWeed} />
            <div className="font-['Roboto_Condensed'] text-base font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              20
            </div>
          </div>

          {/* Energy/Capacity - Gray gradient */}
          <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-1 h-8 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
            <img
              className="h-[13px] w-4 relative z-10"
              alt="Icon"
              src={iconEnergy}
            />
            <div className="font-['Roboto_Condensed'] text-base font-bold tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
              <span className="text-white">30</span>
              <span className="text-[#aaaaaa]">/70</span>
            </div>
          </div>
        </div>

        {/* Notification icon */}
        <div className="h-[49px] left-4 absolute top-[-13px] w-[49px]">
          <div className="h-[49px] relative">
            <div className="bg-gradient-to-b from-black to-[#414141] border-none rounded-[74px] h-[47px] left-0 absolute top-[2px] w-[47px] flex items-center justify-center overflow-hidden relative before:absolute before:inset-0 before:rounded-[74px] before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
              <div className="h-[21px] w-4 transform rotate-180 relative z-10">
                <img
                  className="h-[21px] left-0 absolute top-0 transform -rotate-180 w-4"
                  alt="Xt h fgl"
                  src={notificationIcon}
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-black to-[#414141] border-none rounded-[74px] h-5 left-[29px] absolute top-0 w-5 flex items-center justify-center relative before:absolute before:inset-0 before:rounded-[74px] before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
              <div className="font-['Roboto_Condensed'] text-xs font-semibold text-[#ffaa22] tracking-0 leading-normal relative z-10">
                2
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bg-black h-20 left-0 absolute top-10 w-[393px]">
        <div className="h-[61px] left-[15px] relative top-[9px] w-[364px]">
          <div className="flex items-center left-[-15px] relative top-[-9px] w-[393px]">
            {/* YOU - Active */}
            <Link className="bg-gradient-to-b from-[#1c1c1c] to-black border-r border-transparent h-20 relative w-[79px] flex flex-col items-center justify-center" to="/you/inventory" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <div className="font-['Roboto_Condensed'] text-xs font-black text-white left-[29px] tracking-0 leading-normal absolute top-[55px] whitespace-nowrap">
                YOU
              </div>
              <img
                className="h-[34px] left-[22px] absolute top-[15px] w-[35px]"
                alt="Union"
                src={unionYou}
              />
            </Link>

            {/* MARKET */}
            <Link className="border-r border-transparent h-20 relative w-[79px] flex flex-col items-center justify-center" to="/you/market" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <div className="font-['Roboto_Condensed'] text-xs font-black text-[#aaaaaa] left-[18px] tracking-0 leading-normal absolute top-[55px] whitespace-nowrap">
                MARKET
              </div>
              <div className="h-9 left-[21px] absolute top-[13px] w-[37px]">
                <img className="h-[33px] left-0 absolute top-[3px] w-9" alt="Layer" src={layerMarket} />
              </div>
            </Link>

            {/* PRODUCE */}
            <Link className="border-r border-transparent h-20 relative w-[79px] flex flex-col items-center justify-center" to="/you/production" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <div className="font-['Roboto_Condensed'] text-xs font-black text-[#aaaaaa] left-4 tracking-0 leading-normal absolute top-[55px] whitespace-nowrap">
                PRODUCE
              </div>
              <div className="h-[43px] left-[18px] absolute top-[10px] w-11">
                <img
                  className="h-8 left-[2px] absolute top-[6px] w-10"
                  alt="Layer"
                  src={layerProduce}
                />
              </div>
            </Link>

            {/* MAP */}
            <Link className="border-r border-transparent h-20 relative w-[79px] flex flex-col items-center justify-center" to="/you/map" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <div className="font-['Roboto_Condensed'] text-xs font-black text-[#aaaaaa] left-7 tracking-0 leading-normal absolute top-[55px] whitespace-nowrap">
                MAP
              </div>
              <img className="h-[34px] left-[22px] absolute top-[15px] w-[35px]" alt="Icon" src={iconMap} />
            </Link>

            {/* RAID */}
            <div className="border-r border-transparent h-20 -mr-[2px] relative w-[79px] flex flex-col items-center justify-center" style={{
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.43) 100%) 1',
              borderRightStyle: 'solid',
              borderRightWidth: '1px'
            }}>
              <div className="font-['Roboto_Condensed'] text-xs font-black text-[#aaaaaa] left-[27px] tracking-0 leading-normal absolute top-[55px] whitespace-nowrap">
                RAID
              </div>
              <img className="h-[34px] left-[21px] absolute top-[15px] w-[37px]" alt="Icon" src={iconRaid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};