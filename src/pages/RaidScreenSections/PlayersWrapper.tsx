import React from "react";
import { Link } from "react-router-dom";
// Removed: import "./style.css";
import type { JSX } from "react";

// Helper for text shadow if not configured in Tailwind
const textShadowStyle = { textShadow: "0px 4px 4px rgba(0,0,0,0.25)" };
// Helper for complex box-shadow if not configured in Tailwind
const profilePicShadowStyle = { boxShadow: "0px 1px 2px #0000001a, 0px 3.5px 3.5px #00000017, 0px 8px 4.75px #0000000d, 0px 14px 5.75px #00000003, 0px 22px 6.25px transparent"};


// Component to replicate the stat boxes with pseudo-element borders
// This is a simplified visual representation. True mask effects are not replicated.
const StatItem = ({ children, mainBgGradient, borderBgGradient }: { children: React.ReactNode, mainBgGradient: string, borderBgGradient: string }) => {
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


export const PlayersWrapper = (): JSX.Element => {
  const playerStatCommonClasses = "text-white font-['Roboto_Condensed',_Helvetica] text-base font-bold"; // For text-wrapper-86

  return (
    // PLAYERS-wrapper - removed fixed positioning, kept dimensions and scroll
    <div className="h-[588px] w-[362px] overflow-hidden overflow-y-scroll scrollbar-hide">
      {/* PLAYERS-2 */}
      <div className="flex flex-col gap-1 relative top-[6px] w-[362px]">
        {/* Player Item 1 (Tony Montana) */}
        <Link
          className="self-stretch block h-[52px] relative w-full" // frame-41
          to="/doperaider-u8212-raid-u8212-selected-player"
        >
          {/* overlap-group-16 */}
          <div
            className="bg-[url('/img/organic-grunge-bold-shapes-71.svg')] bg-contain bg-no-repeat h-12 w-[362px] relative top-[2px]"
          >
            {/* frame-42 */}
            <div className="flex items-center justify-between relative left-[9px] top-2 w-[345px]">
              {/* frame-43 */}
              <div className="inline-flex items-center flex-initial gap-4 relative">
                {/* profile-pic-9 */}
                <div
                  className="bg-[url('/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-73.png')] bg-contain bg-no-repeat rounded-[40px] h-8 w-8 relative"
                  style={profilePicShadowStyle}
                />
                {/* frame-44 */}
                <div className="inline-flex items-center flex-initial gap-2 relative">
                  <img
                    className="h-3 w-3 relative" // ellipse-19
                    alt="Ellipse"
                    src="/img/ellipse-15-9.svg"
                  />
                  {/* text-wrapper-85 */}
                  <div className={`${playerStatCommonClasses} whitespace-nowrap`}>
                    TONY MONTANA
                  </div>
                </div>
              </div>
              {/* stats-5 */}
              <div className="inline-flex items-center flex-initial gap-1 relative">
                <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(10,10,40,1)] to-[rgba(73,73,127,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">94</StatItem>
                <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(137,146,165,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">0</StatItem>
                <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(16,52,29,1)] to-[rgba(49,137,82,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">49</StatItem>
              </div>
            </div>
          </div>
        </Link>

        {/* Player Item 2 (Sonny Black - Protected) - This one is more complex */}
        <Link className="self-stretch block h-[132px] relative w-full" to="/doperaider-u8212-raid"> {/* frame-45 */}
          {/* overlap-25 */}
          <div className="h-[130px] relative top-[2px] w-[365px]"> {/* Increased width slightly to contain children */}
            {/* organic-grunge-bold-5 */}
            <img
              className="h-[130px] w-[360px] absolute left-[4px] top-0"
              alt="Organic grunge bold"
              src="/img/organic-grunge-bold-shapes-26.svg"
            />
            {/* trade-6 - Simplified border, true mask effect is hard */}
            <div className="absolute left-[41px] top-[58px] p-px rounded-[74px] bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[73px] bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)] overflow-hidden">
                    {/* group-7 */}
                    <div className="bg-[url('/img/mask-group-9.png')] bg-contain bg-no-repeat h-[18px] w-[18px] border-[2.83px] border-[#626262] rounded-[9px] relative ml-[-2.8px]">
                        {/* overlap-group-17 */}
                        <div className="bg-[url('/img/mask-group-10.png')] bg-contain bg-no-repeat h-[18px] w-[18px] relative">
                        {/* mask-group-2 */}
                        <img className="h-[18px] w-[18px] absolute left-0 top-0" alt="Mask group" src="/img/mask-group-11.png" />
                        </div>
                    </div>
                    {/* PROTECTED */}
                    <div className="text-[#aeaeae] font-['Roboto_Condensed',_Helvetica] text-base font-semibold tracking-[-0.48px] leading-normal relative" style={textShadowStyle}>
                        PROTECTED
                        <br />
                        15mins 23secs
                    </div>
                </div>
            </div>

            {/* WIN-STATS-4 */}
            <div className="h-[63px] w-[123px] absolute left-[228px] top-[53px]">
              {/* overlap-26 */}
              <div className="h-[63px] w-[122px] relative">
                {/* raids-4 - Simplified border (0.5px is tricky) */}
                <div className="absolute left-0 top-[4px] h-[55px] w-[41px] rounded-l-sm bg-gradient-to-b from-black to-neutral-500 p-px">
                    <div className="h-full w-full rounded-l-sm bg-gradient-to-b from-black to-neutral-500"> {/* Inner part for content */}
                        <div className="relative h-[109px] w-[109px] left-[-33px] top-[-34px]"> {/* overlap-group-18 */}
                            <div className="inline-flex items-center gap-[1.5px] absolute left-[17px] top-[15px] transform rotate-45"> {/* frame-46 */}
                                <img className="h-[109.25px] w-[109.25px] mix-blend-overlay relative transform -rotate-45 m-[-15.12px]" alt="Union" src="/img/union-16.svg" /> {/* union-10 */}
                            </div>
                            <div className="text-white font-['Roboto_Condensed',_Helvetica] text-[10px] font-bold absolute left-[41px] top-[42px] whitespace-nowrap">RAIDS</div>
                            <div className="text-white font-['Roboto_Condensed',_Helvetica] text-2xl font-bold absolute left-[48px] top-[53px] whitespace-nowrap" style={{textShadow: '0px 2px 2px rgba(0,0,0,0.25)'}}>4</div>
                        </div>
                    </div>
                </div>
                {/* losses-4 */}
                <div className="absolute left-[81px] top-[4px] h-[55px] w-[41px] rounded-r-sm bg-gradient-to-b from-black to-neutral-500 p-px">
                     <div className="h-full w-full rounded-r-sm bg-gradient-to-b from-black to-neutral-500">
                        <div className="relative h-[109px] w-[109px] left-[-31px] top-[-22px]"> {/* overlap-27 */}
                            <div className="inline-flex items-center gap-[1.5px] absolute left-[17px] top-[15px] transform -rotate-45"> {/* frame-47 */}
                                <img className="h-[109.25px] w-[109.25px] mix-blend-overlay relative transform rotate-45 m-[-15.12px]" alt="Union" src="/img/union-17.svg" /> {/* union-11 */}
                            </div>
                            <div className="text-white font-['Roboto_Condensed',_Helvetica] text-[10px] font-bold absolute left-[36px] top-[29px] whitespace-nowrap">LOSSES</div>
                            <div className="text-white font-['Roboto_Condensed',_Helvetica] text-2xl font-bold absolute left-[46px] top-[40px] whitespace-nowrap" style={{textShadow: '0px 2px 2px rgba(0,0,0,0.25)'}}>1</div>
                        </div>
                    </div>
                </div>
                {/* wins-4 */}
                <div className="absolute left-[40px] top-0 h-[63px] w-[41px] rounded-sm bg-gradient-to-b from-[rgba(78,161,56,1)] to-[rgba(20,62,35,1)] p-px border-gradient-to-b from-[rgba(60,224,0,1)] to-[rgba(91,255,143,1)]"> {/* Custom border gradient needed here */}
                     <div className="h-full w-full rounded-sm bg-gradient-to-b from-[rgba(78,161,56,1)] to-[rgba(20,62,35,1)]">
                        <div className="relative h-[109px] w-[109px] left-[-33px] top-[-20px]"> {/* overlap-28 */}
                            <div className="inline-flex items-center gap-[1.5px] absolute left-[17px] top-[15px] transform rotate-45"> {/* frame-46, assumed same structure */}
                                <img className="h-[109.25px] w-[109.25px] mix-blend-overlay relative transform -rotate-45 m-[-15.12px]" alt="Union" src="/img/union-18.svg" /> {/* union-10 */}
                            </div>
                            <div className="bg-[#72FF00] rounded-[13.75px/32.5px] blur-[13.5px] h-[65px] w-[28px] absolute left-[39px] top-[1px] mix-blend-color transform rotate-90" /> {/* ellipse-20 */}
                            <div className="text-white font-['Roboto_Condensed',_Helvetica] text-xs font-bold absolute left-[40px] top-[28px] whitespace-nowrap">WINS</div>
                            <div className="text-white font-['Roboto_Condensed',_Helvetica] text-2xl font-bold absolute left-[47px] top-[42px] whitespace-nowrap tracking-[-1.44px]" style={{textShadow: '0px 2px 2px rgba(0,0,0,0.25)'}}>3</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            {/* organic-grunge-bold-6 */}
            <img
              className="h-12 w-[362px] absolute left-0 top-0"
              alt="Organic grunge bold"
              src="/img/organic-grunge-bold-shapes-27.svg"
            />
            {/* frame-48 (Player info for Sonny Black) */}
            <div className="flex items-center justify-between absolute left-[9px] top-[8px] w-[345px]">
                <div className="inline-flex items-center flex-initial gap-4 relative">
                    <div className="bg-[url('/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-77.png')] bg-cover bg-center rounded-[40px] h-8 w-8 relative" style={profilePicShadowStyle} /> {/* profile-pic-10 */}
                    <div className="inline-flex items-center flex-initial gap-2 relative">
                        <img className="h-3 w-3 relative" alt="Ellipse" src="/img/ellipse-15-10.svg" />
                        <div className={`${playerStatCommonClasses} whitespace-nowrap`}>SONNY BLACK</div>
                    </div>
                </div>
                <div className="inline-flex items-center flex-initial gap-1 relative">
                    <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(10,10,40,1)] to-[rgba(73,73,127,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">60</StatItem>
                    <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(137,146,165,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">12</StatItem>
                    <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(16,52,29,1)] to-[rgba(49,137,82,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">48</StatItem>
                </div>
            </div>
          </div>
        </Link>

        {/* Simplified remaining player items - structure repeats */}
        {[
            {img: '/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-74.png', name: 'DR GONZO', stats: [87,17,43], ellipse: '/img/ellipse-15-11.svg', grunge: '/img/organic-grunge-bold-shapes-51.svg'},
            {img: '/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-75.png', name: 'VITO CORLEONE', stats: [71,4,50], ellipse: '/img/ellipse-15-12.svg', grunge: '/img/organic-grunge-bold-shapes-76.svg'},
            {img: '/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-76.png', name: 'EL CHAPO', stats: [67,9,12], ellipse: '/img/ellipse-15-13.svg', grunge: '/img/organic-grunge-bold-shapes-80.svg'}, // grunge for this one was different in original css (.overlap-31)
            {img: '/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-72.png', name: 'LUCKY MARY', stats: [60,12,48], ellipse: '/img/ellipse-15-14.svg', grunge: '/img/organic-grunge-bold-shapes-80.svg'}, // Re-using grunge
        ].map((player, index) => (
            <div key={index} className="self-stretch h-[52px] relative w-full"> {/* frame-49 */}
                <div className={`bg-[url('${player.grunge}')] bg-contain bg-no-repeat h-12 w-[362px] relative top-[2px]`}> {/* overlap-29 / 30 / 31 */}
                    <div className="flex items-center justify-between relative left-[9px] top-2 w-[345px]">
                        <div className="inline-flex items-center flex-initial gap-4 relative">
                            <div className={`bg-[url('${player.img}')] ${player.name === 'LUCKY MARY' || player.name === 'SONNY BLACK' ? 'bg-cover bg-center' : 'bg-contain bg-no-repeat'} rounded-[40px] h-8 w-8 relative`} style={profilePicShadowStyle} />
                            <div className="inline-flex items-center flex-initial gap-2 relative">
                                {player.ellipse && <img className="h-3 w-3 relative" alt="Ellipse" src={player.ellipse} />}
                                <div className={`${playerStatCommonClasses} whitespace-nowrap`}>{player.name}</div>
                            </div>
                        </div>
                        <div className="inline-flex items-center flex-initial gap-1 relative">
                            <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(10,10,40,1)] to-[rgba(73,73,127,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">{player.stats[0]}</StatItem>
                            <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(137,146,165,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">{player.stats[1]}</StatItem>
                            <StatItem mainBgGradient="bg-gradient-to-b from-[rgba(16,52,29,1)] to-[rgba(49,137,82,1)]" borderBgGradient="bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)]">{player.stats[2]}</StatItem>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        {/* The list of players is very long and repetitive, the map above is a condensed version. You'd list all unique players or use a loop if data-driven */}
      </div>
    </div>
  );
};