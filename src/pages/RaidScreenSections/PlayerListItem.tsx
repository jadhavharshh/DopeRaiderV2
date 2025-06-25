import React from "react";
import type { JSX } from "react";

// Assets for Sonny Black's details - these are specific and passed if needed
import maskGroup9Png from "@/static/img/mask-group-9.png";
import maskGroup10Png from "@/static/img/mask-group-10.png";
import maskGroup11Png from "@/static/img/mask-group-11.png";
import union16Svg from "@/static/img/union-16.svg";
import union17Svg from "@/static/img/union-17.svg";
import union18Svg from "@/static/img/union-18.svg";

interface StatItemProps {
  children: React.ReactNode;
  mainBgGradient: string;
  borderBgGradient: string;
  textShadowStyle: React.CSSProperties;
}

const StatItem: React.FC<StatItemProps> = ({ children, mainBgGradient, borderBgGradient, textShadowStyle }) => {
  return (
    <div className={`relative p-px rounded-[4px] ${borderBgGradient}`}>
      <div className={`flex items-center justify-center h-[30px] w-[38px] rounded-[3px] ${mainBgGradient} overflow-hidden`}>
        <span className="text-white font-['Roboto_Condensed',_Helvetica] text-base font-bold" style={textShadowStyle}>
          {children}
        </span>
      </div>
    </div>
  );
};

interface PlayerListItemProps {
  player: {
    id: string | number;
    name: string;
    imgSrc: string;
    stats: number[];
    ellipseSrc?: string;
    headerGrungeSrc: string;
    bodyGrungeSrc?: string; // For expanded state, if different from header
    hasExpandedDetails?: boolean; // True if it shows unique content when open
  };
  isOpen: boolean;
  onClick: () => void;
  commonStyles: {
    playerStatCommonClasses: string;
    profilePicShadowStyle: React.CSSProperties;
    textShadowStyle: React.CSSProperties;
  };
}

