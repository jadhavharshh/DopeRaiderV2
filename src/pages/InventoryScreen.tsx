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
      <div className="flex flex-col h-screen w-full max-w-full md:hidden">
        <div className="bg-black h-full w-full relative flex flex-col">
          {/* Background Image - Fixed positioning */}
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="Telegram cloud photo"
            src={TelegramIMG}
          />

          {/* Gray Background Container with TopWrapper and YourStatsWrapper */}
          <div className="relative z-10 flex-shrink-0 bg-gradient-to-b from-[#303030] to-black">
            {/* Top Wrapper - Now includes logo */}
            <div className="px-0">
              <TopWrapper />
            </div>

            {/* Tab Navigation - At bottom of gray container */}
            <div className="pb-2">
              <YourStatsWrapper activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex-1 overflow-y-auto">
            {renderTabContent()}
          </div>

          {/* Bottom Navigation */}
          <div className="relative z-10 flex-shrink-0">
            <BottomNav3 onNotificationClick={() => setShowNotifications(true)} />
          </div>
        </div>
      </div>
      {showNotifications && <Notifications onClose={() => setShowNotifications(false)} />}
    </div>
  );
};