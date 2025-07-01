import React from "react";
import type { JSX } from "react";

// Import images using Vite's way
import TeleImg from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-11.png";
import organicGrunge25Svg from "@/static/img/organic-grunge-bold-shapes-25.svg";
import vector40Svg from "@/static/img/vector-40.svg";
import vector41Svg from "@/static/img/vector-41.svg";
import group10Png from "@/static/img/group-10.png";
import organicGrunge26Svg from "@/static/img/organic-grunge-bold-shapes-26.svg";
import polygon26Svg from "@/static/img/polygon-2-6.svg";
import og1Svg from "@/static/img/og-1.svg";
import GreenSvg from "@/static/img/polygon-2.svg"
// Import stats bar images
import elementHga from "@/static/img/9athga-12.png";
import iconCoke from "@/static/img/icon-57.png";
import iconWeed from "@/static/img/icon-58.png";
import iconEnergy from "@/static/img/icon-50.svg";
import notificationIcon from "@/static/img/xthfgl-10.png";

// Import the new RaidStatsDisplay component
import { RaidStatsDisplay } from "@/mini-components/RaidStatsDisplay";

export const TopWrapper = ({ onNotificationClick }: { onNotificationClick?: () => void }): JSX.Element => {
  return (
    <>
      {/* Mobile Layout - Responsive width with centered content */}
      <div className="md:hidden bg-gradient-to-b from-[#303030] to-black border-b border-black h-[260px] w-full min-w-[390px] flex items-center justify-center relative">
        {/* Container to center the 393px content */}
        <div className="relative w-[393px] h-full">
          <div className="h-[119px] left-[200px] absolute top-[90px] w-[149px]">
            <div 
              className="h-6 left-0 absolute top-7 w-[147px] bg-cover bg-center"
              style={{ backgroundImage: `url(${organicGrunge25Svg})` }}
            >
              <div className="flex items-center gap-2 left-4 relative top-0.5">
                <div className="h-5 relative w-5">
                  <div 
                    className="h-[13px] relative top-[3px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${vector40Svg})` }}
                  >
                    <img
                      className="h-[13px] left-0 absolute top-0 w-5"
                      alt="Vector"
                      src={vector41Svg}
                    />

                    <img className="h-[11px] left-0 absolute top-[1px] w-5" alt="Group" src={group10Png} />
                  </div>
                </div>

                <div className="text-white font-[Bangers] text-base font-normal tracking-[0.32px] leading-normal relative text-center whitespace-nowrap w-fit">
                  JAMAICA VILLAGE
                </div>
              </div>
            </div>

            {/* Replace the existing raid stats section with the new component */}
            <div className="absolute top-14 left-[11px]">
              <RaidStatsDisplay 
                raids={5} 
                wins={3} 
                losses={2} 
                className="scale-50 origin-top-left"
              />
            </div>

            <div className="text-white font-[Bangers] text-2xl font-normal left-[53px] tracking-[0.24px] leading-normal absolute text-center top-0 whitespace-nowrap">
              RADA
            </div>
          </div>

          <div className="h-[133px] left-[26px] absolute top-[82px] w-[144px]">
            <div className="h-9 left-[92px] absolute top-0 w-9" />

            <div className="rounded-[160px] shadow-[0px_4px_8px_rgba(0,0,0,0.1),0px_14px_14px_rgba(0,0,0,0.09),0px_32px_19px_rgba(0,0,0,0.05),0px_56px_23px_rgba(0,0,0,0.01),0px_88px_25px_transparent] h-32 left-0 overflow-hidden absolute top-[1px] w-32">
              <img
                className="h-32 left-0 object-cover absolute top-0 w-32"
                alt="Telegram peer photo"
                src={TeleImg}
              />
            </div>

            <img
              className="h-6 left-[2px] absolute top-[109px] w-[123px]"
              alt="Organic grunge bold"
              src={organicGrunge26Svg}
            />

            <div className="text-[#aeaeae] font-['Roboto_Condensed'] text-[10px] font-bold left-[14px] tracking-0 leading-normal absolute top-[115px] whitespace-nowrap">
              MEMBER SINCE MAY '25
            </div>

            <div className="h-[38px] left-[106px] absolute top-[78px] w-[38px]">
              <div 
                className="h-[37px] left-[3px] relative w-[33px] bg-cover bg-center"
                style={{ backgroundImage: `url(${polygon26Svg})` }}
              >
                {/* Green SVG as background - positioned first to be behind */}
                <img className="h-[30px] left-[1px] absolute top-1 w-[30px] z-10" alt="Green Background" src={GreenSvg} />
                {/* OG SVG on top */}
                <img className="h-[23px] left-[2px] absolute top-3 w-7 z-20" alt="Og" src={og1Svg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Glass Morphic Container with unified background */}
      <div className="hidden md:block w-[393px] h-auto bg-black/20 backdrop-blur-sm rounded-lg border border-gray-600/20 overflow-hidden">
        {/* Single unified background container */}
        <div className="bg-gradient-to-b from-[#303030] to-black">
          {/* Original TopWrapper Content */}
          <div className="border-b border-black h-[220px] w-[393px] flex items-center justify-center relative">
            <div className="h-[119px] left-[200px] absolute top-[50px] w-[149px]">
              <div 
                className="h-6 left-0 absolute top-7 w-[147px] bg-cover bg-center"
                style={{ backgroundImage: `url(${organicGrunge25Svg})` }}
              >
                <div className="flex items-center gap-2 left-4 relative top-0.5">
                  <div className="h-5 relative w-5">
                    <div 
                      className="h-[13px] relative top-[3px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${vector40Svg})` }}
                    >
                      <img
                        className="h-[13px] left-0 absolute top-0 w-5"
                        alt="Vector"
                        src={vector41Svg}
                      />

                      <img className="h-[11px] left-0 absolute top-[1px] w-5" alt="Group" src={group10Png} />
                    </div>
                  </div>

                  <div className="text-white font-[Bangers] text-base font-normal tracking-[0.32px] leading-normal relative text-center whitespace-nowrap w-fit">
                    JAMAICA VILLAGE
                  </div>
                </div>
              </div>

              {/* Replace the existing raid stats section with the new component */}
              <div className="absolute top-14 left-[11px]">
                <RaidStatsDisplay 
                  raids={5} 
                  wins={3} 
                  losses={2} 
                  className="scale-50 origin-top-left"
                />
              </div>

              <div className="text-white font-[Bangers] text-2xl font-normal left-[53px] tracking-[0.24px] leading-normal absolute text-center top-0 whitespace-nowrap">
                RADA
              </div>
            </div>

            <div className="h-[133px] left-[26px] absolute top-[40px] w-[144px]">
              <div className="h-9 left-[92px] absolute top-0 w-9" />

              <div className="rounded-[160px] shadow-[0px_4px_8px_rgba(0,0,0,0.1),0px_14px_14px_rgba(0,0,0,0.09),0px_32px_19px_rgba(0,0,0,0.05),0px_56px_23px_rgba(0,0,0,0.01),0px_88px_25px_transparent] h-32 left-0 overflow-hidden absolute top-[1px] w-32">
                <img
                  className="h-32 left-0 object-cover absolute top-0 w-32"
                  alt="Telegram peer photo"
                  src={TeleImg}
                />
              </div>

              <img
                className="h-6 left-[2px] absolute top-[109px] w-[123px]"
                alt="Organic grunge bold"
                src={organicGrunge26Svg}
              />

              <div className="text-[#aeaeae] font-['Roboto_Condensed'] text-[10px] font-bold left-[14px] tracking-0 leading-normal absolute top-[115px] whitespace-nowrap">
                MEMBER SINCE MAY '25
              </div>

              <div className="h-[38px] left-[106px] absolute top-[78px] w-[38px]">
                <div 
                  className="h-[37px] left-[3px] relative w-[33px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${polygon26Svg})` }}
                >
                  {/* Green SVG as background - positioned first to be behind */}
                  <img className="h-[30px] left-[1px] absolute top-1 w-[30px] z-10" alt="Green Background" src={GreenSvg} />
                  {/* OG SVG on top */}
                  <img className="h-[23px] left-[2px] absolute top-3 w-7 z-20" alt="Og" src={og1Svg} />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Stats Bar at Bottom - Now shares the same background */}
          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              {/* Notification icon */}
              <div className="h-[35px] w-[35px] relative" onClick={onNotificationClick}>
                <div className="bg-gradient-to-b from-black to-[#414141] border-none rounded-[74px] h-[33px] w-[33px] flex items-center justify-center overflow-hidden relative before:absolute before:inset-0 before:rounded-[74px] before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
                  <div className="h-[15px] w-3 transform rotate-180 relative z-10">
                    <img
                      className="h-[15px] w-3 transform -rotate-180"
                      alt="Notification"
                      src={notificationIcon}
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-b from-black to-[#414141] border-none rounded-[74px] h-4 w-4 absolute -top-1 -right-1 flex items-center justify-center relative before:absolute before:inset-0 before:rounded-[74px] before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
                  <div className="font-['Roboto_Condensed'] text-[10px] font-semibold text-[#ffaa22] tracking-0 leading-normal relative z-10">
                    2
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-1">
                {/* Balance */}
                <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-1 h-7 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
                  <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
                    $120.64
                  </div>
                </div>

                {/* Respect */}
                <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border-none rounded gap-1 h-7 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
                  <img
                    className="h-[12px] w-[9px] relative z-10"
                    alt="Element hga"
                    src={elementHga}
                  />
                  <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
                    100
                  </div>
                </div>

                {/* Coke */}
                <div className="flex items-center bg-gradient-to-b from-black to-[#8992a5] border-none rounded gap-1 h-7 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
                  <img className="h-[13px] w-[11px] relative z-10" alt="Icon" src={iconCoke} />
                  <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
                    10
                  </div>
                </div>

                {/* Weed */}
                <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border-none rounded gap-1 h-7 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
                  <img className="h-[13px] w-[12px] relative z-10" alt="Icon" src={iconWeed} />
                  <div className="font-['Roboto_Condensed'] text-sm font-bold text-white tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
                    20
                  </div>
                </div>

                {/* Energy */}
                <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-1 h-7 py-1 px-2 relative overflow-hidden before:absolute before:inset-0 before:rounded before:p-[1px] before:bg-gradient-to-b before:from-black before:to-[#666666] before:mask-composite-exclude before:pointer-events-none before:z-[1]">
                  <img
                    className="h-[11px] w-3 relative z-10"
                    alt="Icon"
                    src={iconEnergy}
                  />
                  <div className="font-['Roboto_Condensed'] text-sm font-bold tracking-0 leading-normal text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap relative z-10">
                    <span className="text-white">30</span>
                    <span className="text-[#aaaaaa]">/70</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};