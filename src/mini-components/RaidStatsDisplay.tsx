import React from "react";
import type { JSX } from "react";

// Import the union images
import union from "@/static/img/union.svg";
import union1 from "@/static/img/union-1.svg";
import union2 from "@/static/img/union-2.svg";

interface RaidStatsDisplayProps {
  raids: number;
  wins: number;
  losses: number;
  className?: string;
}

export const RaidStatsDisplay = ({ raids, wins, losses, className = "" }: RaidStatsDisplayProps): JSX.Element => {
  return (
    <div className={`relative w-[246px] h-[126px] ${className}`}>
      <div className="relative w-[244px] h-[126px] left-px">
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

        {/* Wins Box */}
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
    </div>
  );
};