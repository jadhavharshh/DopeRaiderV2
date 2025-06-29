import React from "react";
import { Link } from "react-router-dom";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";
import { TopWrapper } from "./InventoryScreenSections/TopWrapper";
import type { JSX } from "react";

// Import all images using Vite's static imports
import fullMapImg from "@/static/img/image.png"; // Using the larger map image
import athga12Png from "@/static/img/9athga-12.png";
import iconCoke from "@/static/img/icon-57.png";
import iconWeed from "@/static/img/icon-58.png";
import iconEnergy from "@/static/img/icon-6.svg";
import xthfgl6Png from "@/static/img/xthfgl-6.png";
import telegramPeerPhoto from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0.png";
import subtractSvg from "@/static/img/subtract.svg";
import organicGrunge1Svg from "@/static/img/organic-grunge-bold-shapes.svg";
import organicGrunge2Svg from "@/static/img/organic-grunge-bold-shapes-1.svg";
import vector2Svg from "@/static/img/vector-2.svg";
import vector3Svg from "@/static/img/vector-3.svg";
import group10Png from "@/static/img/group-10.png";
import subtract1Svg from "@/static/img/subtract-1.svg";
import organicGrunge3Svg from "@/static/img/organic-grunge-bold-shapes-2.svg";
import organicGrunge4Svg from "@/static/img/organic-grunge-bold-shapes-3.svg";
import element21Svg from "@/static/img/2-1.svg";
import subtract2Svg from "@/static/img/subtract-2.svg";
import organicGrunge5Svg from "@/static/img/organic-grunge-bold-shapes-4.svg";
import organicGrunge6Svg from "@/static/img/organic-grunge-bold-shapes-5.svg";
import element31Svg from "@/static/img/3-1.svg";
import subtract3Svg from "@/static/img/subtract-3.svg";
import organicGrunge7Svg from "@/static/img/organic-grunge-bold-shapes-6.svg";
import organicGrunge8Svg from "@/static/img/organic-grunge-bold-shapes-7.svg";
import element410Svg from "@/static/img/4-10.svg";
import subtract4Svg from "@/static/img/subtract-4.svg";
import organicGrunge9Svg from "@/static/img/organic-grunge-bold-shapes-8.svg";
import organicGrunge10Svg from "@/static/img/organic-grunge-bold-shapes-9.svg";
import vector4Svg from "@/static/img/vector-4.svg";
import group1Png from "@/static/img/group-1.png";
import vector5Svg from "@/static/img/vector-5.svg";
import group2Png from "@/static/img/group-2.png";
import subtract5Svg from "@/static/img/subtract-5.svg";
import organicGrunge11Svg from "@/static/img/organic-grunge-bold-shapes-10.svg";
import organicGrunge12Svg from "@/static/img/organic-grunge-bold-shapes-11.svg";
import element48st4uPng from "@/static/img/4-8st-4u.png";
import subtract6Svg from "@/static/img/subtract-6.svg";
import organicGrunge13Svg from "@/static/img/organic-grunge-bold-shapes-12.svg";
import organicGrunge14Svg from "@/static/img/organic-grunge-bold-shapes-13.svg";
import vector9Svg from "@/static/img/vector-9.svg";
import group4Png from "@/static/img/group-4.png";
import Logo from "@/static/img/logo-1.svg";

