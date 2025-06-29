import React from "react";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react";

// Import images and icons from the project
import bgImage from "@/static/img/5-1-1.png";
import logo from "@/static/img/logo-1.svg";
import profilePic from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-11.png";
import nameTagBg from "@/static/img/organic-grunge-bold-shapes-26.svg";
import respectIcon from "@/static/img/9athga-12.png";
import cokeIcon from "@/static/img/icon-57.png";
import weedIcon from "@/static/img/icon-58.png";
import closeIcon from "@/static/img/union-4.svg";
import trophyIcon from "@/static/img/9athga-8.png";
import mapSnippet from "@/static/img/maskgroupjamaica.png";
import tonIcon from "@/static/img/icon-1.svg";
import union from "@/static/img/union.svg";
import union1 from "@/static/img/union-1.svg";
import union2 from "@/static/img/union-2.svg";

// Social media icons
const TelegramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const XIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const MessengerIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12H8.01M12 12H12.01M16 12H16.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

// Component from ActiveRaidScreen for stats display
const RaidStatsDisplay = ({ raids, wins, losses }: { raids: number; wins: number; losses: number }) => (
  <div className="relative w-[246px] h-[126px]">
    {/* Raids Box */}
    <div className="absolute top-[8px] left-0 w-[82px] h-[110px] p-px rounded-l-[4px] bg-gradient-to-b from-black to-gray-500">
      <div className="relative w-full h-full rounded-l-[3px] bg-gradient-to-b from-black to-gray-500 overflow-hidden">
        <div className="relative h-[218px] w-[218px] top-[-69px] left-[-66px]">
          <div className="absolute top-[30px] left-[34px] rotate-45">
            <img className="w-[82px] h-[110px] mix-blend-overlay -rotate-45" alt="Union" src={union} />
          </div>
          <div className="absolute top-[83px] left-[88px] text-white font-['Roboto_Condensed'] text-base font-bold">RAIDS</div>
          <div className="absolute top-[106px] left-[96px] text-white font-['Roboto_Condensed'] text-5xl font-bold" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.4)' }}>{raids}</div>
        </div>
      </div>
    </div>
    {/* Losses Box */}
    <div className="absolute top-[8px] left-[162px] w-[82px] h-[110px] p-px rounded-r-[4px] bg-gradient-to-b from-black to-gray-500">
      <div className="relative w-full h-full rounded-r-[3px] bg-gradient-to-b from-black to-gray-500 overflow-hidden">
        <div className="relative h-[218px] w-[218px] top-[-43px] left-[-62px]">
          <div className="absolute top-[30px] left-[34px] -rotate-45">
            <img className="w-[82px] h-[110px] mix-blend-overlay rotate-45" alt="Union" src={union1} />
          </div>
          <div className="absolute top-[57px] left-[78px] text-white font-['Roboto_Condensed'] text-base font-bold">LOSSES</div>
          <div className="absolute top-[80px] left-[91px] text-white font-['Roboto_Condensed'] text-5xl font-bold" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.4)' }}>{losses}</div>
        </div>
      </div>
    </div>
    {/* Wins Box (Highlighted) */}
    <div className="absolute top-0 left-[81px] w-[82px] h-[126px] p-px rounded-[4px] bg-gradient-to-b from-[#3ce000] to-[#5bff8f]">
      <div className="relative w-full h-full rounded-[3px] bg-gradient-to-b from-[#4ea138] to-[#143e23] overflow-hidden">
        <div className="relative h-[218px] w-[218px] top-[-39px] left-[-65px]">
          <div className="absolute top-[1px] left-[13px] w-[55px] h-[130px] bg-[#72ff00] rounded-[27.5px/65px] blur-[27px] mix-blend-color rotate-90" />
          <div className="absolute top-[30px] left-[34px] rotate-45">
            <img className="w-[82px] h-[126px] mix-blend-overlay -rotate-45" alt="Union" src={union2} />
          </div>
          <div className="absolute top-[61px] left-[89px] text-white font-['Roboto_Condensed'] text-base font-bold">WINS</div>
          <div className="absolute top-[84px] left-[94px] text-white font-['Roboto_Condensed'] text-5xl font-bold tracking-[-2.88px]" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.4)' }}>{wins}</div>
        </div>
      </div>
    </div>
  </div>
);

