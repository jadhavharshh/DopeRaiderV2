import React from "react";
import type { JSX } from "react";

// Import all images using Vite's static imports
import organicGrunge19Svg from "@/static/img/organic-grunge-bold-shapes-19.svg";
import organicGrunge20Svg from "@/static/img/organic-grunge-bold-shapes-20.svg";
import organicGrunge21Svg from "@/static/img/organic-grunge-bold-shapes-21.svg";
import organicGrunge22Svg from "@/static/img/organic-grunge-bold-shapes-22.svg";
import organicGrunge23Svg from "@/static/img/organic-grunge-bold-shapes-23.svg";
import organicGrunge24Svg from "@/static/img/organic-grunge-bold-shapes-24.svg";
import polygon21Svg from "@/static/img/polygon-2-1.svg";
import polygon22Svg from "@/static/img/polygon-2-2.svg";
import polygon23Svg from "@/static/img/polygon-2-3.svg";
import polygon24Svg from "@/static/img/polygon-2-4.svg";
import polygon25Svg from "@/static/img/polygon-2-5.svg";
import ellipse425Svg from "@/static/img/ellipse-4-25.svg";
import ellipse426Svg from "@/static/img/ellipse-4-26.svg";
import ellipse427Svg from "@/static/img/ellipse-4-27.svg";
import ellipse428Svg from "@/static/img/ellipse-4-28.svg";
import ellipse429Svg from "@/static/img/ellipse-4-29.svg";
import ellipse430Svg from "@/static/img/ellipse-4-30.svg";
import element48st4u5Png from "@/static/img/48st4u-5.png";
import element2qbzvy5Png from "@/static/img/2qbzvy-5.png";

