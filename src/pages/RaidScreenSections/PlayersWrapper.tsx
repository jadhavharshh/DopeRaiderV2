import React, { useState } from "react";
import type { JSX } from "react";
import { PlayerListItem } from "./PlayerListItem"; // Import the new component

// Import images using Vite's static imports
import organicGrungeBoldShapes71Svg from "@/static/img/organic-grunge-bold-shapes-71.svg";
import telegramPeerPhoto73Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-73.png";
import ellipse159Svg from "@/static/img/ellipse-15-9.svg";

import organicGrungeBoldShapes26Svg from "@/static/img/organic-grunge-bold-shapes-26.svg"; // Sonny's body grunge
import organicGrungeBoldShapes27Svg from "@/static/img/organic-grunge-bold-shapes-27.svg"; // Sonny's header grunge
import telegramPeerPhoto77Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-77.png";
import ellipse1510Svg from "@/static/img/ellipse-15-10.svg";

import telegramPeerPhoto74Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-74.png";
import ellipse1511Svg from "@/static/img/ellipse-15-11.svg";
import organicGrungeBoldShapes51Svg from "@/static/img/organic-grunge-bold-shapes-51.svg";

import telegramPeerPhoto75Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-75.png";
import ellipse1512Svg from "@/static/img/ellipse-15-12.svg";
import organicGrungeBoldShapes76Svg from "@/static/img/organic-grunge-bold-shapes-76.svg";

import telegramPeerPhoto76Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-76.png";
import ellipse1513Svg from "@/static/img/ellipse-15-13.svg";
import organicGrungeBoldShapes80Svg from "@/static/img/organic-grunge-bold-shapes-80.svg";

import telegramPeerPhoto72Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-72.png";
import ellipse1514Svg from "@/static/img/ellipse-15-14.svg";

const commonStyles = {
  playerStatCommonClasses: "text-white font-['Roboto_Condensed',_Helvetica] text-base font-bold",
  profilePicShadowStyle: { boxShadow: "0px 1px 2px #0000001a, 0px 3.5px 3.5px #00000017, 0px 8px 4.75px #0000000d, 0px 14px 5.75px #00000003, 0px 22px 6.25px transparent"},
  textShadowStyle: { textShadow: "0px 4px 4px rgba(0,0,0,0.25)" },
};

const allPlayersData = [
  {
    id: 'tony-montana',
    name: 'TONY MONTANA',
    imgSrc: telegramPeerPhoto73Png,
    stats: [94, 0, 49],
    ellipseSrc: ellipse159Svg,
    headerGrungeSrc: organicGrungeBoldShapes71Svg,
    // No bodyGrungeSrc, no hasExpandedDetails for Tony unless specified
  },
  {
    id: 'sonny-black',
    name: 'SONNY BLACK',
    imgSrc: telegramPeerPhoto77Png,
    stats: [60, 12, 48],
    ellipseSrc: ellipse1510Svg,
    headerGrungeSrc: organicGrungeBoldShapes27Svg,
    bodyGrungeSrc: organicGrungeBoldShapes26Svg,
    hasExpandedDetails: true,
  },
  {
    id: 'dr-gonzo',
    name: 'DR GONZO',
    imgSrc: telegramPeerPhoto74Png,
    stats: [87, 17, 43],
    ellipseSrc: ellipse1511Svg,
    headerGrungeSrc: organicGrungeBoldShapes51Svg,
  },
  {
    id: 'vito-corleone',
    name: 'VITO CORLEONE',
    imgSrc: telegramPeerPhoto75Png,
    stats: [71, 4, 50],
    ellipseSrc: ellipse1512Svg,
    headerGrungeSrc: organicGrungeBoldShapes76Svg,
  },
  {
    id: 'el-chapo',
    name: 'EL CHAPO',
    imgSrc: telegramPeerPhoto76Png,
    stats: [67, 9, 12],
    ellipseSrc: ellipse1513Svg,
    headerGrungeSrc: organicGrungeBoldShapes80Svg,
  },
  {
    id: 'lucky-mary',
    name: 'LUCKY MARY',
    imgSrc: telegramPeerPhoto72Png,
    stats: [60, 12, 48],
    ellipseSrc: ellipse1514Svg,
    headerGrungeSrc: organicGrungeBoldShapes80Svg, // Re-using grunge as per original
  },
];

export const PlayersWrapper = (): JSX.Element => {
  const [openPlayerId, setOpenPlayerId] = useState<string | number | null>(null);

  const handlePlayerClick = (id: string | number) => {
    setOpenPlayerId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="h-[588px] w-[362px] overflow-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-1 relative top-[6px] w-[362px]">
        {allPlayersData.map((player) => (
          <PlayerListItem
            key={player.id}
            player={player}
            isOpen={openPlayerId === player.id}
            onClick={() => handlePlayerClick(player.id)}
            commonStyles={commonStyles}
          />
        ))}
      </div>
    </div>
  );
};