import React from "react";
import type { JSX } from "react";

interface YourStatsWrapperProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const YourStatsWrapper = ({ activeTab, onTabChange }: YourStatsWrapperProps): JSX.Element => {
  const tabs = [
    { id: 'inventory', label: 'INVENTORY' },
    { id: 'upgrades', label: 'UPGRADES' },
    { id: 'social', label: 'SOCIAL' },
    { id: 'trophies', label: 'TROPHIES' }
  ];

  const getActiveTabIndex = () => {
    return tabs.findIndex(tab => tab.id === activeTab);
  };

  return (
    <div className="border-b border-black h-[50px] w-full max-w-[393px] mx-auto
                   md:border-none md:h-auto md:min-h-[50px] md:max-w-none relative">
      <div className="flex items-center gap-2 justify-center px-2 py-3 w-full h-full
                     md:gap-3 md:px-4 md:justify-center lg:justify-start lg:gap-6 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`font-[Bangers] text-[22px] font-normal tracking-0 leading-normal 
                       relative whitespace-nowrap flex-1 text-center
                       md:text-[22px] lg:text-[24px] md:flex-none md:w-fit
                       hover:text-white transition-colors duration-200 
                       ${activeTab === tab.id ? 'text-white' : 'text-[#aeaeae]'}`}
          >
            {tab.label}
          </button>
        ))}
        
        {/* Yellow underline indicator */}
        <div 
          className="absolute bottom-0 h-1 bg-yellow-400 transition-all duration-300 ease-in-out"
          style={{
            width: `${100 / tabs.length}%`,
            left: `${(getActiveTabIndex() * 100) / tabs.length}%`,
          }}
        />
      </div>
    </div>
  );
};