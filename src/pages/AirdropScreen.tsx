import React, { useState, useMemo } from "react";
import type { JSX } from "react";

// Import images
import bgImage from "@/static/img/RaidBG.png";
import logo from "@/static/img/logo-1.svg";
import grungeShape from "@/static/img/organic-grunge-bold-shapes-6.svg";
import airdropCrate from "@/static/img/airdrop-1.png";
import cokeIcon from "@/static/img/vector-13.svg";
import chemicalsIcon from "@/static/img/group-6.png";
import seedsIcon from "@/static/img/layer-1-2.svg";
import weedIcon from "@/static/img/vector-14.svg";
import exitIcon from "@/static/img/vector-15.svg";
import ellipse4 from "@/static/img/ellipse-4.svg";
import ellipse4_1 from "@/static/img/ellipse-4-1.svg";
import ellipse4_2 from "@/static/img/ellipse-4-2.svg";
import ellipse4_3 from "@/static/img/ellipse-4-3.svg";

// Import Icon Components
import { InfoIcon } from "@/icons/InfoIcon/InfoIcon";
import { BagIcon } from "@/icons/BagIcon/BagIcon";

const SliderKnob = ({ style }: { style?: React.CSSProperties }) => (
  <div className="absolute top-1/2 -translate-y-1/2 h-[16px] w-[16px] p-px rounded-full bg-gradient-to-b from-gray-300 to-gray-800 pointer-events-none" style={style}>
    <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-400 to-gray-600 shadow-md" />
  </div>
);

const ItemCard = ({ title, titleColor, itemCount, iconUrl, iconBgUrl, iconAlt, value, max, gradientClass, onValueChange, onSetAll }: { title: string; titleColor: string; itemCount: number; iconUrl: string; iconBgUrl: string; iconAlt: string; value: number; max: number; gradientClass: string; onValueChange: (value: number) => void; onSetAll: () => void; }) => {
  const sliderPercentage = (value / max) * 100;
  return (
    <div className="w-[160px] p-px z-100 rounded bg-gradient-to-b from-[#4a4a4a] to-black">
      <div className={`flex flex-col items-center gap-2 pt-2 pb-0 rounded overflow-hidden ${gradientClass}`}>
        <div className="relative w-full h-[44px]">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-['Roboto_Condensed'] text-sm font-bold ${titleColor}`}>{title}</div>
          <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="relative w-6 h-6 bg-no-repeat bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${iconBgUrl})` }}>
              <img className="h-[15px] w-auto" alt={iconAlt} src={iconUrl} />
            </div>
            <div className="text-white font-['Roboto_Condensed'] text-2xl font-bold text-center" style={{ textShadow: '0px 2px 2px #00000080' }}>{itemCount}</div>
          </div>
        </div>
        <div className="w-full p-2 flex items-center gap-2 bg-black/60 border-t border-t-white/10">
          <div className="text-white font-['Roboto_Condensed'] text-xl font-semibold w-6 text-center">{value}</div>
          <div className="relative flex-1 h-2 flex items-center">
            <div className="absolute h-1.5 bg-[#1a1a1a] rounded-full w-full" />
            <div className="absolute h-1.5 bg-gray-500 rounded-full" style={{ width: `${sliderPercentage}%` }} />
            <SliderKnob style={{ left: `${sliderPercentage}%`, transform: 'translateX(-50%)' }} />
            <input
              type="range"
              min="0"
              max={max}
              value={value}
              onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <button onClick={onSetAll} className="text-gray-400 font-['Roboto_Condensed'] text-sm font-semibold hover:text-white transition-colors">ALL</button>
        </div>
      </div>
    </div>
  );
};

