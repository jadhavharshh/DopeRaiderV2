import React, { useRef, useEffect, useState } from "react";
import type { JSX } from "react";

interface YourStatsWrapperProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const YourStatsWrapper = ({ activeTab, onTabChange }: YourStatsWrapperProps): JSX.Element => {
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs = [
    { id: 'inventory', label: 'INVENTORY' },
    { id: 'upgrades', label: 'UPGRADES' },
    { id: 'social', label: 'SOCIAL' },
    { id: 'trophies', label: 'TROPHIES' }
  ];

  const getActiveTabIndex = () => {
    return tabs.findIndex(tab => tab.id === activeTab);
  };

  useEffect(() => {
    const activeIndex = getActiveTabIndex();
    const activeButton = buttonRefs.current[activeIndex];
    
    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = activeButton.parentElement?.getBoundingClientRect();
      
      if (containerRect) {
        // Calculate text width by measuring the actual text content
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          const computedStyle = window.getComputedStyle(activeButton);
          context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;
          const textWidth = context.measureText(tabs[activeIndex].label).width;
          
          // Center the underline under the text
          const buttonCenterX = buttonRect.left - containerRect.left + (buttonRect.width / 2);
          const underlineLeft = buttonCenterX - (textWidth / 2);
          
          setUnderlineStyle({
            width: textWidth,
            left: underlineLeft
          });
        }
      }
    }
  }, [activeTab]);

  return (
    <div className="border-b border-black h-[50px] w-full max-w-[393px] mx-auto
                   md:border-none md:h-auto md:min-h-[50px] md:max-w-none relative">
      <div className="flex items-center gap-2 justify-center px-2 py-3 w-full h-full
                     md:gap-3 md:px-4 md:justify-center lg:justify-center xl:justify-center relative">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={el => buttonRefs.current[index] = el}
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
        
        {/* Yellow underline indicator - now sized to text width */}
        <div 
          className="absolute bottom-0 h-1 bg-yellow-400 transition-all duration-300 ease-in-out"
          style={{
            width: `${underlineStyle.width}px`,
            left: `${underlineStyle.left}px`,
          }}
        />
      </div>
    </div>
  );
};