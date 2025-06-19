import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";
import { Scroll } from "./InventoryScreenSections/Scroll";
import { TopWrapper } from "./InventoryScreenSections/TopWrapper";
import { YourStatsWrapper } from "./InventoryScreenSections/YourStatsWrapper";
import type { JSX } from "react";
import TelegramIMG from "@/static/img/telegram-cloud-photo-size-4-5809685116522448568-y-1.png"
import TelegramChairIMG from "@/static/img/telegram-chair.png";
import Logo from "@/static/img/logo-1.svg";

export const InventoryScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout - unchanged */}
      <div className="md:hidden flex items-center justify-center h-screen w-screen">
        <div className="bg-black h-full w-[393px] relative overflow-hidden">
          <img
            className="absolute top-[15%] w-full object-cover h-[70%]"
            alt="Telegram cloud photo"
            src={TelegramIMG}
          />

          <TopWrapper />
          <Scroll />
          <BottomNav3 />
          <YourStatsWrapper />

          <img
            className="h-7 absolute top-[7%] left-1/2 -translate-x-1/2 w-[157px]"
            alt="Logo"
            src={Logo}
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen relative">
        {/* Background Image for Desktop */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Background"
          src={TelegramChairIMG}
        />

        {/* Logo - Top Center */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <img
            className="h-8 lg:h-10 w-auto"
            alt="Logo"
            src={Logo}
          />
        </div>

        {/* Profile Section - Top Left - Scale down */}
        <div className="absolute top-5 left-5 lg:left-5 z-10 w-64 lg:w-72 scale-75 lg:scale-90 origin-top-left">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30">
            <TopWrapper />
          </div>
        </div>

        {/* Center Content - Scale down significantly */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-80 lg:w-96 h-96 lg:h-[28rem] scale-75 lg:scale-85">
          {/* Scroll Content */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30 h-full">
            <div className="relative h-full flex flex-col">
              <div className="flex-shrink-0">
                {/* Your Stats Wrapper */}
                <YourStatsWrapper />
              </div>
              <div className="flex-1 overflow-hidden">
                <Scroll />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Desktop version with scaling */}
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