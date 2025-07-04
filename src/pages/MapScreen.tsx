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
            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 z-30">
              <BottomNav3 />
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
                  <div className="h-[20px] left-[30px] absolute top-[2px] w-[20px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.6551 16.5517H0.344843C0.154414 16.5517 0 16.3973 0 16.2069V3.79309C0 3.60266 0.154414 3.44824 0.344843 3.44824H19.6552C19.8456 3.44824 20 3.60266 20 3.79309V16.2069C20 16.3973 19.8455 16.5517 19.6551 16.5517Z" fill="#FF4B55"/>
                      <path d="M3.32047 5.49735L3.64922 6.48305L4.68828 6.4911C4.82281 6.49212 4.87859 6.66384 4.77035 6.74372L3.93449 7.36094L4.24789 8.35164C4.28844 8.47993 4.14242 8.58598 4.03297 8.50778L3.18766 7.90352L2.34235 8.50774C2.2329 8.58598 2.08688 8.47985 2.12743 8.35161L2.44082 7.3609L1.60497 6.74372C1.49673 6.6638 1.55251 6.49212 1.68704 6.4911L2.7261 6.48305L3.05485 5.49735C3.09743 5.3697 3.27793 5.3697 3.32047 5.49735Z" fill="#FFE15A"/>
                      <path d="M7.09354 5.74032L7.32929 6.0618L7.70971 5.94281C7.75897 5.92742 7.79948 5.9836 7.76932 6.02543L7.53643 6.34891L7.76714 6.67395C7.79702 6.71602 7.75612 6.77191 7.70698 6.75617L7.32733 6.63465L7.08948 6.95453C7.0587 6.99594 6.99288 6.9743 6.99268 6.92273L6.99093 6.5241L6.61319 6.39672C6.56433 6.3802 6.56452 6.31098 6.61355 6.29481L6.99206 6.16996L6.99651 5.77137C6.99706 5.71985 7.06304 5.69871 7.09354 5.74032Z" fill="#FFE15A"/>
                      <path d="M5.65829 4.78209L6.05458 4.82514L6.22364 4.46417C6.24556 4.41745 6.31431 4.42545 6.32486 4.47596L6.40634 4.86612L6.80189 4.91534C6.8531 4.9217 6.86673 4.98959 6.82192 5.01526L6.47603 5.21331L6.55146 5.60471C6.56122 5.65541 6.50087 5.68932 6.46263 5.65467L6.16736 5.3869L5.81845 5.57955C5.77329 5.60451 5.72232 5.55756 5.74349 5.51049L5.90689 5.1469L5.61579 4.87456C5.57814 4.83948 5.60701 4.77655 5.65829 4.78209Z" fill="#FFE15A"/>
                      <path d="M6.28477 8.64511L6.04903 8.96659L5.6686 8.84761C5.61934 8.83222 5.57883 8.88839 5.60899 8.93022L5.84188 9.2537L5.61118 9.57874C5.5813 9.62081 5.62219 9.67671 5.67133 9.66097L6.05098 9.53944L6.28883 9.85932C6.31961 9.90073 6.38544 9.87909 6.38563 9.82753L6.38739 9.4289L6.76512 9.30151C6.81403 9.28499 6.81379 9.21577 6.76477 9.1996L6.38625 9.07476L6.3818 8.67616C6.38118 8.62468 6.31528 8.60347 6.28477 8.64511Z" fill="#FFE15A"/>
                      <path d="M7.72005 7.74462L7.32376 7.78767L7.1547 7.42669C7.13278 7.37997 7.06403 7.38798 7.05348 7.43849L6.97196 7.82864L6.57642 7.87786C6.5252 7.88423 6.51157 7.95212 6.55638 7.97778L6.90227 8.17583L6.82684 8.56724C6.81708 8.61794 6.87743 8.65184 6.91567 8.6172L7.21095 8.34942L7.55985 8.54208C7.60501 8.56704 7.65598 8.52009 7.63481 8.47302L7.47141 8.10942L7.76251 7.83708C7.80028 7.802 7.77141 7.73907 7.72005 7.74462Z" fill="#FFE15A"/>
                    </svg>
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


          {/* Desktop Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 z-30">
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-30">
              <div className="scale-60 sm:scale-70 md:scale-80 lg:scale-90 xl:scale-100 origin-bottom">
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