export const PlayerListItem: React.FC<PlayerListItemProps> = ({
  player,
  isOpen,
  onClick,
  commonStyles,
}) => {
  const { playerStatCommonClasses, profilePicShadowStyle, textShadowStyle } = commonStyles;
  const isSonnyBlack = player.name === 'SONNY BLACK' && player.hasExpandedDetails; // Example identifier

  return (
    <div
      onClick={onClick}
      className={`self-stretch w-full relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'h-[132px]' : 'h-[52px]'}`}
    >
      {/* Backgrounds */}
      {player.bodyGrungeSrc && (
        <img
          className={`absolute left-[2px] top-0 w-[360px] transition-opacity duration-300 ${isOpen ? 'h-[130px] opacity-100' : 'h-0 opacity-0'}`}
          alt={`${player.name} expanded background`}
          src={player.bodyGrungeSrc}
        />
      )}
      <img
        className="h-12 w-[362px] absolute left-0 top-0"
        alt={`${player.name} header background`}
        src={player.headerGrungeSrc}
      />

      {/* Header Content (always visible, within the top 52px) */}
      <div className="h-[52px] relative z-10"> {/* Ensure header content is above backgrounds */}
        <div className="flex items-center justify-between relative left-[9px] top-[8px] w-[345px]">
          <div className="inline-flex items-center flex-initial gap-4 relative">
            <div
              className={`${player.name === 'LUCKY MARY' || player.name === 'SONNY BLACK' ? 'bg-cover bg-center' : 'bg-contain bg-no-repeat'} rounded-[40px] h-8 w-8 relative`}
              style={{ ...profilePicShadowStyle, backgroundImage: `url(${player.imgSrc})` }}
            />
            <div className="inline-flex items-center flex-initial gap-2 relative">
              {player.ellipseSrc && <img className="h-3 w-3 relative" alt="Ellipse" src={player.ellipseSrc} />}
              <div className={`${playerStatCommonClasses} whitespace-nowrap`}>{player.name}</div>
            </div>
          </div>
          <div className="inline-flex items-center flex-initial gap-1 relative">
            <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(10,10,40,1)] to-[rgba(73,73,127,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]" textShadowStyle={textShadowStyle}>{player.stats[0]}</StatItem>
            <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(137,146,165,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]" textShadowStyle={textShadowStyle}>{player.stats[1]}</StatItem>
            <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(16,52,29,1)] to-[rgba(49,137,82,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]" textShadowStyle={textShadowStyle}>{player.stats[2]}</StatItem>
          </div>
        </div>
      </div>

      {/* Expandable Details - Only for Sonny Black in this example */}
      {isOpen && isSonnyBlack && (
        <div className="absolute top-[48px] left-0 w-full h-[calc(132px-52px)] px-1 pt-1 z-0"> {/* Ensure details are below header grunge if it overlaps */}
          {/* Protected section */}
          <div className="absolute left-[32px] top-[2px] p-px rounded-[74px] bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)] w-fit">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-[73px] bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)] overflow-hidden">
              <div
                className="bg-contain bg-no-repeat h-[18px] w-[18px] border-[2.83px] border-[#626262] rounded-[9px] relative ml-[-2.8px]"
                style={{ backgroundImage: `url(${maskGroup9Png})` }}
              >
                <div
                  className="bg-contain bg-no-repeat h-[18px] w-[18px] relative"
                  style={{ backgroundImage: `url(${maskGroup10Png})` }}
                >
                  <img className="h-[18px] w-[18px] absolute left-0 top-0" alt="Mask group" src={maskGroup11Png} />
                </div>
              </div>
              <div className="text-[#aeaeae] font-['Roboto_Condensed',_Helvetica] text-sm font-semibold tracking-[-0.48px] leading-normal relative" style={textShadowStyle}>
                PROTECTED
                <br />
                15m 23s
              </div>
            </div>
          </div>
          {/* WIN-STATS-4 section */}
          <div className="absolute right-[9px] top-[0px] h-[63px] w-[123px]">
            <div className="h-[63px] w-[122px] relative">
              <div className="absolute left-0 top-[4px] h-[55px] w-[41px] rounded-l-sm bg-gradient-to-b from-black to-neutral-500 p-px">
                <div className="h-full w-full rounded-l-sm bg-gradient-to-b from-black to-neutral-500 flex items-center justify-center">
                  <div className="relative h-[40px] w-[30px] text-center">
                    <img className="h-[25px] w-[25px] mix-blend-overlay relative transform -rotate-45 mx-auto mb-[-2px]" alt="Union" src={union16Svg} />
                    <div className="text-white font-['Roboto_Condensed',_Helvetica] text-[8px] font-bold whitespace-nowrap">RAIDS</div>
                    <div className="text-white font-['Roboto_Condensed',_Helvetica] text-lg font-bold whitespace-nowrap" style={{textShadow: '0px 1px 1px rgba(0,0,0,0.25)'}}>4</div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[81px] top-[4px] h-[55px] w-[41px] rounded-r-sm bg-gradient-to-b from-black to-neutral-500 p-px">
                <div className="h-full w-full rounded-r-sm bg-gradient-to-b from-black to-neutral-500 flex items-center justify-center">
                  <div className="relative h-[40px] w-[30px] text-center">
                    <img className="h-[25px] w-[25px] mix-blend-overlay relative transform rotate-45 mx-auto mb-[-2px]" alt="Union" src={union17Svg} />
                    <div className="text-white font-['Roboto_Condensed',_Helvetica] text-[8px] font-bold whitespace-nowrap">LOSSES</div>
                    <div className="text-white font-['Roboto_Condensed',_Helvetica] text-lg font-bold whitespace-nowrap" style={{textShadow: '0px 1px 1px rgba(0,0,0,0.25)'}}>1</div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[40px] top-0 h-[63px] w-[41px] rounded-sm bg-gradient-to-b from-[rgba(78,161,56,1)] to-[rgba(20,62,35,1)] p-px border-gradient-to-b from-[rgba(60,224,0,1)] to-[rgba(91,255,143,1)] flex items-center justify-center">
                <div className="h-full w-full rounded-sm bg-gradient-to-b from-[rgba(78,161,56,1)] to-[rgba(20,62,35,1)] flex items-center justify-center">
                  <div className="relative h-[45px] w-[30px] text-center">
                    <img className="h-[30px] w-[30px] mix-blend-overlay relative transform -rotate-45 mx-auto mb-[-2px]" alt="Union" src={union18Svg} />
                    <div className="bg-[#72FF00] rounded-[13.75px/32.5px] blur-[5px] h-[30px] w-[15px] absolute left-1/2 top-0 transform -translate-x-1/2 mix-blend-color rotate-90" />
                    <div className="text-white font-['Roboto_Condensed',_Helvetica] text-[9px] font-bold whitespace-nowrap">WINS</div>
                    <div className="text-white font-['Roboto_Condensed',_Helvetica] text-xl font-bold tracking-[-1px]" style={{textShadow: '0px 1px 1px rgba(0,0,0,0.25)'}}>3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* If isOpen and not SonnyBlack, the space will be empty, fulfilling the "opens a height but that has nothing to display" */}
    </div>
  );
};