const AirdropContent = (): JSX.Element => {
  const itemData = useMemo(() => [
    { id: 'coke', title: "COKE", titleColor: "text-white", itemCount: 5, iconUrl: cokeIcon, iconBgUrl: ellipse4, iconAlt: "Coke", gradientClass: "bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]" },
    { id: 'weed', title: "WEED", titleColor: "text-[#5BFF8E]", itemCount: 5, iconUrl: weedIcon, iconBgUrl: ellipse4_3, iconAlt: "Weed", gradientClass: "bg-gradient-to-b from-[#10341d] to-[#318952]" },
    { id: 'chemicals', title: "CHEMICALS", titleColor: "text-white", itemCount: 5, iconUrl: chemicalsIcon, iconBgUrl: ellipse4_1, iconAlt: "Chemicals", gradientClass: "bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]" },
    { id: 'seeds', title: "SEEDS", titleColor: "text-white", itemCount: 5, iconUrl: seedsIcon, iconBgUrl: ellipse4_2, iconAlt: "Seeds", gradientClass: "bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]" },
  ], []);

  const [itemValues, setItemValues] = useState(() => 
    Object.fromEntries(itemData.map(item => [item.id, 0]))
  );

  const handleValueChange = (id: string, value: number) => {
    setItemValues(prev => ({ ...prev, [id]: value }));
  };

  const handleSetAll = (id: string) => {
    const item = itemData.find(i => i.id === id);
    if (item) {
      setItemValues(prev => ({ ...prev, [id]: item.itemCount }));
    }
  };

  const totalSelected = Object.values(itemValues).reduce((sum, val) => sum + val, 0);

  return (
    <div className="flex flex-col items-center gap-6 w-full px-4">
      <img src={logo} alt="Doperaider Logo" className="h-7 my-4" />

      <div className="flex flex-col items-center">
        <img src={airdropCrate} alt="Airdrop Crate" className="w-[101px] h-auto z-10" />
        <div className="relative w-[274px] h-[99px] -mt-12">
          <img className="absolute inset-0 w-full h-full" alt="Grunge Shape" src={grungeShape} />
          <div className="absolute inset-0 flex items-center justify-center mt-4 font-['Bangers'] text-[22px] whitespace-nowrap bg-gradient-to-r from-[#FFDCA5] to-[#D6B786] bg-clip-text text-transparent">
            REDEEM YOUR AIRDROP
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {itemData.map(item => (
          <ItemCard
            key={item.id}
            {...item}
            value={itemValues[item.id]}
            max={item.itemCount}
            onValueChange={(value) => handleValueChange(item.id, value)}
            onSetAll={() => handleSetAll(item.id)}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 w-full z-100 max-w-[328px]">
        <div className="inline-flex items-center gap-2 h-8 px-3 rounded bg-black/50 border border-white/20">
          <BagIcon className="w-5 h-5 text-amber-300" />
          <p className="font-['Roboto_Condensed'] text-lg font-bold">
            <span className="text-white">39</span>
            <span className="text-gray-400">/70</span>
          </p>
        </div>
        <div className="flex items-center gap-2 h-8 px-2 rounded bg-black/50 border border-white/20 flex-1">
          <InfoIcon className="w-5 h-5 flex-shrink-0" />
          <p className="text-white/80 font-['Roboto_Condensed'] text-[11px] font-semibold leading-tight uppercase">
            IF YOUR CARRY IS FULL YOU CAN CLAIM REMAINING REWARDS LATER
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 w-full mt-4">
        <button className="w-[220px] z-100 p-px rounded-full bg-gradient-to-b from-[#76e39d] to-[#6bba1c] shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-shadow">
          <div className="flex items-center justify-center w-full h-full py-3 rounded-full bg-gradient-to-b from-[#318952] to-[#10341d]">
            <p className="text-white font-['Roboto_Condensed'] text-base font-semibold tracking-tight" style={{ textShadow: '0px 2px 4px #00000060' }}>
              REDEEM SELECTED ( {totalSelected} )
            </p>
          </div>
        </button>
        <div className="inline-flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100">
          <img className="w-6 h-3" alt="Exit" src={exitIcon} />
          <div className="text-white font-['Bangers'] text-2xl tracking-wide" style={{ textShadow: '0px 4px 4px #00000040' }}>
            EXIT AIRDROP
          </div>
        </div>
      </div>
    </div>
  );
};

export const AirdropScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-screen w-full min-w-[390px] relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="w-full max-w-[393px] mx-auto py-4">
            <AirdropContent />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[393px] max-h-[90vh] flex flex-col scale-90 lg:scale-100 origin-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30 h-full flex flex-col overflow-y-auto scrollbar-hide">
            <AirdropContent />
          </div>
        </div>
      </div>
    </div>
  );
};