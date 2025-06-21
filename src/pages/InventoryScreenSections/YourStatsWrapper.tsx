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
    <div className="md:border-none md:h-auto md:relative md:top-0 md:left-0 md:w-full border-b border-black h-[43px] left-0 absolute top-[250px] w-[393px]">
      <div className="md:flex md:items-center md:gap-6 md:left-0 md:relative md:top-0 md:w-full md:px-4 md:py-3 flex items-center gap-6 left-[22px] absolute top-3 w-[349px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`font-[Bangers] text-[22px] font-normal tracking-0 leading-normal -mt-[1px] relative whitespace-nowrap w-fit hover:text-white transition-colors ${
              activeTab === tab.id ? 'text-white' : 'text-[#aeaeae]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};