const ResourceStat = ({ icon, value, gradientClass }: { icon: string; value: string | number; gradientClass: string; }) => (
  <div className={`flex items-center gap-1 ${gradientClass} border border-white/20 rounded-md px-2 py-0.5`}>
    <img src={icon} alt="resource icon" className="w-3 h-3" />
    <span className="text-white font-['Roboto_Condensed'] font-bold text-sm">{value}</span>
  </div>
);

const ShareScreenContent = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-4 text-white overflow-hidden">
      {/* Header */}
      <div className="w-full flex items-center justify-between z-20">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-black/50 rounded-full px-3 py-1.5 border border-white/20 hover:bg-black/70 transition-colors">
          <img src={closeIcon} alt="Close" className="w-3 h-3" />
          <span className="text-white font-['Roboto_Condensed'] text-sm">Close</span>
        </button>
        <img src={logo} alt="Doperaider Logo" className="h-7" />
        <div className="flex items-center gap-2">
          <button className="bg-black/50 rounded-full p-2 border border-white/20 hover:bg-black/70 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="bg-black/50 rounded-full p-2 border border-white/20 hover:bg-black/70 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 13C5.5523 13 6 12.5523 6 12C6 11.4477 5.5523 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 mt-4">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full border-4 border-white bg-gray-800 overflow-hidden shadow-lg">
            <img src={profilePic} alt="Rada" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-32 h-10 -mt-4">
            <img src={nameTagBg} alt="Name Tag" className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center font-['Bangers'] text-xl text-white tracking-wider">RADA</div>
          </div>
        </div>

        <RaidStatsDisplay raids={5} wins={3} losses={2} />

        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2 bg-black/50 border border-white/20 rounded-lg px-4 py-1.5">
            <img src={tonIcon} alt="TON" className="w-5 h-5" />
            <span className="font-['Roboto_Condensed'] text-lg font-bold">$120.64</span>
          </div>
          <div className="flex items-center gap-2">
            <ResourceStat icon={respectIcon} value={100} gradientClass="bg-gradient-to-b from-[#0a0a28] to-[#49497f]" />
            <ResourceStat icon={cokeIcon} value={20} gradientClass="bg-gradient-to-b from-[#2a2a2a] to-[#8992a5]" />
            <ResourceStat icon={weedIcon} value={50} gradientClass="bg-gradient-to-b from-[#10341d] to-[#318952]" />
          </div>
        </div>
      </div>

      {/* Share & Close buttons */}
      <div className="w-full flex flex-col items-center gap-3 z-20">
        <div className="flex items-center gap-2 bg-black/60 border border-white/20 rounded-full px-4 py-1.5">
          <span className="font-['Roboto_Condensed'] font-bold text-sm text-white/80 uppercase mr-1">Share</span>
          <button className="w-9 h-9 rounded-full bg-gradient-to-b from-neutral-700 to-black flex items-center justify-center border border-white/10 hover:from-neutral-600 transition-colors"><TelegramIcon /></button>
          <button className="w-9 h-9 rounded-full bg-gradient-to-b from-neutral-700 to-black flex items-center justify-center border border-white/10 hover:from-neutral-600 transition-colors"><XIcon /></button>
          <button className="w-9 h-9 rounded-full bg-gradient-to-b from-neutral-700 to-black flex items-center justify-center border border-white/10 hover:from-neutral-600 transition-colors"><MessengerIcon /></button>
        </div>
        <button onClick={() => navigate(-1)} className="bg-gradient-to-b from-neutral-800 to-black border border-white/20 rounded-full px-10 py-2 font-['Roboto_Condensed'] font-bold text-sm text-white/90 hover:from-neutral-700 transition-colors">
          CLOSE
        </button>
      </div>

      {/* Footer elements */}
      <div className="absolute bottom-4 flex justify-between items-end w-full px-4 pointer-events-none">
        <div className="bg-black/80 rounded-md p-3 flex flex-col items-center gap-1 z-20 border border-white/10">
          <div className="w-9 h-9 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center border border-amber-200/50">
            <img src={trophyIcon} alt="Trophy" className="w-6 h-6" />
          </div>
          <span className="font-['Bangers'] text-lg text-amber-400 tracking-wide">16 TROPHIES</span>
        </div>
        <img src={mapSnippet} alt="Jamaica Village" className="w-40 h-auto" />
      </div>
    </div>
  );
};

export const ShareScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-screen w-full min-w-[390px] relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="w-full max-w-[393px] mx-auto h-full">
            <ShareScreenContent />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[393px] h-[852px] max-h-[90vh] flex flex-col scale-90 lg:scale-100 origin-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30 h-full flex flex-col overflow-hidden">
            <ShareScreenContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareScreen;