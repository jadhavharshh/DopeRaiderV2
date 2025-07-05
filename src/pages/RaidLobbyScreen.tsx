import React from "react";
import { PlayersWrapper } from "./RaidScreenSections/PlayersWrapper";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";
import { Top1 } from "./RaidScreenSections/Top1";
import type { JSX } from "react";
import { TopWrapper } from "./InventoryScreenSections/TopWrapper";

// Assuming image-7.png is in the public/img folder
import backgroundImageSrc from "@/static/img/image-7.png"; // Can be different if needed
import mobileBackgroundImageSrc from "@/static/img/image-7.png"; // Mobile specific background image
export const RaidLobbyScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout - up to 767px */}
      <div className="relative w-full h-screen overflow-hidden md:hidden">
        {/* Background Image & Effects - Mobile */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src={mobileBackgroundImageSrc}
        />
        {/* Simplified background effects */}
        <div className="absolute w-[229px] h-[433px] left-[calc(50%-114px)] top-[calc(50%+50px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-50" />
        <div className="absolute w-[117px] h-[333px] left-[calc(50%-170px)] top-[calc(50%-100px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-50" />
        <div className="absolute w-[127px] h-[433px] left-[calc(50%+100px)] top-[calc(50%-150px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-50" />

        {/* Content positioned absolutely like MarketScreen */}
        <div className="absolute w-full top-[40px] left-0 right-0 z-20">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[393px]">
              <Top1 />
            </div>
          </div>
        </div>

        <div className="absolute w-full top-[184px] bottom-[100px] left-0 right-0 z-20 px-4">
          <div className="w-full h-full flex justify-center">
            <PlayersWrapper />
          </div>
        </div>

        {/* Bottom Navigation - Simple absolute positioning */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <BottomNav3 />
        </div>
      </div>

      {/* Desktop Layout - 768px and above */}
      <div className="hidden md:block h-screen relative">
        {/* Background Image & Effects - Desktop */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Background"
          src={backgroundImageSrc}
        />
        <div className="absolute w-[229px] h-[433px] left-[calc(50%-100px)] top-[calc(50%+100px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-30" />
        <div className="absolute w-[117px] h-[333px] left-[calc(50%-250px)] top-[calc(50%-50px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-30" />
        <div className="absolute w-[127px] h-[433px] left-[calc(50%+200px)] top-[calc(50%-100px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-30" />

        {/* Top Left Profile Section */}
        <div className="absolute top-5 left-5 z-10 w-64 scale-75 origin-top-left">
          <TopWrapper />
        </div>

        {/* Central Content Panel - Simplified */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[393px] h-[700px]">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30 h-full flex flex-col">
            <div className="flex-shrink-0">
              <Top1 />
            </div>
            <div className="flex-1 overflow-hidden px-4 pt-2">
              <PlayersWrapper />
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Simple absolute positioning */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <BottomNav3 />
        </div>
      </div>
    </div>
  );
};