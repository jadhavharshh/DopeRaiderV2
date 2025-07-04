import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react";

// Image imports (Vite alias assumed to work)
import bgImage from "@/static/img/5-1-1.png";
import profilePicTony from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-2.png";
import profilePicRada from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-11.png";
import nameTagBg from "@/static/img/name-tag.svg";
import winnerBg from "@/static/img/organic-grunge-bold-shapes-4.svg";
import resultBg from "@/static/img/organic-grunge-bold-shapes-5.svg";
import weaponPistol from "@/static/img/pistol-1.png";
import weaponRifle from "@/static/img/pistol-1-1.png";
import weaponCardBg from "@/static/img/mask-group-1.png";

import respectIcon from "@/static/img/vector-5.svg";
import cokeIcon from "@/static/img/vector-6.svg";
import weedIcon from "@/static/img/vector-7.svg";

// Interfaces
interface Stat {
  respect: number;
  coke: number;
  weed: number;
}

interface StatChangeProps {
  icon: string;
  value: number;
  positive?: boolean;
}

interface Weapon {
  src: string;
  alt: string;
}

interface Player {
  name: string;
  avatar: string;
  stats: Stat;
  statChanges: StatChangeProps[];
}

interface PlayerCardProps {
  player: Player;
  weapon: Weapon;
  isWinner: boolean;
  statChanges: StatChangeProps[];
}

// StatChange component
const StatChange: React.FC<StatChangeProps> = ({ icon, value, positive }) => (
  <div
    className={`flex items-center justify-between w-24 px-2 py-1 rounded-md ${
      positive
        ? "bg-gradient-to-b from-[#10341d] to-[#318952]"
        : "bg-gradient-to-b from-[#0a0a28] to-[#49497f]"
    } border border-white/20`}
  >
    <img src={icon} alt="stat icon" className="w-4 h-4" />
    <span className="text-white font-['Roboto_Condensed'] font-bold text-base">
      {value > 0 ? `+${value}` : value}
    </span>
  </div>
);

// WeaponDisplay component
const WeaponDisplay: React.FC<Weapon> = ({ src, alt }) => (
  <div
    className="w-28 h-28 flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${weaponCardBg})` }}
  >
    <img src={src} alt={alt} className="w-20 h-20 object-contain" />
  </div>
);

// PlayerCard component
const PlayerCard: React.FC<PlayerCardProps> = ({ player, weapon, isWinner, statChanges }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="relative">
      <div className="absolute -top-3 w-full flex justify-center z-10">
        <div
          className="bg-cover bg-center w-28 h-10 flex items-center justify-center"
          style={{ backgroundImage: `url(${isWinner ? winnerBg : resultBg})` }}
        >
          <span className="text-white font-['Roboto_Condensed',_Helvetica] text-sm font-bold">
            {isWinner ? "WINNER!" : "DEFEATED"}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-6">
        {isWinner && (
          <div className="flex flex-col gap-1">
            {statChanges.map((change, index) => (
              <StatChange key={index} {...change} positive />
            ))}
          </div>
        )}
        {!isWinner && <WeaponDisplay src={weapon.src} alt={weapon.alt} />}
        <img
          src={player.avatar}
          alt={player.name}
          className="w-28 h-28 rounded-full object-cover border-2 border-gray-600"
        />
        {isWinner && <WeaponDisplay src={weapon.src} alt={weapon.alt} />}
        {!isWinner && (
          <div className="flex flex-col gap-1">
            {statChanges.map((change, index) => (
              <StatChange key={index} {...change} positive={false} />
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="relative -mt-3">
      <img src={nameTagBg} alt="name tag" className="w-40 h-10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-['Bangers',_Helvetica] text-2xl tracking-wider">
          {player.name}
        </span>
      </div>
    </div>
    <div className="flex items-center gap-1 mt-1">
      <div className="flex items-center gap-1 bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-white/20 rounded-md px-2 py-0.5">
        <img src={respectIcon} className="w-3 h-3" />{" "}
        <span className="text-white font-bold text-sm">{player.stats.respect}</span>
      </div>
      <div className="flex items-center gap-1 bg-gradient-to-b from-[#2a2a2a] to-[#8992a5] border border-white/20 rounded-md px-2 py-0.5">
        <img src={cokeIcon} className="w-3 h-3" />{" "}
        <span className="text-white font-bold text-sm">{player.stats.coke}</span>
      </div>
      <div className="flex items-center gap-1 bg-gradient-to-b from-[#10341d] to-[#318952] border border-white/20 rounded-md px-2 py-0.5">
        <img src={weedIcon} className="w-3 h-3" />{" "}
        <span className="text-white font-bold text-sm">{player.stats.weed}</span>
      </div>
    </div>
  </div>
);

// Main component
export const RaidWinScreen: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const timeout = setTimeout(() => {
        navigate("/raid");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [countdown, navigate]);

  const defeatedPlayer: Player = {
    name: "TONY MONTNA",
    avatar: profilePicTony,
    stats: { respect: 100, coke: 20, weed: 50 },
    statChanges: [
      { icon: respectIcon, value: -10 },
      { icon: cokeIcon, value: -3 },
      { icon: weedIcon, value: -10 },
    ],
  };

  const winnerPlayer: Player = {
    name: "RADA",
    avatar: profilePicRada,
    stats: { respect: 100, coke: 20, weed: 50 },
    statChanges: [
      { icon: respectIcon, value: 10 },
      { icon: cokeIcon, value: 3 },
      { icon: weedIcon, value: 10 },
    ],
  };

  const renderWinScreenContent = () => (
    <div className="relative z-10 flex flex-col h-full justify-between items-center py-4 overflow-y-auto scrollbar-hide">
      <h1 className="text-white font-['Bangers',_Helvetica] text-3xl tracking-wider mt-12">RAIDING...</h1>

      <div className="w-full flex flex-col items-center gap-2">
        <PlayerCard player={defeatedPlayer} weapon={{ src: weaponPistol, alt: "Pistol" }} isWinner={false} statChanges={defeatedPlayer.statChanges} />

        <div className="bg-cover bg-center w-72 h-20 flex flex-col items-center justify-center my-2" style={{ backgroundImage: `url(${resultBg})` }}>
          <div className="text-[#bbf88e] font-['Bangers',_Helvetica] text-xl">YOU WIN!</div>
          <p className="font-['Bangers',_Helvetica] text-xl text-white">YOUR RIFLE BEATS THEIR PISTOL</p>
        </div>

        <PlayerCard player={winnerPlayer} weapon={{ src: weaponRifle, alt: "Rifle" }} isWinner={true} statChanges={winnerPlayer.statChanges} />
      </div>

      <p className="text-white font-['Bangers',_Helvetica] text-xl">CLOSING IN {countdown} SECONDS...</p>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      <div className="md:hidden flex flex-col h-screen w-full min-w-[390px] relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {renderWinScreenContent()}
      </div>

      <div className="hidden md:block h-screen relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[393px] max-h-[90vh] flex flex-col scale-90 lg:scale-100 origin-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30 h-full flex flex-col overflow-hidden">
            {renderWinScreenContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
