import React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

// Import all images using Vite's static imports
import image3Png from "@/static/img/image-3.png";
import ellipse440Svg from "@/static/img/ellipse-4-40.svg";
import layer122Svg from "@/static/img/layer-1-22.svg";
import ellipse19Svg from "@/static/img/ellipse-19.svg";
import ellipse17Svg from "@/static/img/ellipse-17.svg";
import ellipse20Svg from "@/static/img/ellipse-20.svg";
import ellipse18Svg from "@/static/img/ellipse-18.svg";
import image4Png from "@/static/img/image-4.png";
import ellipse441Svg from "@/static/img/ellipse-4-41.svg";
import icon56Svg from "@/static/img/icon-56.svg";
import ellipse191Svg from "@/static/img/ellipse-19-1.svg";
import ellipse171Svg from "@/static/img/ellipse-17-1.svg";
import ellipse201Svg from "@/static/img/ellipse-20-1.svg";
import ellipse181Svg from "@/static/img/ellipse-18-1.svg";
import chatgptImagePng from "@/static/img/chatgpt-image-may-8-2025-01-22-53-pm-1.png";
import ellipse442Svg from "@/static/img/ellipse-4-42.svg";
import ellipse192Svg from "@/static/img/ellipse-19-2.svg";
import ellipse172Svg from "@/static/img/ellipse-17-2.svg";
import ellipse202Svg from "@/static/img/ellipse-20-2.svg";
import ellipse182Svg from "@/static/img/ellipse-18-2.svg";
import image5Png from "@/static/img/image-5.png";
import ellipse443Svg from "@/static/img/ellipse-4-43.svg";
import vector42Svg from "@/static/img/vector-42.svg";
import ellipse156Svg from "@/static/img/ellipse-15-6.svg";
import ellipse193Svg from "@/static/img/ellipse-19-3.svg";
import ellipse173Svg from "@/static/img/ellipse-17-3.svg";
import ellipse183Svg from "@/static/img/ellipse-18-3.svg";
import maskGroup12Png from "@/static/img/mask-group-12.png";
import maskGroup13Png from "@/static/img/mask-group-13.png";
import maskGroup14Png from "@/static/img/mask-group-14.png";
import image11Png from "@/static/img/image-1-1.png";
import ellipse444Svg from "@/static/img/ellipse-4-44.svg";
import vector43Svg from "@/static/img/vector-43.svg";
import ellipse194Svg from "@/static/img/ellipse-19-4.svg";
import ellipse174Svg from "@/static/img/ellipse-17-4.svg";
import ellipse203Svg from "@/static/img/ellipse-20-3.svg";
import ellipse184Svg from "@/static/img/ellipse-18-4.svg";

