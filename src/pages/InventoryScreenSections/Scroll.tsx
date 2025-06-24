import React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

// Import all images using Vite's way
import organicGrunge27Svg from "@/static/img/organic-grunge-bold-shapes-27.svg";
import airdropImg from "@/static/img/airdrop-1.png";
import athga8Png from "@/static/img/9athga-8.png";
import maskGroup11Png from "@/static/img/mask-group-11.png";
import musicTabSvg from "@/static/img/music-tab.svg";
import vector34Svg from "@/static/img/vector-34.svg";
import vector35Svg from "@/static/img/vector-35.svg";
import subtract7Svg from "@/static/img/subtract-7.svg";
import group62Png from "@/static/img/group-6-2.png";
import layer117Svg from "@/static/img/layer-1-17.svg";
import rectangle4Svg from "@/static/img/rectangle-4.svg";
import rectangle7Svg from "@/static/img/rectangle-7.svg";
import bpfdwnPng from "@/static/img/bpfdwn.png";
import frameSvg from "@/static/img/frame.svg";

export const Scroll = (): JSX.Element => {
  return (
    <div className="font-['Roboto_Condensed'] h-[439px] overflow-hidden overflow-y-scroll flex w-full h-full align-center justify-center scrollbar-hide">
      <div className="h-[469px] relative top-4 w-full max-w-[362px] min-w-[320px] px-2 sm:px-0">
        {/* AIRDROP Section */}
        <div className="bg-gradient-to-b from-[#666666] to-[#454545] border border-[#666666] rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[73px] left-0 overflow-hidden absolute top-0 w-full">
          <div className="h-[179px] left-[-205px] absolute top-[-40px] w-[394px]">
            <img
              className="h-[179px] w-[394px] object-cover"
              alt="Organic grunge bold shapes"
              src={organicGrunge27Svg}
            />

            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffdca5] to-[#d6b786] font-[Bangers] text-lg font-normal left-[288px] tracking-0 leading-normal absolute top-[57px] w-[83px]">
              YOU HAVE A AIRDROP!
            </div>

            <div className="h-[74px] left-[219px] absolute top-[31px] w-[54px]">
              <div className="h-[74px] relative w-[54px]">
                <img
                  className="h-[41px] left-2 mix-blend-multiply absolute top-[22px] w-[41px]"
                  alt="Mask group"
                  src={maskGroup11Png}
                />
                <div className="bg-[#863f0c] rounded-[18.5px/19.5px] blur-[7px] h-[39px] left-2 absolute top-[35px] w-[37px]" />
                <div className="bg-white rounded-[13.5px/14.5px] blur-[7px] h-[29px] left-0 mix-blend-soft-light absolute top-[26px] w-[27px]" />
                <img
                  className="h-[72px] left-0 object-cover absolute top-0 w-[54px]"
                  alt="Airdrop"
                  src={airdropImg}
                />
              </div>
            </div>
          </div>

          <Link
            className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-[#76e39d] rounded-[74px] gap-2 justify-center right-4 overflow-hidden py-2 px-4 absolute top-[21px]"
            to="/airdrop"
          >
            <div className="text-xs font-semibold text-white tracking-[-0.36px] leading-normal -mt-[1px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap">
              CLAIM REWARDS
            </div>
          </Link>
        </div>

        {/* INVENTORY BOXES Section */}
        <div className="flex items-start flex-col gap-2 left-0 absolute top-[81px] w-full">
          {/* First row - RESPECT, COKE, WEED */}
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-[#666666] rounded flex-1 flex-col gap-1 justify-center overflow-hidden p-2">
              <div className="text-sm font-bold text-[#bbd1ff] tracking-0 leading-normal -mt-[1px] whitespace-nowrap">
                RESPECT
              </div>
              <div className="h-6 relative w-[53px]">
                <div className="bg-[#4ea138] rounded-full h-6 left-0 absolute top-0 w-6 flex items-center justify-center">
                  <img
                    className="h-[14px] w-[11px]"
                    alt="Element hga"
                    src={athga8Png}
                  />
                </div>
                <div className="text-base font-bold text-white left-7 tracking-0 leading-normal absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[2px] whitespace-nowrap">
                  100
                </div>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-b from-black to-[#8992a5] border border-[#666666] rounded flex-1 flex-col gap-1 justify-center overflow-hidden p-2">
              <div className="text-sm font-bold text-white tracking-0 leading-normal -mt-[1px] whitespace-nowrap">
                COKE
              </div>
              <div className="h-6 relative w-[45px]">
                <div className="bg-[#8992a5] rounded-full h-6 left-0 absolute top-0 w-6 flex items-center justify-center">
                  <img
                    className="h-[15px] w-[13px]"
                    alt="Vector"
                    src={vector34Svg}
                  />
                </div>
                <div className="text-base font-bold text-white left-7 tracking-0 leading-normal absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[2px] whitespace-nowrap">
                  10
                </div>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-[#666666] rounded flex-1 flex-col gap-1 justify-center overflow-hidden p-2">
              <div className="text-sm font-bold text-[#5bff8e] tracking-0 leading-normal -mt-[1px] whitespace-nowrap">
                WEED
              </div>
              <div className="h-6 relative w-[45px]">
                <div className="bg-[#318952] rounded-full h-6 left-0 absolute top-0 w-6 flex items-center justify-center">
                  <img
                    className="h-[15px] w-[14px]"
                    alt="Vector"
                    src={vector35Svg}
                  />
                </div>
                <div className="text-base font-bold text-white left-7 tracking-0 leading-normal absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[2px] whitespace-nowrap">
                  20
                </div>
              </div>
            </div>
          </div>

          {/* Second row - DR COINS, CHEMICALS, SEEDS */}
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border border-[#666666] rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-1 flex-col gap-1 justify-center p-2">
              <div className="text-sm font-bold text-white tracking-0 leading-normal -mt-[1px] text-center whitespace-nowrap">
                DR COINS
              </div>
              <div className="h-6 relative w-[53px]">
                <div className="bg-[#666666] rounded-full h-6 left-0 absolute top-0 w-6 flex items-center justify-center">
                  <img
                    className="h-4 w-4"
                    alt="Subtract"
                    src={subtract7Svg}
                  />
                </div>
                <div className="text-base font-bold text-white left-7 tracking-0 leading-normal absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[2px] whitespace-nowrap">
                  100
                </div>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border border-[#666666] rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-1 flex-col gap-1 justify-center p-2">
              <div className="text-sm font-bold text-white tracking-0 leading-normal -mt-[1px] text-center whitespace-nowrap">
                CHEMICALS
              </div>
              <div className="h-6 relative w-[53px]">
                <div className="bg-[#666666] rounded-full h-6 left-0 absolute top-0 w-6 flex items-center justify-center">
                  <img
                    className="h-3 w-[10px]"
                    alt="Group"
                    src={group62Png}
                  />
                </div>
                <div className="text-base font-bold text-white left-7 tracking-0 leading-normal absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[2px] whitespace-nowrap">
                  20
                </div>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-b from-[#666666] to-[#454545] border border-[#666666] rounded shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-1 flex-col gap-1 justify-center p-2">
              <div className="text-sm font-bold text-white tracking-0 leading-normal -mt-[1px] text-center whitespace-nowrap">
                SEEDS
              </div>
              <div className="h-6 relative w-[53px]">
                <div className="bg-[#666666] rounded-full h-6 left-0 absolute top-0 w-6 flex items-center justify-center">
                  <img
                    className="h-[13px] w-[10px]"
                    alt="Layer"
                    src={layer117Svg}
                  />
                </div>
                <div className="text-base font-bold text-white left-7 tracking-0 leading-normal absolute text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[2px] whitespace-nowrap">
                  20
                </div>
              </div>
            </div>
          </div>

          {/* WALLET Section */}
          <div className="h-[124px] relative w-full">
            <div className="h-[124px] relative w-full">
              {/* Background rectangle */}
              <div className="bg-gradient-to-b from-[#666666] to-[#454545] border border-[#666666] rounded h-[124px] w-full" />

              {/* Disconnect button */}
              <Link
                className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-[#76e39d] rounded-[74px] gap-2 justify-center right-4 overflow-hidden p-2 absolute top-[14px] w-[104px]"
                to="/player/inventory"
              >
                <div className="text-xs font-semibold text-white tracking-[-0.36px] leading-normal -mt-[1px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap">
                  DISCONNECT
                </div>
              </Link>

              {/* Inner rectangle overlay */}
              <div className="bg-black/30 border border-white/20 rounded h-[113px] left-[6px] absolute top-[5px] right-[6px]" />

              {/* Wallet address section */}
              <div className="flex items-center bg-black/50 border border-white/40 rounded gap-[10px] h-[30px] justify-center left-4 py-[21px] px-4 absolute top-[14px] right-[120px]">
                <div className="flex items-center gap-2 -mb-[14px] -mt-[14px]">
                  <div className="h-[15px] w-4">
                    <img
                      className="h-[15px] w-4 object-cover"
                      alt="Wallet icon"
                      src={bpfdwnPng}
                    />
                  </div>
                  <div className="text-sm font-medium text-[#aeaeae] tracking-0 leading-normal -mb-[13.5px] -mt-[14.5px] whitespace-nowrap">
                    WALLET:
                  </div>
                </div>
                <div className="text-sm font-medium text-[#aeaeae] tracking-0 leading-normal -mb-[13.5px] -mt-[14.5px] whitespace-nowrap">
                  0xE5...13
                </div>
              </div>

              {/* Balance section - left part */}
              <div className="flex items-center bg-black/50 border-b border-l border-t border-white/40 rounded-[4px_0px_0px_4px] gap-[10px] h-[58px] justify-center left-[14px] overflow-hidden py-[21px] px-[25px] absolute top-[52px] w-[calc(100%-140px)]">
                <div className="flex items-center gap-2 -mb-[6px] -mt-[6px]">
                  <img className="h-[18px] w-[18px]" alt="Frame" src={frameSvg} />
                  <div className="text-2xl font-bold text-white tracking-0 leading-normal -mt-[1px] whitespace-nowrap">
                    $120.64
                  </div>
                </div>
              </div>

              {/* Network section - right part */}
              <div className="flex items-center bg-black/50 border border-white/40 rounded-[0px_4px_4px_0px] gap-[10px] justify-center right-[14px] overflow-hidden py-[21px] px-[25px] absolute top-[52px] w-[112px]">
                <div className="text-sm font-bold text-white tracking-0 leading-normal -ml-[5.5px] -mr-[5.5px] -mt-[0.5px] whitespace-nowrap">
                  Base Sepolia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SETTINGS Section */}
        <div className="h-[88px] left-4 absolute top-[365px] right-4">
          <div className="flex items-center gap-2 left-0 absolute top-12 w-full">
            <div className="flex items-center bg-gradient-to-b from-black to-[#414141] border border-[#666666] rounded-[74px] flex-1 gap-2 justify-center overflow-hidden py-1 px-4 pr-1">
              <div className="text-xs font-semibold text-[#aeaeae] tracking-0 leading-normal whitespace-nowrap">
                EFFECTS
              </div>
              <div className="bg-[#4ea138] rounded-full h-8 w-8 flex items-center justify-center">
                <div className="text-sm font-bold text-white tracking-0 leading-normal">
                  ON
                </div>
              </div>
            </div>

            <Link
              className="flex items-center bg-gradient-to-b from-black to-[#414141] border border-[#666666] rounded-[74px] flex-1 gap-2 justify-center overflow-hidden py-1 px-4 pr-1"
              to="/player/inventory"
            >
              <div className="text-xs font-semibold text-[#aeaeae] tracking-0 leading-normal whitespace-nowrap">
                VIBRATION
              </div>
              <div className="bg-[#4ea138] rounded-full h-8 w-8 flex items-center justify-center">
                <div className="text-sm font-bold text-white tracking-0 leading-normal">
                  ON
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-gradient-to-b from-[#333] to-[#666] border border-[#666666] rounded h-10 left-0 absolute top-0 w-full flex items-center justify-center">
            <div className="text-sm font-bold text-white">MUSIC TAB</div>
          </div>
        </div>
      </div>
    </div>
  );
};