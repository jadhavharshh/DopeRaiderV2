import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import images using Vite paths
import bgImage from "@/static/img/image-1.png";
import profilePicTony from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-2.png";
import profilePicRada from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-11.png"; // UPDATED: Correct avatar for RADA
import nameTagBg from "@/static/img/name-tag.svg";
import winnerBg from "@/static/img/organic-grunge-bold-shapes-4.svg";
import resultBg from "@/static/img/organic-grunge-bold-shapes-5.svg";
import weaponPistol from "@/static/img/pistol-1.png";
import weaponRifle from "@/static/img/pistol-1-1.png"; // UPDATED: Correct rifle image
import weaponCardBg from "@/static/img/5-1.png"; // NEW: Background for weapon display

import respectIcon from "@/static/img/vector-5.svg"; // Respect icon
import cokeIcon from "@/static/img/vector-6.svg"; // Coke icon
import weedIcon from "@/static/img/vector-7.svg"; // Weed icon

// Sub-component for displaying stat changes (+10, -3, etc.)
const StatChange = ({ icon, value, positive }) => (
  <div className={`flex items-center justify-between w-28 px-3 py-1.5 rounded-lg ${positive ? 'bg-gradient-to-b from-[#10341d] to-[#318952]' : 'bg-gradient-to-b from-[#0a0a28] to-[#49497f]'} border border-white/20`}>
    <img src={icon} alt="stat icon" className="w-5 h-5" />
    <span className="text-white font-['Roboto_Condensed'] font-bold text-lg">
      {value > 0 ? `+${value}` : value}
    </span>
  </div>
);

// Sub-component for displaying the weapon on its card
const WeaponDisplay = ({ src, alt }) => (
    <div 
        className="w-32 h-32 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${weaponCardBg})` }}
    >
        <img src={src} alt={alt} className="w-24 h-24 object-contain" />
    </div>
);

// Main player card component, updated to match the image layout
const PlayerCard = ({ player, weapon, isWinner, statChanges }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative">
      <div className="absolute -top-4 w-full flex justify-center z-10">
        <div 
          className="bg-cover bg-center w-32 h-12 flex items-center justify-center" 
          style={{ backgroundImage: `url(${isWinner ? winnerBg : resultBg})`}}
        >
          <span className="text-white font-['Roboto_Condensed',_Helvetica] text-base font-bold">
            {isWinner ? "WINNER!" : "DEFEATED"}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        {isWinner && (
          <div className="flex flex-col gap-2">
            {statChanges.map((change, index) => <StatChange key={index} {...change} positive />)}
          </div>
        )}
        {!isWinner && <WeaponDisplay src={weapon.src} alt={weapon.alt} />}
        
        <img src={player.avatar} alt={player.name} className="w-32 h-32 rounded-full object-cover border-4 border-gray-600" />
        
        {isWinner && <WeaponDisplay src={weapon.src} alt={weapon.alt} />}
        {!isWinner && (
          <div className="flex flex-col gap-2">
            {statChanges.map((change, index) => <StatChange key={index} {...change} positive={false} />)}
          </div>
        )}
      </div>
    </div>
    <div className="relative -mt-4">
      <img src={nameTagBg} alt="name tag" className="w-48 h-12" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-['Bangers',_Helvetica] text-3xl tracking-wider">{player.name}</span>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <div className="flex items-center gap-2 bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-white/20 rounded-md px-3 py-1"><img src={respectIcon} className="w-4 h-4" /> <span className="text-white font-bold">{player.stats.respect}</span></div>
      <div className="flex items-center gap-2 bg-gradient-to-b from-[#2a2a2a] to-[#8992a5] border border-white/20 rounded-md px-3 py-1"><img src={cokeIcon} className="w-4 h-4" /> <span className="text-white font-bold">{player.stats.coke}</span></div>
      <div className="flex items-center gap-2 bg-gradient-to-b from-[#10341d] to-[#318952] border border-white/20 rounded-md px-3 py-1"><img src={weedIcon} className="w-4 h-4" /> <span className="text-white font-bold">{player.stats.weed}</span></div>
    </div>
  </div>
);

export const RaidWinScreen = (): JSX.Element => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/raid'); // Or wherever it should go
    }
  }, [countdown, navigate]);

  const defeatedPlayer = { 
    name: "TONY MONTNA", 
    avatar: profilePicTony, 
    stats: { respect: 100, coke: 20, weed: 50 },
    statChanges: [
      { icon: respectIcon, value: -10 },
      { icon: cokeIcon, value: -3 },
      { icon: weedIcon, value: -10 },
    ]
  };
  const winnerPlayer = { 
    name: "RADA", 
    avatar: profilePicRada, 
    stats: { respect: 100, coke: 20, weed: 50 },
    statChanges: [
      { icon: respectIcon, value: 10 },
      { icon: cokeIcon, value: 3 },
      { icon: weedIcon, value: 10 },
    ]
  };

  const renderContent = () => (
    <>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 flex flex-col h-full justify-between items-center py-6">
        <div className="w-full flex justify-between items-center px-4 absolute top-4">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white font-['Roboto_Condensed'] font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="flex items-center gap-2">
                <button className="text-white p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <button className="text-white p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                </button>
            </div>
        </div>
        <h1 className="text-white font-['Bangers',_Helvetica] text-4xl tracking-wider mt-16">RAIDING...</h1>
        
        <div className="w-full flex flex-col items-center gap-4">
          <PlayerCard player={defeatedPlayer} weapon={{ src: weaponPistol, alt: "Pistol" }} isWinner={false} statChanges={defeatedPlayer.statChanges} />
          
          <div className="bg-cover bg-center w-80 h-24 flex flex-col items-center justify-center my-4" style={{ backgroundImage: `url(${resultBg})`}}>
            <div className="text-[#bbf88e] font-['Bangers',_Helvetica] text-2xl">YOU WIN!</div>
            <p className="font-['Bangers',_Helvetica] text-2xl text-white">
              YOUR RIFLE BEATS THEIR PISTOL
            </p>
          </div>

          <PlayerCard player={winnerPlayer} weapon={{ src: weaponRifle, alt: "Rifle" }} isWinner={true} statChanges={winnerPlayer.statChanges} />
        </div>

        <p className="text-white font-['Bangers',_Helvetica] text-2xl">
          CLOSING IN {countdown} SECONDS...
        </p>
      </div>
    </>
  );

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-screen w-full min-w-[390px] relative">
        {renderContent()}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[420px] h-[95vh] max-h-[850px] flex flex-col scale-90 lg:scale-100">
          <div className="relative w-full h-full">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};