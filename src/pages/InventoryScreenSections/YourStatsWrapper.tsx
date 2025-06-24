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

  return (
    <div className="border-b border-black h-[50px] w-full
                   md:border-none md:h-auto md:min-h-[50px]">
      <div className="flex items-center gap-2 justify-center px-2 py-3 w-full h-full
                     md:gap-3 md:px-4 md:justify-center lg:justify-start lg:gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`font-[Bangers] text-[20px] font-normal tracking-0 leading-normal 
                       relative whitespace-nowrap flex-1 text-center
                       sm:text-[22px] md:text-[22px] lg:text-[24px] md:flex-none md:w-fit
                       hover:text-white transition-colors duration-200 
                       ${activeTab === tab.id ? 'text-white' : 'text-[#aeaeae]'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};