export const DoperaiderMap = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden flex items-center justify-center h-screen w-screen">
        <div className="bg-white h-full w-[393px] relative overflow-hidden" data-model-id="412:3173">
          {/* Full Screen Map Background */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${fullMapImg})` }}
          >
            {/* BOTTOM-NAV-6 - Fixed positioning for mobile */}
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[393px] h-[120px] z-50">
              {/* YOUR-STATS-12 */}
              <div className="bg-gradient-to-b from-[#303030] to-[#1b1b1b] border-b border-black h-[40px] left-0 absolute top-0 w-[393px]">
                {/* stats-11 */}
                <div className="flex items-center gap-[2px] justify-end left-[80px] absolute top-[4px]">
                  {/* div-24 (Money) */}
                  <div className="relative flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_#00000040] gap-[4px] h-[32px] overflow-hidden px-[8px] py-[4px]">
                    <div className="absolute inset-0 rounded bg-gradient-to-t from-black to-[#666666] p-[1px] pointer-events-none z-[1]" 
                         style={{
                           WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                           WebkitMaskComposite: "xor",
                           maskComposite: "exclude"
                         }}>
                    </div>
                    <div className="text-white font-['Roboto_Condensed'] text-[16px] font-bold tracking-[0] leading-normal relative text-center drop-shadow-[0px_4px_4px_#00000040] whitespace-nowrap w-fit">
                      $120.64
                    </div>
                  </div>

                  {/* respect-12 */}
                  <div className="relative flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border-none rounded gap-[4px] h-[32px] overflow-hidden px-[8px] py-[4px]">
                    <div className="absolute inset-0 rounded bg-gradient-to-t from-black to-[#666666] p-[1px] pointer-events-none z-[1]" 
                         style={{
                           WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                           WebkitMaskComposite: "xor",
                           maskComposite: "exclude"
                         }}>
                    </div>
                    <div className="h-[14px] relative w-[11px] bg-cover bg-center" 
                         style={{ backgroundImage: `url(${athga12Png})` }}>
                    </div>
                    <div className="text-white font-['Roboto_Condensed'] text-[16px] font-bold tracking-[0] leading-normal relative text-center drop-shadow-[0px_4px_4px_#00000040] whitespace-nowrap w-fit">
                      100
                    </div>
                  </div>

                  {/* coke-13 */}
                  <div className="relative flex items-center bg-gradient-to-b from-black to-[#8992a5] border-none rounded gap-[4px] h-[32px] overflow-hidden px-[8px] py-[4px]">
                    <div className="absolute inset-0 rounded bg-gradient-to-t from-black to-[#666666] p-[1px] pointer-events-none z-[1]" 
                         style={{
                           WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                           WebkitMaskComposite: "xor",
                           maskComposite: "exclude"
                         }}>
                    </div>
                    <img className="h-[15px] relative w-[13px]" alt="Icon" src={iconCoke} />
                    <div className="text-white font-['Roboto_Condensed'] text-[16px] font-bold tracking-[0] leading-normal relative text-center drop-shadow-[0px_4px_4px_#00000040] whitespace-nowrap w-fit">
                      10
                    </div>
                  </div>

                  {/* weed-15 */}
                  <div className="relative flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border-none rounded gap-[4px] h-[32px] overflow-hidden px-[8px] py-[4px]">
                    <div className="absolute inset-0 rounded bg-gradient-to-t from-black to-[#666666] p-[1px] pointer-events-none z-[1]" 
                         style={{
                           WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                           WebkitMaskComposite: "xor",
                           maskComposite: "exclude"
                         }}>
                    </div>
                    <img className="h-[15px] relative w-[14px]" alt="Icon" src={iconWeed} />
                    <div className="text-white font-['Roboto_Condensed'] text-[16px] font-bold tracking-[0] leading-normal relative text-center drop-shadow-[0px_4px_4px_#00000040] whitespace-nowrap w-fit">
                      20
                    </div>
                  </div>

                  {/* div-24 (Capacity) */}
                  <div className="relative flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border-none rounded shadow-[0px_4px_4px_#00000040] gap-[4px] h-[32px] overflow-hidden px-[8px] py-[4px]">
                    <div className="absolute inset-0 rounded bg-gradient-to-t from-black to-[#666666] p-[1px] pointer-events-none z-[1]" 
                         style={{
                           WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                           WebkitMaskComposite: "xor",
                           maskComposite: "exclude"
                         }}>
                    </div>
                    <div className="h-[13px] relative w-[16px] bg-cover bg-center" 
                         style={{ backgroundImage: `url(${iconEnergy})` }}>
                    </div>
                    <p className="text-transparent font-['Roboto_Condensed'] text-[16px] font-bold tracking-[0] leading-normal relative text-center drop-shadow-[0px_4px_4px_#00000040] whitespace-nowrap w-fit">
                      <span className="text-white">30</span>
                      <span className="text-[#aaaaaa]">/70</span>
                    </p>
                  </div>
                </div>

                {/* NOTIFICAITONS-10 */}
                <div className="h-[49px] left-[16px] absolute top-[-13px] w-[49px]">
                  <div className="h-[49px] relative">
                    {/* notif-icon-12 */}
                    <div className="relative bg-gradient-to-b from-black to-[#414141] border-none rounded-[74px] h-[47px] left-0 overflow-hidden absolute top-[2px] w-[47px]">
                      <div className="absolute inset-0 rounded-[74px] bg-gradient-to-t from-black to-[#666666] p-[1px] pointer-events-none z-[1]" 
                           style={{
                             WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                             WebkitMaskComposite: "xor",
                             maskComposite: "exclude"
                           }}>
                      </div>
                      <div className="h-[21px] left-[16px] relative top-[13px] rotate-180 w-[16px]">
                        <img
                          className="h-[21px] left-0 absolute top-0 rotate-180 w-[16px]"
                          alt="Xt h fgl"
                          src={xthfgl6Png}
                        />
                      </div>
                    </div>

                    {/* notif-number-10 */}
                    <div className="relative bg-gradient-to-b from-black to-[#414141] border-none rounded-[74px] h-[20px] left-[29px] absolute top-0 w-[20px]">
                      <div className="absolute inset-0 rounded-[74px] bg-gradient-to-t from-black to-[#666666] p-[1px] pointer-events-none z-[1]" 
                           style={{
                             WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                             WebkitMaskComposite: "xor",
                             maskComposite: "exclude"
                           }}>
                      </div>
                      <div className="text-[#ffaa22] font-['Roboto_Condensed'] text-[12px] font-semibold left-[7px] tracking-[0] leading-normal absolute top-[2px] whitespace-nowrap">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NavTabs - Use relative positioning within the fixed container */}
              <div className="absolute top-[40px] left-0 w-full">
                <BottomNav3 />
              </div>
            </div>

            {/* MAP Title */}
            <div className="text-white font-['Bangers'] text-[32px] font-normal absolute text-center top-[58px] left-1/2 transform -translate-x-1/2 tracking-[0.64px] leading-normal whitespace-nowrap z-10">
              MAP
            </div>

            {/* Map Pins Container - Keep same positions */}
            <div className="absolute inset-0 pt-24 pb-32">
              {/* PIN-4 - Jamaica Village */}
              <div className="absolute" style={{ left: '62%', top: '26%' }}>
                <div className="relative">
                  <div 
                    className="bg-cover bg-center rounded-[40px] h-[32px] w-[32px] absolute left-[10px] top-0"
                    style={{ 
                      backgroundImage: `url(${telegramPeerPhoto})`,
                      boxShadow: "0px 1px 2px #0000001a, 0px 3.5px 3.5px #00000017, 0px 8px 4.75px #0000000d, 0px 14px 5.75px #00000003, 0px 22px 6.25px transparent"
                    }}>
                  </div>
                  <div className="h-[73px] w-[115px] absolute top-[11px]">
                    <div className="h-[74px] relative w-[113px]">
                      <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[43px] absolute top-[56px] w-[28px]"></div>
                      <img className="h-[69px] left-[36px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtractSvg} />
                      <img className="h-[24px] left-0 absolute top-[19px] w-[113px]" alt="Organic grunge bold" src={organicGrunge1Svg} />
                      <img className="h-[24px] left-[37px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge2Svg} />
                      <div className="text-white font-['Bangers'] text-[16px] font-normal left-[10px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                        JAMAICA VILLAGE
                      </div>
                      <div className="h-[20px] left-[46px] absolute top-[2px] w-[20px]">
                        <div className="h-[13px] relative top-[3px] bg-cover bg-center" style={{ backgroundImage: `url(${vector2Svg})` }}>
                          <img className="h-[13px] left-0 absolute top-0 w-[20px]" alt="Vector" src={vector3Svg} />
                          <img className="h-[11px] left-0 absolute top-[1px] w-[20px]" alt="Group" src={group10Png} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PIN-5 - Novo Moskovo */}
              <div className="absolute" style={{ left: '66%', top: '42%' }}>
                <div className="h-[74px] relative w-[109px]">
                  <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[42px] absolute top-[56px] w-[28px]"></div>
                  <img className="h-[69px] left-[35px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract1Svg} />
                  <img className="h-[24px] left-0 absolute top-[19px] w-[109px]" alt="Organic grunge bold" src={organicGrunge3Svg} />
                  <img className="h-[24px] left-[36px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge4Svg} />
                  <div className="text-white font-['Bangers'] text-[16px] font-normal left-[11px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                    NOVO MOSKOVO
                  </div>
                  <img className="h-[20px] left-[45px] absolute top-[2px] w-[20px]" alt="Element" src={element21Svg} />
                </div>
              </div>

              {/* PIN-6 - Little Italy */}
              <div className="absolute" style={{ left: '62%', top: '66%' }}>
                <div className="h-[74px] relative w-[77px]">
                  <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[25px] absolute top-[56px] w-[28px]"></div>
                  <img className="h-[69px] left-[18px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract2Svg} />
                  <img className="h-[24px] left-0 absolute top-[19px] w-[77px]" alt="Organic grunge bold" src={organicGrunge5Svg} />
                  <img className="h-[24px] left-[19px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge6Svg} />
                  <div className="text-white font-['Bangers'] text-[16px] font-normal left-[7px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                    LITTLE ITALY
                  </div>
                  <img className="h-[20px] left-[28px] absolute top-[2px] w-[20px]" alt="Element" src={element31Svg} />
                </div>
              </div>

              {/* PIN-7 - Cartagena */}
              <div className="absolute" style={{ left: '30%', top: '66%' }}>
                <div className="h-[74px] relative w-[77px]">
                  <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[25px] absolute top-[56px] w-[28px]"></div>
                  <img className="h-[69px] left-[18px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract3Svg} />
                  <img className="h-[24px] left-0 absolute top-[19px] w-[77px]" alt="Organic grunge bold" src={organicGrunge7Svg} />
                  <img className="h-[24px] left-[19px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge8Svg} />
                  <div className="text-white font-['Bangers'] text-[16px] font-normal left-[7px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                    CARTAGENA
                  </div>
                  <img className="h-[20px] left-[28px] absolute top-[2px] w-[20px]" alt="Element" src={element410Svg} />
                </div>
              </div>

              {/* PIN-8 - Baltimore */}
              <div className="absolute" style={{ left: '22%', top: '46%' }}>
                <div className="h-[74px] relative w-[76px]">
                  <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[26px] absolute top-[56px] w-[28px]"></div>
                  <img className="h-[69px] left-[19px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract4Svg} />
                  <img className="h-[24px] left-0 absolute top-[19px] w-[76px]" alt="Organic grunge bold" src={organicGrunge9Svg} />
                  <img className="h-[24px] left-[20px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge10Svg} />
                  <div className="text-white font-['Bangers'] text-[16px] font-normal left-[9px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                    BALTIMORE
                  </div>
                  <div className="h-[20px] left-[29px] absolute top-[2px] w-[20px]">
                    <div className="h-[13px] relative top-[3px] bg-cover bg-center" style={{ backgroundImage: `url(${vector4Svg})` }}>
                      <img className="h-[13px] left-0 absolute top-0 w-[20px]" alt="Group" src={group1Png} />
                      <img className="h-[7px] left-0 absolute top-0 w-[9px]" alt="Vector" src={vector5Svg} />
                      <img className="h-[6px] left-[1px] absolute top-[1px] w-[8px]" alt="Group" src={group2Png} />
                    </div>
                  </div>
                </div>
              </div>

              {/* PIN-9 - Vice Island */}
              <div className="absolute" style={{ left: '50%', top: '50%' }}>
                <div className="h-[74px] relative w-[79px]">
                  <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[26px] absolute top-[56px] w-[28px]"></div>
                  <img className="h-[69px] left-[19px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract5Svg} />
                  <img className="h-[24px] left-0 absolute top-[19px] w-[79px]" alt="Organic grunge bold" src={organicGrunge11Svg} />
                  <img className="h-[24px] left-[20px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge12Svg} />
                  <div className="h-[15px] left-[34px] absolute top-[3px] w-[11px] bg-cover bg-center" style={{ backgroundImage: `url(${element48st4uPng})` }}></div>
                  <div className="text-[#aeaeae] font-['Bangers'] text-[16px] font-normal left-[7px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                    VICE ISLAND
                  </div>
                </div>
              </div>

              {/* PIN-10 - Chinatown (Link) */}
              <Link className="block absolute" style={{ left: '26%', top: '30%' }} to="/map/chinatown">
                <div className="h-[74px] relative w-[78px]">
                  <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[27px] absolute top-[56px] w-[28px]"></div>
                  <img className="h-[69px] left-[20px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract6Svg} />
                  <img className="h-[24px] left-0 absolute top-[19px] w-[78px]" alt="Organic grunge bold" src={organicGrunge13Svg} />
                  <img className="h-[24px] left-[21px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge14Svg} />
                  <div className="text-white font-['Bangers'] text-[16px] font-normal left-[8px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                    CHINATOWN
                  </div>
                  <div className="h-[20px] left-[30px] absolute top-[3px] w-[20px]">
                    <div className="h-[13px] relative top-[3px] bg-cover bg-center" style={{ backgroundImage: `url(${vector9Svg})` }}>
                      <img className="h-[5px] left-[2px] absolute top-[1px] w-[6px]" alt="Group" src={group4Png} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen relative">
        {/* Full Screen Map Background for Desktop - Same larger map */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${fullMapImg})` }}
        >
          {/* Logo - Top Center */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
            <img
              className="h-8 lg:h-10 w-auto"
              alt="Logo"
              src={Logo}
            />
          </div>

          {/* Profile Section - Top Left - Same position and styling as InventoryScreen */}
          <div className="absolute top-5 left-5 lg:left-5 z-10 w-64 lg:w-72 scale-75 lg:scale-90 origin-top-left">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30">
              <TopWrapper />
            </div>
          </div>

          {/* Map Title - Desktop */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-white font-['Bangers'] text-4xl lg:text-5xl font-normal tracking-[0.64px] leading-normal whitespace-nowrap">
              MAP
            </div>
          </div>

          {/* Desktop Map Pins - Keep EXACT SAME positions as mobile */}
          <div className="absolute inset-0 pt-32 pb-32">
            {/* Jamaica Village - Desktop - Same position */}
            <div className="absolute" style={{ left: '62%', top: '26%' }}>
              <div className="relative">
                <div 
                  className="bg-cover bg-center rounded-[40px] h-[32px] w-[32px] absolute left-[10px] top-0"
                  style={{ 
                    backgroundImage: `url(${telegramPeerPhoto})`,
                    boxShadow: "0px 1px 2px #0000001a, 0px 3.5px 3.5px #00000017, 0px 8px 4.75px #0000000d, 0px 14px 5.75px #00000003, 0px 22px 6.25px transparent"
                  }}>
                </div>
                <div className="h-[73px] w-[115px] absolute top-[11px]">
                  <div className="h-[74px] relative w-[113px]">
                    <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[43px] absolute top-[56px] w-[28px]"></div>
                    <img className="h-[69px] left-[36px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtractSvg} />
                    <img className="h-[24px] left-0 absolute top-[19px] w-[113px]" alt="Organic grunge bold" src={organicGrunge1Svg} />
                    <img className="h-[24px] left-[37px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge2Svg} />
                    <div className="text-white font-['Bangers'] text-[16px] font-normal left-[10px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                      JAMAICA VILLAGE
                    </div>
                    <div className="h-[20px] left-[46px] absolute top-[2px] w-[20px]">
                      <div className="h-[13px] relative top-[3px] bg-cover bg-center" style={{ backgroundImage: `url(${vector2Svg})` }}>
                        <img className="h-[13px] left-0 absolute top-0 w-[20px]" alt="Vector" src={vector3Svg} />
                        <img className="h-[11px] left-0 absolute top-[1px] w-[20px]" alt="Group" src={group10Png} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Novo Moskovo - Desktop - Same position */}
            <div className="absolute" style={{ left: '66%', top: '42%' }}>
              <div className="h-[74px] relative w-[109px]">
                <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[42px] absolute top-[56px] w-[28px]"></div>
                <img className="h-[69px] left-[35px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract1Svg} />
                <img className="h-[24px] left-0 absolute top-[19px] w-[109px]" alt="Organic grunge bold" src={organicGrunge3Svg} />
                <img className="h-[24px] left-[36px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge4Svg} />
                <div className="text-white font-['Bangers'] text-[16px] font-normal left-[11px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                  NOVO MOSKOVO
                </div>
                <img className="h-[20px] left-[45px] absolute top-[2px] w-[20px]" alt="Element" src={element21Svg} />
              </div>
            </div>

            {/* Little Italy - Desktop - Same position */}
            <div className="absolute" style={{ left: '62%', top: '66%' }}>
              <div className="h-[74px] relative w-[77px]">
                <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[25px] absolute top-[56px] w-[28px]"></div>
                <img className="h-[69px] left-[18px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract2Svg} />
                <img className="h-[24px] left-0 absolute top-[19px] w-[77px]" alt="Organic grunge bold" src={organicGrunge5Svg} />
                <img className="h-[24px] left-[19px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge6Svg} />
                <div className="text-white font-['Bangers'] text-[16px] font-normal left-[7px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                  LITTLE ITALY
                </div>
                <img className="h-[20px] left-[28px] absolute top-[2px] w-[20px]" alt="Element" src={element31Svg} />
              </div>
            </div>

            {/* Cartagena - Desktop - Same position */}
            <div className="absolute" style={{ left: '30%', top: '66%' }}>
              <div className="h-[74px] relative w-[77px]">
                <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[25px] absolute top-[56px] w-[28px]"></div>
                <img className="h-[69px] left-[18px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract3Svg} />
                <img className="h-[24px] left-0 absolute top-[19px] w-[77px]" alt="Organic grunge bold" src={organicGrunge7Svg} />
                <img className="h-[24px] left-[19px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge8Svg} />
                <div className="text-white font-['Bangers'] text-[16px] font-normal left-[7px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                  CARTAGENA
                </div>
                <img className="h-[20px] left-[28px] absolute top-[2px] w-[20px]" alt="Element" src={element410Svg} />
              </div>
            </div>

            {/* Baltimore - Desktop - Same position */}
            <div className="absolute" style={{ left: '22%', top: '46%' }}>
              <div className="h-[74px] relative w-[76px]">
                <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[26px] absolute top-[56px] w-[28px]"></div>
                <img className="h-[69px] left-[19px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract4Svg} />
                <img className="h-[24px] left-0 absolute top-[19px] w-[76px]" alt="Organic grunge bold" src={organicGrunge9Svg} />
                <img className="h-[24px] left-[20px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge10Svg} />
                <div className="text-white font-['Bangers'] text-[16px] font-normal left-[9px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                  BALTIMORE
                </div>
                <div className="h-[20px] left-[29px] absolute top-[2px] w-[20px]">
                  <div className="h-[13px] relative top-[3px] bg-cover bg-center" style={{ backgroundImage: `url(${vector4Svg})` }}>
                    <img className="h-[13px] left-0 absolute top-0 w-[20px]" alt="Group" src={group1Png} />
                    <img className="h-[7px] left-0 absolute top-0 w-[9px]" alt="Vector" src={vector5Svg} />
                    <img className="h-[6px] left-[1px] absolute top-[1px] w-[8px]" alt="Group" src={group2Png} />
                  </div>
                </div>
              </div>
            </div>

            {/* Vice Island - Desktop - Same position */}
            <div className="absolute" style={{ left: '50%', top: '50%' }}>
              <div className="h-[74px] relative w-[79px]">
                <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[26px] absolute top-[56px] w-[28px]"></div>
                <img className="h-[69px] left-[19px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract5Svg} />
                <img className="h-[24px] left-0 absolute top-[19px] w-[79px]" alt="Organic grunge bold" src={organicGrunge11Svg} />
                <img className="h-[24px] left-[20px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge12Svg} />
                <div className="h-[15px] left-[34px] absolute top-[3px] w-[11px] bg-cover bg-center" style={{ backgroundImage: `url(${element48st4uPng})` }}></div>
                <div className="text-[#aeaeae] font-['Bangers'] text-[16px] font-normal left-[7px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                  VICE ISLAND
                </div>
              </div>
            </div>

            {/* Chinatown - Desktop - Same position (Link) */}
            <Link className="block absolute" style={{ left: '26%', top: '30%' }} to="/map/chinatown">
              <div className="h-[74px] relative w-[78px]">
                <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[27px] absolute top-[56px] w-[28px]"></div>
                <img className="h-[69px] left-[20px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract6Svg} />
                <img className="h-[24px] left-0 absolute top-[19px] w-[78px]" alt="Organic grunge bold" src={organicGrunge13Svg} />
                <img className="h-[24px] left-[21px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge14Svg} />
                <div className="text-white font-['Bangers'] text-[16px] font-normal left-[8px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                  CHINATOWN
                </div>
                <div className="h-[20px] left-[30px] absolute top-[3px] w-[20px]">
                  <div className="h-[13px] relative top-[3px] bg-cover bg-center" style={{ backgroundImage: `url(${vector9Svg})` }}>
                    <img className="h-[5px] left-[2px] absolute top-[1px] w-[6px]" alt="Group" src={group4Png} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Stats Bar - Top */}


          {/* Bottom Navigation - Desktop */}
          <div className="fixed bottom-0 left-0 right-0 z-30">
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-30">
              <div className="scale-90 lg:scale-100 origin-bottom">
                <BottomNav3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoperaiderMap;