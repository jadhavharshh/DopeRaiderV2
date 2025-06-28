import React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

// Import existing icons from the project
import iconWeed from "@/static/img/icon-58.png";
import iconRespect from "@/static/img/9athga-12.png"; // This is the 'respect' icon
import iconCoke from "@/static/img/icon-57.png";

// Placeholder icons for new graphics
const iconProduction = "/img/production-icon.svg";
const iconRaid = "/img/raid-icon.svg";

// Helper component for the main title and the close button
const TitleButton = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => {
  return (
    <button type="button" onClick={onClick} className={`p-px rounded-full bg-gradient-to-b from-black to-gray-500 ${className}`}>
      <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-b from-black to-gray-800">
        {children}
      </div>
    </button>
  );
};

// Component for a single notification item
const NotificationItem = ({ type, title, time, description, rewards, icon }: { type: 'production' | 'raid', title: string, time: string, description: string, rewards: { icon: string, amount: string }[], icon: string }): JSX.Element => {
  const styleConfig = {
    production: {
      container: "bg-gradient-to-b from-[#10341d] to-[#318952] border-[#76e39d]",
    },
    raid: {
      container: "bg-gradient-to-b from-[#4a1a1a] to-[#893131] border-[#ff6b6b]",
    },
  };

  return (
    <div className={`p-3 rounded-md mb-2 border ${styleConfig[type].container}`}>
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-white font-['Roboto_Condensed'] uppercase text-sm">{title}</h3>
        <span className="text-xs text-gray-300 font-['Roboto_Condensed']">{time}</span>
      </div>
      <p className="text-sm text-gray-200 my-2 font-['Roboto_Condensed']">{description}</p>
      <div className="flex justify-between items-end">
        <div className="flex flex-wrap gap-2">
          {rewards.map((reward, index) => (
            <div key={index} className="flex items-center gap-1 bg-black/40 rounded px-2 py-0.5 text-xs">
              <img src={reward.icon} alt="" className="w-4 h-4 object-contain" />
              <span className="font-bold text-white font-['Roboto_Condensed']">{reward.amount}</span>
            </div>
          ))}
        </div>
        <img src={icon} alt="" className="w-8 h-8 opacity-40" />
      </div>
    </div>
  );
};

export const Notifications = ({ onClose }: { onClose: () => void }): JSX.Element => {
  const notificationsData = [
    { type: 'production', title: 'PRODUCTION COMPLETE', time: '12 mins ago', description: 'Your production run of weed is complete.', rewards: [{ icon: iconWeed, amount: '+ 50' }], icon: iconProduction },
    { type: 'raid', title: 'YOU GOT RAIDED!', time: '1 day ago', description: 'A rival gang robbed your warehouse.', rewards: [{ icon: iconRespect, amount: '- 100' }, { icon: iconCoke, amount: '- 20' }], icon: iconRaid },
    { type: 'raid', title: 'YOU GOT RAIDED!', time: '2 day ago', description: 'A rival gang robbed your warehouse.', rewards: [{ icon: iconRespect, amount: '- 100' }, { icon: iconCoke, amount: '- 20' }], icon: iconRaid },
    { type: 'raid', title: 'YOU GOT RAIDED!', time: '2 day ago', description: 'A rival gang robbed your warehouse.', rewards: [{ icon: iconRespect, amount: '- 100' }, { icon: iconCoke, amount: '- 20' }], icon: iconRaid },
  ];

  return (
    <div 
      className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative w-[375px] max-h-[80vh] scale-90 md:scale-100" onClick={(e) => e.stopPropagation()}>
        
        {/* Main Panel */}
        <div className="w-[363px] p-px rounded-[4px] bg-gradient-to-b from-black to-gray-500 mt-4">
          <div className="relative w-full h-full rounded-[3px] bg-gradient-to-b from-black to-[#2b2b2b] p-4 pt-8">
            <div className="overflow-y-auto scrollbar-hide max-h-[calc(80vh-120px)]">
              {notificationsData.map((notification, index) => (
                <NotificationItem key={index} {...notification} />
              ))}
            </div>
          </div>
        </div>

        {/* Title - Positioned to overlap the top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="p-px rounded-[4px] bg-gradient-to-b from-black to-gray-500">
            <div className="inline-flex justify-center items-center gap-2.5 px-8 py-1 rounded-[3px] bg-gradient-to-b from-black to-gray-500">
              <div className="text-white font-['Bangers'] text-xl tracking-[0.42px] whitespace-nowrap -mt-px" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
                NOTIFICATIONS
              </div>
            </div>
          </div>
        </div>

        {/* Close Icon - Positioned at the top right corner */}
        <div className="absolute top-0 right-0">
          <TitleButton className="!w-10 !h-10" onClick={onClose}>
            <img className="w-4 h-4" alt="Close" src="/img/union-4.svg" />
          </TitleButton>
        </div>
      </div>
    </div>
  );
};