export const UpgradesContent = (): JSX.Element => {
  return (
    <div className="w-full h-full overflow-y-auto scrollbar-hide p-4">
      <div className="flex flex-col items-start gap-3 w-full max-w-[361px] mx-auto">
        {/* RAID TIE POWER */}
        <div className="flex items-center self-stretch bg-black/70 border border-white/40 rounded gap-4 overflow-hidden p-4 relative w-full">
          <div className="bg-gradient-to-b from-[#95a9cd] to-[#666666] border border-white/10 rounded h-[181px] overflow-hidden relative w-32 flex-shrink-0">
            <div 
              className="bg-cover bg-center h-[268px] -left-[25px] relative -top-[44px] w-[153px]"
              style={{ backgroundImage: `url(${image3Png})` }}
            >
              <div className="text-white font-['Bangers'] text-2xl font-normal left-[58px] tracking-[0] leading-[22px] absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[67px]">
                RAID TIE
                <br />
                POWER
              </div>

              <div className="h-[78px] left-[60px] absolute top-[111px] w-[53px]">
                <div className="bg-[#34b4f4] rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-0 absolute top-[13px] w-[37px]" />
                <div className="bg-white rounded-[13.5px/14.5px] blur-[7px] h-[29px] left-[5px] mix-blend-soft-light absolute top-0 w-[27px]" />
                <div className="bg-black/50 rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-0 absolute top-[39px] w-[37px]" />

                <div className="flex items-center gap-[4.62px] left-[5px] absolute top-[11px]">
                  <div 
                    className="bg-cover bg-center h-12 relative w-12"
                    style={{ backgroundImage: `url(${ellipse440Svg})` }}
                  >
                    <img
                      className="h-[31px] left-3 absolute top-2 w-6"
                      alt="Layer"
                      src={layer122Svg}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-black/80 border border-white/20 rounded-[74px] gap-2 justify-center left-[41px] overflow-hidden p-2 absolute top-[189px] w-24">
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse19Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse17Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse20Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse18Svg} />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col gap-2 relative flex-1">
            <p className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-xl font-normal tracking-[0] leading-[18px] -mt-px relative text-center">
              <span className="font-bold">TIER 1<br /></span>
              <span className="text-sm">Increases chance of raid success in event of a tie</span>
            </p>

            <div className="flex items-center gap-[29px] h-8 relative w-full max-w-[141px]">
              <div className="text-[#aeaeae] font-['Roboto_Condensed'] text-sm font-semibold tracking-[0] leading-4 -mt-px relative w-[59px]">
                Duration:
                <br />
                Cost:
              </div>
              <div className="text-white flex-1 font-['Roboto_Condensed'] text-sm font-bold tracking-[0] leading-4 -mt-px relative text-right">
                1 Day
                <br />
                $0.25
              </div>
            </div>

            <button className="flex items-center self-stretch bg-gradient-to-t from-[#10341d] to-[#318952] border border-[#76e39d] rounded-[74px] gap-2 justify-center overflow-hidden p-2 relative w-full hover:bg-gradient-to-t hover:from-[#0f2e19] hover:to-[#2a7245] transition-all duration-200">
              <p className="text-white font-['Roboto_Condensed'] text-base font-semibold tracking-[-0.48px] leading-normal relative drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap">
                BUY TIER 1 - $0.25
              </p>
            </button>
          </div>
        </div>

        {/* RAID PROTECTION */}
        <div className="flex items-center self-stretch bg-black/70 border border-white/40 rounded gap-4 overflow-hidden p-4 relative w-full">
          <div className="bg-gradient-to-b from-[#95a9cd] to-[#666666] border border-white/10 rounded h-[181px] overflow-hidden relative w-32 flex-shrink-0">
            <div 
              className="bg-cover bg-center h-[224px] relative"
              style={{ backgroundImage: `url(${image4Png})` }}
            >
              <div className="text-white font-['Bangers'] text-2xl font-normal left-[17px] tracking-[0] leading-[22px] absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[23px]">
                RAID
                <br />
                PROTECTION
              </div>

              <div className="h-[78px] left-[35px] absolute top-[67px] w-[53px]">
                <div className="bg-[#ffaa22] rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-0 absolute top-[13px] w-[37px]" />
                <div className="bg-white rounded-[13.5px/14.5px] blur-[7px] h-[29px] left-[5px] mix-blend-soft-light absolute top-0 w-[27px]" />
                <div className="bg-black/50 rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-0 absolute top-[39px] w-[37px]" />

                <div className="flex items-center gap-[4.62px] left-[5px] absolute top-[11px]">
                  <div 
                    className="bg-cover bg-center h-12 relative w-12"
                    style={{ backgroundImage: `url(${ellipse441Svg})` }}
                  >
                    <img
                      className="h-[26px] left-[10px] absolute top-[11px] w-7"
                      alt="Icon"
                      src={icon56Svg}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-black/80 border border-white/20 rounded-[74px] gap-2 justify-center left-4 overflow-hidden p-2 absolute top-[145px] w-24">
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse191Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse171Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse201Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse181Svg} />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col gap-2 relative flex-1">
            <p className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-xl font-normal tracking-[0] leading-[18px] -mt-px relative text-center">
              <span className="font-bold">TIER 1<br /></span>
              <span className="text-sm">Protect yourself from raids <br />by 24 hours</span>
            </p>

            <div className="flex items-center gap-[29px] h-8 relative w-full max-w-[141px]">
              <div className="text-[#aeaeae] font-['Roboto_Condensed'] text-sm font-semibold tracking-[0] leading-4 -mt-px relative w-[59px]">
                Duration:
                <br />
                Cost:
              </div>
              <div className="text-white flex-1 font-['Roboto_Condensed'] text-sm font-bold tracking-[0] leading-4 -mt-px relative text-right">
                1 Day
                <br />
                $0.25
              </div>
            </div>

            <button className="flex items-center self-stretch bg-gradient-to-t from-[#10341d] to-[#318952] border border-[#76e39d] rounded-[74px] gap-2 justify-center overflow-hidden p-2 relative w-full hover:bg-gradient-to-t hover:from-[#0f2e19] hover:to-[#2a7245] transition-all duration-200">
              <p className="text-white font-['Roboto_Condensed'] text-base font-semibold tracking-[-0.48px] leading-normal relative drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap">
                BUY TIER 1 - $0.25
              </p>
            </button>
          </div>
        </div>

        {/* BUST PROTECTION */}
        <div className="flex items-center self-stretch bg-black/70 border border-white/40 rounded gap-4 overflow-hidden p-4 relative w-full">
          <div className="bg-gradient-to-b from-[#95a9cd] to-[#666666] border-[0.5px] border-white/10 rounded h-[181px] overflow-hidden relative w-32 flex-shrink-0">
            <div 
              className="bg-cover bg-center h-[224px] -left-10 relative -top-8 w-56"
              style={{ backgroundImage: `url(${chatgptImagePng})` }}
            >
              <div className="h-[122px] left-[57px] absolute top-14 w-[94px]">
                <div className="text-white font-['Bangers'] text-2xl font-normal left-0 tracking-[0] leading-[22px] absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-0">
                  BUST
                  <br />
                  PROTECTION
                </div>

                <div className="bg-[#ff9c9c] rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-[18px] absolute top-14 w-[37px]" />
                <div className="bg-white rounded-[13.5px/14.5px] blur-[7px] h-[29px] left-[23px] mix-blend-soft-light absolute top-11 w-[27px]" />
                <div className="bg-black/50 rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-[18px] absolute top-[82px] w-[37px]" />

                <div className="flex items-center gap-[4.62px] left-[23px] absolute top-[54px]">
                  <div className="h-12 -mr-[2px] relative w-[50px]">
                    <div 
                      className="bg-cover bg-center h-12 relative w-12"
                      style={{ backgroundImage: `url(${ellipse442Svg})` }}
                    >
                      <div className="text-black font-['Bangers'] text-[25px] font-normal left-[13px] tracking-[0] leading-[22px] absolute text-center top-[14px] whitespace-nowrap w-6">
                        🚨
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-black/80 border border-white/20 rounded-[74px] gap-2 justify-center left-14 overflow-hidden p-2 absolute top-[177px] w-24">
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse192Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse172Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse202Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse182Svg} />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col gap-2 relative flex-1">
            <p className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-xl font-normal tracking-[0] leading-[18px] -mt-px relative text-center">
              <span className="font-bold">TIER 1<br /></span>
              <span className="text-sm">Avoid the law by 24 hours</span>
            </p>

            <div className="flex items-center gap-[29px] h-8 relative w-full max-w-[141px]">
              <div className="text-[#aeaeae] font-['Roboto_Condensed'] text-sm font-semibold tracking-[0] leading-4 -mt-px relative w-[59px]">
                Duration:
                <br />
                Cost:
              </div>
              <div className="text-white flex-1 font-['Roboto_Condensed'] text-sm font-bold tracking-[0] leading-4 -mt-px relative text-right">
                1 Day
                <br />
                $0.25
              </div>
            </div>

            <button className="flex items-center self-stretch bg-gradient-to-t from-[#10341d] to-[#318952] border border-[#76e39d] rounded-[74px] gap-2 justify-center overflow-hidden p-2 relative w-full hover:bg-gradient-to-t hover:from-[#0f2e19] hover:to-[#2a7245] transition-all duration-200">
              <p className="text-white font-['Roboto_Condensed'] text-base font-semibold tracking-[-0.48px] leading-normal relative drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap">
                BUY TIER 1 - $0.25
              </p>
            </button>
          </div>
        </div>

        {/* GROW POWER - Fixed: Removed the green border */}
        <div className="flex items-center self-stretch bg-black/70 border border-white/40 rounded gap-4 overflow-hidden p-4 relative w-full">
          <div className="bg-gradient-to-b from-[#10341d] to-[#318952] border border-[#76e39d] rounded h-[181px] overflow-hidden relative w-32 flex-shrink-0">
            <div 
              className="bg-cover bg-center h-[339px] -left-[30px] relative -top-[158px] w-[194px]"
              style={{ backgroundImage: `url(${image5Png})` }}
            >
              <div className="h-[122px] left-16 absolute top-[182px] w-[57px]">
                <div className="text-white font-['Bangers'] text-2xl font-normal left-[2px] tracking-[0] leading-[22px] absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-0">
                  GROW
                  <br />
                  POWER
                </div>

                <div className="bg-[#5bff8e] rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-0 absolute top-14 w-[37px]" />
                <div className="bg-white rounded-[13.5px/14.5px] blur-[7px] h-[29px] left-[5px] mix-blend-soft-light absolute top-11 w-[27px]" />
                <div className="bg-black/50 rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-0 absolute top-[82px] w-[37px]" />

                <div className="flex items-center gap-[4.62px] left-[5px] absolute top-[54px]">
                  <div 
                    className="bg-cover bg-center h-12 relative w-12"
                    style={{ backgroundImage: `url(${ellipse443Svg})` }}
                  >
                    <img
                      className="h-[30px] left-[10px] absolute top-2 w-7"
                      alt="Vector"
                      src={vector42Svg}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-black/80 border border-white/20 rounded-[74px] gap-2 justify-center left-[46px] overflow-hidden p-2 absolute top-[303px] w-24">
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse156Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse193Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse173Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse183Svg} />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col gap-2 relative flex-1">
            <p className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-xl font-normal tracking-[0] leading-[18px] -mt-px relative text-center">
              <span className="font-bold">TIER 2<br /></span>
              <span className="text-sm">Increase weed yield by <br />10 - 20%</span>
            </p>

            <div className="flex items-center gap-[29px] h-8 relative w-full max-w-[141px]">
              <div className="text-[#aeaeae] font-['Roboto_Condensed'] text-sm font-semibold tracking-[0] leading-4 -mt-px relative w-[59px]">
                Duration:
                <br />
                Cost:
              </div>
              <div className="text-white flex-1 font-['Roboto_Condensed'] text-sm font-bold tracking-[0] leading-4 -mt-px relative text-right">
                1 Day
                <br />
                $0.50
              </div>
            </div>

            <button className="flex items-center self-stretch bg-gradient-to-t from-[#10341d] to-[#318952] border border-[#76e39d] rounded-[74px] gap-2 justify-center overflow-hidden p-2 relative w-full hover:bg-gradient-to-t hover:from-[#0f2e19] hover:to-[#2a7245] transition-all duration-200">
              <p className="text-white font-['Roboto_Condensed'] text-base font-semibold tracking-[-0.48px] leading-normal relative drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap">
                BUY TIER 2 - $0.50
              </p>
            </button>

            <Link
              className="flex items-center rounded-[74px] gap-2 justify-center overflow-hidden px-2 py-1 relative w-full bg-gray-800/50 border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-200"
              to="/you/production-u8212-weed-active"
            >
              <div 
                className="bg-cover bg-center border-[2.83px] border-[#626262] rounded-[9px] h-[18px] relative w-[18px]"
                style={{ backgroundImage: `url(${maskGroup12Png})` }}
              >
                <div 
                  className="bg-cover bg-center h-[18px] relative"
                  style={{ backgroundImage: `url(${maskGroup13Png})` }}
                >
                  <img
                    className="h-[18px] left-0 absolute top-0 w-[18px]"
                    alt="Mask group"
                    src={maskGroup14Png}
                  />
                </div>
              </div>

              <div className="text-[#aeaeae] font-['Roboto_Condensed'] text-base font-semibold tracking-[-0.48px] leading-normal relative drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap">
                Tier 1 is Active
              </div>
            </Link>
          </div>
        </div>

        {/* PRODUCE POWER */}
        <div className="flex items-center self-stretch bg-black/70 border border-white/40 rounded gap-4 overflow-hidden p-4 relative w-full">
          <div className="bg-gradient-to-b from-[#95a9cd] to-[#666666] border-[0.5px] border-white/10 rounded h-[181px] overflow-hidden relative w-32 flex-shrink-0">
            <div 
              className="bg-cover bg-center h-[183px] relative -top-[2px]"
              style={{ backgroundImage: `url(${image11Png})` }}
            >
              <div className="h-[122px] left-[29px] absolute top-[26px] w-[70px]">
                <div className="text-white font-['Bangers'] text-2xl font-normal left-0 tracking-[0] leading-[22px] absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-0">
                  PRODUCE
                  <br />
                  POWER
                </div>

                <div className="bg-[#9cc9ff] rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-[6px] absolute top-14 w-[37px]" />
                <div className="bg-white rounded-[13.5px/14.5px] blur-[7px] h-[29px] left-[11px] mix-blend-soft-light absolute top-11 w-[27px]" />
                <div className="bg-black/50 rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-[6px] absolute top-[82px] w-[37px]" />

                <div className="flex items-center gap-[4.62px] left-[11px] absolute top-[54px]">
                  <div 
                    className="bg-cover bg-center h-12 relative w-12"
                    style={{ backgroundImage: `url(${ellipse444Svg})` }}
                  >
                    <img
                      className="h-[30px] left-[11px] absolute top-[10px] w-[26px]"
                      alt="Vector"
                      src={vector43Svg}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-black/80 border border-white/20 rounded-[74px] gap-2 justify-center left-4 overflow-hidden p-2 absolute top-[147px] w-24">
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse194Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse174Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse203Svg} />
                <img className="h-3 relative w-3" alt="Ellipse" src={ellipse184Svg} />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col gap-2 relative flex-1">
            <p className="self-stretch text-[#f8f8f8] font-['Roboto_Condensed'] text-xl font-normal tracking-[0] leading-[18px] -mt-px relative text-center">
              <span className="font-bold">TIER 1<br /></span>
              <span className="text-sm">Increase weed yield by <br />5 - 10%</span>
            </p>

            <div className="flex items-center gap-[29px] h-8 relative w-full max-w-[141px]">
              <div className="text-[#aeaeae] font-['Roboto_Condensed'] text-sm font-semibold tracking-[0] leading-4 -mt-px relative w-[59px]">
                Duration:
                <br />
                Cost:
              </div>
              <div className="text-white flex-1 font-['Roboto_Condensed'] text-sm font-bold tracking-[0] leading-4 -mt-px relative text-right">
                1 Day
                <br />
                $0.25
              </div>
            </div>

            <button className="flex items-center self-stretch bg-gradient-to-t from-[#10341d] to-[#318952] border border-[#76e39d] rounded-[74px] gap-2 justify-center overflow-hidden p-2 relative w-full hover:bg-gradient-to-t hover:from-[#0f2e19] hover:to-[#2a7245] transition-all duration-200">
              <p className="text-white font-['Roboto_Condensed'] text-base font-semibold tracking-[-0.48px] leading-normal relative drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap">
                BUY TIER 1 - $0.25
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};