export const TrophiesContent = (): JSX.Element => {
  return (
    <div className="w-full h-full overflow-y-auto scrollbar-hide p-4">
      <div className="flex flex-col items-start gap-2 w-full max-w-[361px] mx-auto">
        
        {/* First row */}
        <div className="flex gap-2 w-full">
          {/* RAIDER Trophy */}
          <div className="bg-black/70 border border-white/40 rounded h-[172px] overflow-hidden flex-1 relative">
            <div className="h-[214px] -left-[25px] relative -top-[35px] w-[218px]">
              <div className="h-[214px] left-0 absolute top-0 w-[218px]">
                <img
                  className="h-[179px] left-0 absolute top-0 w-[218px]"
                  alt="Organic grunge bold"
                  src={organicGrunge19Svg}
                />

                <p className="color-transparent font-['Roboto_Condensed'] text-xs font-bold left-[41px] tracking-[0] leading-[18px] absolute text-center top-[180px] w-36">
                  <span className="text-[#f8f8f8]">6 </span>
                  <span className="text-white">/ 10</span>
                  <span className="text-[#f8f8f8]">&nbsp;</span>
                  <span className="text-[#aeaeae]">for next rank</span>
                </p>

                <div className="flex items-center flex-col gap-2 left-[41px] absolute top-[67px] w-36">
                  <div className="self-stretch text-white font-['Bangers'] text-2xl font-normal tracking-[0] leading-[22px] -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    RAIDER
                  </div>

                  <div className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-sm font-normal tracking-[0] leading-[15px] relative text-center">
                    Successful raids completed
                  </div>

                  <div className="flex items-center bg-black/80 border border-white/20 rounded gap-[10px] justify-center overflow-hidden px-2 py-1 relative">
                    <p className="color-transparent font-['Roboto_Condensed'] text-xs font-medium tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit">
                      <span className="text-[#aeaeae]">RANK:</span>
                      <span className="text-[#ffaa22]">&nbsp;</span>
                      <span className="text-white">AMATEUR</span>
                    </p>
                  </div>
                </div>

                {/* Lock icon with circle background */}
                <div className="h-[38px] left-[171px] absolute top-[176px] w-[38px]">
                  <div 
                    className="bg-cover bg-center h-[38px] relative w-[38px]"
                    style={{ backgroundImage: `url(${polygon21Svg})` }}
                  >
                    <img
                      className="h-[15px] left-[13px] absolute top-[11px] w-[11px]"
                      alt="Element st"
                      src={element48st4u5Png}
                    />
                  </div>
                </div>

                {/* Trophy icon with circle background */}
                <div className="h-7 left-[31px] absolute top-[41px] w-7">
                  <div 
                    className="bg-cover bg-center h-7 relative w-7"
                    style={{ backgroundImage: `url(${ellipse425Svg})` }}
                  >
                    <img
                      className="h-4 left-[6px] absolute top-[6px] w-4"
                      alt="Element bz vy"
                      src={element2qbzvy5Png}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#00ff4fbf] h-1 left-[25px] absolute top-[203px] w-[116px]" />
            </div>
          </div>

          {/* GROWER Trophy */}
          <div className="bg-black/70 border border-white/40 rounded h-[172px] overflow-hidden flex-1 relative">
            <div className="h-[214px] -left-[25px] relative -top-[35px] w-[218px]">
              <div className="h-[214px] left-0 absolute top-0 w-[218px]">
                <img
                  className="h-[179px] left-0 absolute top-0 w-[218px]"
                  alt="Organic grunge bold"
                  src={organicGrunge20Svg}
                />

                <p className="color-transparent font-['Roboto_Condensed'] text-xs font-bold left-[41px] tracking-[0] leading-[18px] absolute text-center top-[180px] w-36">
                  <span className="text-[#f8f8f8]">4 </span>
                  <span className="text-white">/ 5</span>
                  <span className="text-[#f8f8f8]">&nbsp;</span>
                  <span className="text-[#aeaeae]">for next rank</span>
                </p>

                <div className="flex items-center flex-col gap-2 left-[41px] absolute top-[67px] w-36">
                  <div className="self-stretch text-white font-['Bangers'] text-2xl font-normal tracking-[0] leading-[22px] -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    GROWER
                  </div>

                  <div className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-sm font-normal h-[30px] tracking-[0] leading-[15px] relative text-center">
                    Weed Grows Completed
                  </div>

                  <div className="flex items-center bg-black/80 border border-white/20 rounded gap-[10px] justify-center overflow-hidden px-2 py-1 relative">
                    <p className="color-transparent font-['Roboto_Condensed'] text-xs font-medium tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit">
                      <span className="text-[#aeaeae]">RANK:</span>
                      <span className="text-[#ffaa22]">&nbsp;</span>
                      <span className="text-white">NOOB</span>
                    </p>
                  </div>
                </div>

                {/* Lock icon with circle background */}
                <div className="h-[38px] left-[171px] absolute top-[176px] w-[38px]">
                  <div 
                    className="bg-cover bg-center h-[38px] relative w-[38px]"
                    style={{ backgroundImage: `url(${polygon22Svg})` }}
                  >
                    <img
                      className="h-[15px] left-[13px] absolute top-[11px] w-[11px]"
                      alt="Element st"
                      src={element48st4u5Png}
                    />
                  </div>
                </div>

                {/* Trophy icon with circle background */}
                <div className="h-7 left-[31px] absolute top-[41px] w-7">
                  <div 
                    className="bg-cover bg-center h-7 relative w-7"
                    style={{ backgroundImage: `url(${ellipse426Svg})` }}
                  >
                    <img
                      className="h-4 left-[6px] absolute top-[6px] w-4"
                      alt="Element bz vy"
                      src={element2qbzvy5Png}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#00ff4f] h-1 left-[25px] absolute top-[203px] w-[143px]" />
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-2 w-full">
          {/* PRODUCER Trophy */}
          <div className="bg-black/70 border border-white/40 rounded h-[172px] overflow-hidden flex-1 relative">
            <div className="h-[214px] -left-[25px] relative -top-[35px] w-[218px]">
              <div className="h-[214px] left-0 absolute top-0 w-[218px]">
                <img
                  className="h-[179px] left-0 absolute top-0 w-[218px]"
                  alt="Organic grunge bold"
                  src={organicGrunge21Svg}
                />

                <p className="color-transparent font-['Roboto_Condensed'] text-xs font-bold left-[41px] tracking-[0] leading-[18px] absolute text-center top-[180px] w-36">
                  <span className="text-[#f8f8f8]">20 </span>
                  <span className="text-white">/ 50</span>
                  <span className="text-[#f8f8f8]">&nbsp;</span>
                  <span className="text-[#aeaeae]">for next rank</span>
                </p>

                <div className="flex items-center flex-col gap-2 left-[41px] absolute top-[67px] w-36">
                  <div className="self-stretch text-white font-['Bangers'] text-2xl font-normal tracking-[0] leading-[22px] -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    PRODUCER
                  </div>

                  <div className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-sm font-normal h-[30px] tracking-[0] leading-[15px] relative text-center">
                    Coke Productions <br />
                    Completed
                  </div>

                  <div className="flex items-center bg-black/80 border border-white/20 rounded gap-[10px] justify-center overflow-hidden px-2 py-1 relative">
                    <p className="color-transparent font-['Roboto_Condensed'] text-xs font-medium tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit">
                      <span className="text-[#aeaeae]">RANK:</span>
                      <span className="text-[#ffaa22]">&nbsp;</span>
                      <span className="text-white">CAPTAIN</span>
                    </p>
                  </div>
                </div>

                {/* Lock icon with circle background */}
                <div className="h-[38px] left-[171px] absolute top-[176px] w-[38px]">
                  <div 
                    className="bg-cover bg-center h-[38px] relative w-[38px]"
                    style={{ backgroundImage: `url(${polygon23Svg})` }}
                  >
                    <img
                      className="h-[15px] left-[13px] absolute top-[11px] w-[11px]"
                      alt="Element st"
                      src={element48st4u5Png}
                    />
                  </div>
                </div>

                {/* Trophy icon with circle background */}
                <div className="h-7 left-[31px] absolute top-[41px] w-7">
                  <div 
                    className="bg-cover bg-center h-7 relative w-7"
                    style={{ backgroundImage: `url(${ellipse427Svg})` }}
                  >
                    <img
                      className="h-4 left-[6px] absolute top-[6px] w-4"
                      alt="Element bz vy"
                      src={element2qbzvy5Png}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#00ff4f] h-1 left-[25px] absolute top-[203px] w-[74px]" />
            </div>
          </div>

          {/* DEALER Trophy */}
          <div className="bg-black/70 border border-white/40 rounded h-[172px] overflow-hidden flex-1 relative">
            <div className="h-[214px] -left-[25px] relative -top-[35px] w-[218px]">
              <div className="h-[214px] left-0 absolute top-0 w-[218px]">
                <img
                  className="h-[179px] left-0 absolute top-0 w-[218px]"
                  alt="Organic grunge bold"
                  src={organicGrunge22Svg}
                />

                <p className="color-transparent font-['Roboto_Condensed'] text-xs font-bold left-[41px] tracking-[0] leading-[18px] absolute text-center top-[180px] w-36">
                  <span className="text-[#f8f8f8]">11 </span>
                  <span className="text-white">/ 15</span>
                  <span className="text-[#f8f8f8]">&nbsp;</span>
                  <span className="text-[#aeaeae]">for next rank</span>
                </p>

                <div className="flex items-center flex-col gap-2 h-[74px] left-[41px] absolute top-[67px] w-36">
                  <div className="self-stretch text-white font-['Bangers'] text-2xl font-normal tracking-[0] leading-[22px] -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    DEALER
                  </div>

                  <div className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-sm font-normal h-[30px] tracking-[0] leading-[15px] relative text-center">
                    Weed Sales Completed
                  </div>

                  <div className="flex items-center bg-black/80 border border-white/20 rounded gap-[10px] justify-center -mb-4 overflow-hidden px-2 py-1 relative">
                    <p className="color-transparent font-['Roboto_Condensed'] text-xs font-medium tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit">
                      <span className="text-[#aeaeae]">RANK:</span>
                      <span className="text-[#ffaa22]">&nbsp;</span>
                      <span className="text-white">GRIFTER</span>
                    </p>
                  </div>
                </div>

                {/* Lock icon with circle background */}
                <div className="h-[38px] left-[171px] absolute top-[176px] w-[38px]">
                  <div 
                    className="bg-cover bg-center h-[38px] relative w-[38px]"
                    style={{ backgroundImage: `url(${polygon24Svg})` }}
                  >
                    <img
                      className="h-[15px] left-[13px] absolute top-[11px] w-[11px]"
                      alt="Element st"
                      src={element48st4u5Png}
                    />
                  </div>
                </div>

                {/* Trophy icon with circle background */}
                <div className="h-7 left-[31px] absolute top-[41px] w-7">
                  <div 
                    className="bg-cover bg-center h-7 relative w-7"
                    style={{ backgroundImage: `url(${ellipse428Svg})` }}
                  >
                    <img
                      className="h-4 left-[6px] absolute top-[6px] w-4"
                      alt="Element bz vy"
                      src={element2qbzvy5Png}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#00ff4f] h-1 left-[25px] absolute top-[203px] w-[121px]" />
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="flex gap-2 w-full">
          {/* TRAVELLER Trophy */}
          <div className="bg-black/70 border border-white/40 rounded h-[172px] overflow-hidden flex-1 relative">
            <div className="h-[214px] -left-[25px] relative -top-[35px] w-[218px]">
              <div className="h-[214px] left-0 absolute top-0 w-[218px]">
                <img
                  className="h-[179px] left-0 absolute top-0 w-[218px]"
                  alt="Organic grunge bold"
                  src={organicGrunge23Svg}
                />

                <p className="color-transparent font-['Roboto_Condensed'] text-xs font-bold left-[41px] tracking-[0] leading-[18px] absolute text-center top-[180px] w-36">
                  <span className="text-[#f8f8f8]">1 </span>
                  <span className="text-white">/ 5</span>
                  <span className="text-[#f8f8f8]">&nbsp;</span>
                  <span className="text-[#aeaeae]">for next rank</span>
                </p>

                <div className="flex items-center flex-col gap-2 h-[74px] left-[41px] absolute top-[67px] w-36">
                  <div className="self-stretch text-white font-['Bangers'] text-2xl font-normal tracking-[0] leading-[22px] -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    TRAVELLER
                  </div>

                  <div className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-sm font-normal h-[30px] tracking-[0] leading-[15px] relative text-center">
                    Districts Traveled
                  </div>

                  <div className="flex items-center bg-black/80 border border-white/20 rounded gap-[10px] justify-center -mb-4 overflow-hidden px-2 py-1 relative">
                    <p className="color-transparent font-['Roboto_Condensed'] text-xs font-medium tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit">
                      <span className="text-[#aeaeae]">RANK:</span>
                      <span className="text-[#ffaa22]">&nbsp;</span>
                      <span className="text-white">NOOB</span>
                    </p>
                  </div>
                </div>

                {/* Lock icon with circle background */}
                <div className="h-[38px] left-[171px] absolute top-[176px] w-[38px]">
                  <div 
                    className="bg-cover bg-center h-[38px] relative w-[38px]"
                    style={{ backgroundImage: `url(${polygon25Svg})` }}
                  >
                    <img
                      className="h-[15px] left-[13px] absolute top-[11px] w-[11px]"
                      alt="Element st"
                      src={element48st4u5Png}
                    />
                  </div>
                </div>

                {/* Trophy icon with circle background */}
                <div className="h-7 left-[31px] absolute top-[41px] w-7">
                  <div 
                    className="bg-cover bg-center h-7 relative w-7"
                    style={{ backgroundImage: `url(${ellipse429Svg})` }}
                  >
                    <img
                      className="h-4 left-[6px] absolute top-[6px] w-4"
                      alt="Element bz vy"
                      src={element2qbzvy5Png}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#00ff4f] h-1 left-[25px] absolute top-[203px] w-[42px]" />
            </div>
          </div>

          {/* VICE Trophy (Completed) */}
          <div className="bg-black/70 border border-white/40 rounded h-[172px] overflow-hidden flex-1 relative">
            <div 
              className="bg-cover bg-center h-[179px] -left-[25px] absolute -top-[35px] w-[218px]"
              style={{ backgroundImage: `url(${organicGrunge24Svg})` }}
            >
              <div className="flex items-center flex-col gap-2 h-[74px] left-[41px] absolute top-[67px] w-36">
                <div className="self-stretch text-white font-['Bangers'] text-2xl font-normal tracking-[0] leading-[22px] -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                  VICE
                </div>

                <div className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-sm font-normal h-[30px] tracking-[0] leading-[15px] relative text-center">
                  Travel to Vice Island
                </div>

                <div className="flex items-center bg-black/80 border border-white/20 rounded gap-[10px] justify-center -mb-4 overflow-hidden px-2 py-1 relative">
                  <div className="text-white font-['Roboto_Condensed'] text-xs font-medium tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit">
                    COMPLETED
                  </div>
                </div>
              </div>

              {/* Trophy icon with circle background */}
              <div className="h-7 left-[31px] absolute top-[41px] w-7">
                <div 
                  className="bg-cover bg-center h-7 relative w-7"
                  style={{ backgroundImage: `url(${ellipse430Svg})` }}
                >
                  <img
                    className="h-4 left-[6px] absolute top-[6px] w-4"
                    alt="Element bz vy"
                    src={element2qbzvy5Png}
                  />
                </div>
              </div>
            </div>

            <p className="text-[#aeaeae] font-['Roboto_Condensed'] text-xs font-bold left-4 tracking-[0] leading-[18px] absolute text-center top-[145px] w-36">
              Achieved on 28 May 2025
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};