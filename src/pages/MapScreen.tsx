import { useState } from "react";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";
import { TopWrapper } from "./InventoryScreenSections/TopWrapper";
import { LocationPopup } from "../components/LocationPopup";
import type { JSX } from "react";

// Import all images using Vite's static imports
import fullMapImg from "@/static/img/image.png"; // Using the larger map image

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
  const [openPopup, setOpenPopup] = useState<string | null>(null);
  const handlePinClick = (location: string) => setOpenPopup(location);
  const handleClosePopup = () => setOpenPopup(null);

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      <style>
        {`
          @keyframes dissolve-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
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
              <div className="absolute" style={{ left: '54%', top: '18%' }} onClick={() => handlePinClick('Jamaica Village')}>
                <div className="relative cursor-pointer">
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
              <div className="absolute" style={{ left: '70%', top: '38%' }} onClick={() => handlePinClick('Novo Moskovo')}>
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
              <div className="absolute" style={{ left: '60%', top: '68%' }} onClick={() => handlePinClick('Little Italy')}>
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
              <div className="absolute" style={{ left: '35%', top: '68%' }} onClick={() => handlePinClick('Cartagena')}>
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
              <div className="absolute" style={{ left: '22%', top: '38%' }} onClick={() => handlePinClick('Baltimore')}>
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
              <div className="absolute" style={{ left: '40%', top: '48%' }} onClick={() => handlePinClick('Vice Island')}>
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

              {/* PIN-10 - Chinatown (Button) */}
              <div className="absolute" style={{ left: '20%', top: '18%' }} onClick={() => handlePinClick('Chinatown')}>
                <div className="h-[74px] relative w-[78px] cursor-pointer">
                  <div className="bg-[#00000099] rounded-[14px/8.5px] h-[17px] left-[27px] absolute top-[56px] w-[28px]"></div>
                  <img className="h-[69px] left-[20px] absolute top-[5px] w-[41px]" alt="Subtract" src={subtract6Svg} />
                  <img className="h-[24px] left-0 absolute top-[19px] w-[78px]" alt="Organic grunge bold" src={organicGrunge13Svg} />
                  <img className="h-[24px] left-[21px] absolute top-0 w-[37px]" alt="Organic grunge bold" src={organicGrunge14Svg} />
                  <div className="text-white font-['Bangers'] text-[16px] font-normal left-[8px] tracking-[0.32px] leading-normal absolute text-center top-[22px] whitespace-nowrap">
                    CHINATOWN
                  </div>
                  <div className="h-[20px] left-[30px] absolute top-[3px] w-[20px]">
                    <div className="h-[13px] relative top-[3px] bg-cover bg-center" style={{ backgroundImage: `url(${vector9Svg})` }}>
                      <img className="h-[13px] left-0 absolute top-0 w-[20px]" alt="Vector" src={vector3Svg} />
                      <img className="h-[11px] left-0 absolute top-[1px] w-[20px]" alt="Group" src={group10Png} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Popup - Mobile */}
        <LocationPopup openPopup={openPopup} handleClosePopup={handleClosePopup} />
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
            <div className="">
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
            <div className="absolute" style={{ left: '54%', top: '28%' }} onClick={() => handlePinClick('Jamaica Village')}>
              <div className="relative cursor-pointer">
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
            <div className="absolute" style={{ left: '58%', top: '54%' }} onClick={() => handlePinClick('Novo Moskovo')}>
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
            <div className="absolute" style={{ left: '52%', top: '68%' }} onClick={() => handlePinClick('Little Italy')}>
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
            <div className="absolute" style={{ left: '46%', top: '68%' }} onClick={() => handlePinClick('Cartagena')}>
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
            <div className="absolute" style={{ left: '42%', top: '54%' }} onClick={() => handlePinClick('Baltimore')}>
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
            <div className="absolute" style={{ left: '48%', top: '48%' }} onClick={() => handlePinClick('Vice Island')}>
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
            <div className="absolute" style={{ left: '46%', top: '20%' }} onClick={() => handlePinClick('Chinatown')}>
              <div className="h-[74px] relative w-[78px] cursor-pointer">
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
            </div>
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

        {/* Location Popup - Desktop */}
        <LocationPopup openPopup={openPopup} handleClosePopup={handleClosePopup} />
      </div>
    </div>
  );
};

export default DoperaiderMap;