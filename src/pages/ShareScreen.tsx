import React from "react";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react";

// Import images and icons from the project
import bgImage from "@/static/img/sharebg.png";
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

// Updated Social media icons with proper colors
const TelegramIcon = () => (
  <div className="w-8 h-8 rounded-full bg-[#0088cc] flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.99 4L18.22 20.02C18.22 20.02 17.78 21.26 16.54 20.58L9.5 15.5L7 20L5.5 18.5L6.89 13.89L2.89 11.89C2.89 11.89 2.25 11.61 2.31 11.05C2.37 10.49 3.13 10.21 3.13 10.21L20.75 3.13C20.75 3.13 21.99 2.37 21.99 4Z" fill="white"/>
    </svg>
  </div>
);

const XIcon = () => (
  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gray-600">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
    </svg>
  </div>
);

const MessengerIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#00B2FF] to-[#006AFF] flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.36 2 2 6.13 2 11.2C2 14.12 3.19 16.84 5.22 18.64C5.22 18.64 5.33 18.75 5.41 18.84L5.22 21.17C5.17 21.69 5.69 22.05 6.15 21.8L8.85 20.35C9.24 20.12 9.73 20.12 10.12 20.35C10.74 20.46 11.37 20.52 12 20.52C17.64 20.52 22 16.39 22 11.32C22 6.13 17.64 2 12 2ZM13.96 14.23L11.26 11.2L6.44 14.23L11.74 8.77L14.44 11.8L19.26 8.77L13.96 14.23Z" fill="white"/>
    </svg>
  </div>
);

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
      <div className="w-full flex items-center justify-center m-10 z-20">
        <img src={logo} alt="Doperaider Logo" className="h-7" />

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
        <div className="flex items-center gap-3 bg-black/70 border border-white/20 rounded-full px-6 py-2">
          <span className="font-['Roboto_Condensed'] font-bold text-sm text-white/90 uppercase tracking-wide">SHARE</span>
          <TelegramIcon />
          <XIcon />
          <MessengerIcon />
        </div>
        <button onClick={() => navigate(-1)} className="bg-gradient-to-b from-neutral-800 to-black border border-white/20 rounded-full px-10 py-2 font-['Roboto_Condensed'] font-bold text-sm text-white/90 hover:from-neutral-700 transition-colors">
          CLOSE
        </button>
      </div>

      {/* Footer elements - Updated Trophy Section */}
      <div className="absolute bottom-4 flex justify-between items-end w-full px-4 pointer-events-none">
        {/* Updated Trophy Section to match the image exactly */}
        <div className="relative">
          {/* Main trophy container with rounded corners and glow effect */}
          <div className="bg-gradient-to-b from-black/90 via-black/80 to-black/70 rounded-xl border border-white/20 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 px-4 py-3">
              {/* Trophy icon with golden glow */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF8C00] flex items-center justify-center shadow-lg border border-yellow-400/30">
                  <img src={trophyIcon} alt="Trophy" className="w-6 h-6 filter brightness-110" />
                </div>
                {/* Glow effect behind trophy */}
                <div className="absolute inset-0 w-10 h-10 rounded-full bg-yellow-400/20 blur-md -z-10"></div>
              </div>
              
              {/* Trophy text */}
              <div className="flex flex-col">
                <span className="font-['Bangers'] text-xl text-[#FFD700] tracking-wide leading-tight drop-shadow-md">
                  16 TROPHIES
                </span>
              </div>
            </div>
          </div>
          
          {/* Additional glow effect for the entire container */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 rounded-xl blur-xl -z-20"></div>
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