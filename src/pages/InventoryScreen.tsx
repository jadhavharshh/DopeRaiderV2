import { useState } from "react";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";
import { Scroll } from "./InventoryScreenSections/Scroll";
import { TopWrapper } from "./InventoryScreenSections/TopWrapper";
import { YourStatsWrapper } from "./InventoryScreenSections/YourStatsWrapper";
import { UpgradesContent } from "@/components/UpgradesContent";
import { TrophiesContent } from "@/components/TrophiesContent";
import { SocialContent } from "@/components/SocialContent";
import { Notifications } from "@/mini-components/Notifications";
import type { JSX } from "react";
import TelegramIMG from "@/static/img/telegram-cloud-photo-size-4-5809685116522448568-y-1.png";
import TelegramChairIMG from "@/static/img/telegram-chair.png";
import Logo from "@/static/img/logo-1.svg";

export const InventoryScreen = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("inventory");
  const [showNotifications, setShowNotifications] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "inventory":
        return <Scroll />;
      case "upgrades":
        return <UpgradesContent />;
      case "social":
        return <SocialContent />;
      case "trophies":
        return <TrophiesContent />;
      default:
        return <Scroll />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout - up to 767px */}
      <div className="flex flex-col h-screen w-full md:hidden overflow-hidden">
        <div className="bg-black h-full w-full relative flex flex-col overflow-hidden">
          {/* Background Image - Fixed positioning */}
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="Telegram cloud photo"
            src={TelegramIMG}
          />

          {/* Gray Background Container with TopWrapper and YourStatsWrapper */}
          <div className="relative z-10 flex-shrink-0 bg-gradient-to-b from-[#303030] to-black w-full">
            {/* Top Wrapper - Main profile content (includes logo) */}
            <div className="w-full">
              <TopWrapper />
            </div>

            {/* Tab Navigation - At bottom of gray container */}
            <div className="pb-2 w-full">
              <YourStatsWrapper activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden w-full">
            {renderTabContent()}
          </div>

          {/* Bottom Navigation */}
          <div className="relative z-10 flex-shrink-0 w-full">
            <BottomNav3 onNotificationClick={() => setShowNotifications(true)} />
          </div>
        </div>
      </div>

      {/* Desktop Layout - unchanged */}
      <div className="hidden md:block h-screen relative">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Background"
          src={TelegramChairIMG}
        />

        <div className="absolute top-4 md:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 z-20">
          <img
            className="h-6 md:h-8 lg:h-10 xl:h-12 w-auto"
            alt="Logo"
            src={Logo}
          />
        </div>

        <div
          className="absolute top-3 left-3 md:top-4 md:left-4 lg:top-5 lg:left-5 z-10 
                     w-48 sm:w-52 md:w-56 lg:w-64 xl:w-72 2xl:w-80
                     scale-50 sm:scale-60 md:scale-65 lg:scale-75 xl:scale-90 2xl:scale-100 
                     origin-top-left"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30">
            <TopWrapper onNotificationClick={() => setShowNotifications(true)} />
          </div>
        </div>

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
                     w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[26rem] 2xl:w-[30rem]
                     h-80 sm:h-[22rem] md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]
                     scale-60 sm:scale-65 md:scale-75 lg:scale-85 xl:scale-95 2xl:scale-100"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30 h-full">
            <div className="relative h-full flex flex-col">
              <div className="flex-shrink-0">
                <YourStatsWrapper activeTab={activeTab} onTabChange={setActiveTab} />
              </div>
              <div className="flex-1 overflow-hidden">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-30">
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-30">
            <div className="scale-60 sm:scale-70 md:scale-80 lg:scale-90 xl:scale-100 origin-bottom">
              <BottomNav3 />
            </div>
          </div>
        </div>
      </div>
      {showNotifications && <Notifications onClose={() => setShowNotifications(false)} />}
    </div>
  );
};