import React from "react";
import { PlayersWrapper } from "./RaidScreenSections/PlayersWrapper";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";
import { Top1 } from "./RaidScreenSections/Top1";
import type { JSX } from "react";

// Assuming image-7.png is in the public/img folder
import backgroundImageSrc from "@/static/img/image-7.png"; // Can be different if needed
import mobileBackgroundImageSrc from "@/static/img/image-7.png"; // Mobile specific background image
export const RaidLobbyScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout - up to 767px */}
      <div className="flex flex-col h-screen w-full min-w-[390px] md:hidden">
        <div className="bg-black h-full w-full relative flex flex-col">
          {/* Background Image & Effects - Mobile */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Background"
              src={mobileBackgroundImageSrc}
            />
            {/* Ellipse effects - Adjusted for screen-relative positioning */}
            <div className="absolute w-[229px] h-[433px] left-[calc(50%-114px)] top-[calc(50%+50px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-50" />
            <div className="absolute w-[117px] h-[333px] left-[calc(50%-170px)] top-[calc(50%-100px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-50" />
            <div className="absolute w-[127px] h-[433px] left-[calc(50%+100px)] top-[calc(50%-150px)] bg-white rounded-full blur-[27px] mix-blend-soft-light opacity-50" />
            <div className="absolute w-[406px] h-[906px] left-[calc(50%-203px)] top-[-150px] bg-black opacity-30 blur-[27px] mix-blend-soft-light rotate-90" />
            <div className="absolute w-[250px] h-[558px] left-[calc(50%-125px)] top-[-50px] bg-black opacity-60 blur-[27px] mix-blend-soft-light rotate-90" />
          </div>

          {/* Top Bar */}
          <div className="relative z-10 flex-shrink-0">
            <Top1 />
          </div>

          {/* Main Content - PlayersWrapper */}
          <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide px-[15px] pt-1">
            <PlayersWrapper />
          </div>

          {/* Original SHADOW div is commented out as its placement in responsive design is unclear without visual context */}
          {/* <div className="bg-black rounded-full blur-[27px] h-[478px] left-[120px] opacity-80 fixed top-[490px] transform rotate-90 w-[131px]" /> */}

          {/* Bottom Navigation */}
          <div className="relative z-10 flex-shrink-0">
            <BottomNav3 />
          </div>
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
        <div className="absolute w-[406px] h-[906px] left-[calc(50%-203px)] top-[-200px] bg-black opacity-20 blur-[27px] mix-blend-soft-light rotate-90" />
        <div className="absolute w-[250px] h-[558px] left-[calc(50%-125px)] top-[-100px] bg-black opacity-40 blur-[27px] mix-blend-soft-light rotate-90" />

        {/* Central Content Panel for Desktop */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
                     w-[393px] 
                     max-h-[90vh] 
                     flex flex-col
                     scale-90 lg:scale-100 origin-center"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30 h-full flex flex-col overflow-y-auto scrollbar-hide">
            <div className="flex-shrink-0">
              <Top1 />
            </div>
            <div className="flex-1 flex justify-center items-start pt-1">
              <PlayersWrapper />
            </div>
          </div>
        </div>

        {/* Bottom Navigation for Desktop */}
        <div className="fixed bottom-0 left-0 right-0 z-30">
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-30">
            <div className="scale-90 lg:scale-100 origin-bottom">
              <BottomNav3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};