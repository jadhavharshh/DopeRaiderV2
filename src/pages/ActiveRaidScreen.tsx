import React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

// Image Imports
import bgImage from "@/static/img/RaidBG.png";
import union from "@/static/img/union.svg";
import union1 from "@/static/img/union-1.svg";
import union2 from "@/static/img/union-2.svg";
import profilePic from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-2.png";
import nameTag from "@/static/img/name-tag.svg";
import statusDot from "@/static/img/ellipse-15-1.svg";
import iconRespect from "@/static/img/9athga-14.png";
import iconCoke from "@/static/img/vector-11.svg";
import iconWeed from "@/static/img/vector-12.svg";
import union3 from "@/static/img/union-3.svg";
import weaponBg1 from "@/static/img/rectangle-4-2.svg";
import weaponFrame1 from "@/static/img/rectangle-7-2.svg";
import weaponMask from "@/static/img/mask-group-4.png";
import weapon1 from "@/static/img/pistol-1-2.png";
import weaponBg2 from "@/static/img/rectangle-4-3.svg";
import weaponFrame2 from "@/static/img/rectangle-7-3.svg";
import weapon2 from "@/static/img/pistol-1-3.png";
import weaponBg3 from "@/static/img/rectangle-4-4.svg";
import weaponFrame3 from "@/static/img/rectangle-7-4.svg";
import weapon3 from "@/static/img/pistol-1-4.png";

// Helper component for the small player stat boxes
const PlayerStatBox = ({
  children,
  iconUrl,
  iconClass,
  gradientClass,
}: {
  children: React.ReactNode;
  iconUrl: string;
  iconClass: string;
  gradientClass: string;
}) => (
  <div className="p-px rounded-[4px] bg-gradient-to-b from-black to-gray-500">
    <div className={`flex items-center gap-1 h-8 px-2 rounded-[3px] overflow-hidden ${gradientClass}`}>
      <div className={`${iconClass} bg-contain bg-no-repeat bg-center`} style={{ backgroundImage: `url(${iconUrl})` }} />
      <div className="text-white font-['Roboto_Condensed'] text-base font-bold whitespace-nowrap" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
        {children}
      </div>
    </div>
  </div>
);

// Helper component for the weapon choices
const WeaponChoice = ({ to, bgImg, frameImg, maskImg, weaponImg }: { to?: string; bgImg: string; frameImg: string; maskImg: string; weaponImg: string; }) => {
  const content = (
    <div className="relative w-[100px] h-[103px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
      <img className="absolute top-[5px] left-[9px] w-[82px] h-[85px]" alt="Frame" src={frameImg} />
      <img className="absolute top-0 left-1 w-[92px] h-[95px]" alt="Mask" src={maskImg} />
      <img className="absolute top-[7px] left-[9px] w-[82px] h-[85px] object-cover" alt="Weapon" src={weaponImg} />
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : <div>{content}</div>;
};

export const ActiveRaidScreen = (): JSX.Element => {
  const renderContent = () => (
    <div className="relative w-[393px] h-[852px] bg-white overflow-hidden mx-auto">
      <div className="absolute top-[-78px] left-[-277px] w-[906px] h-[944px]">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <img className="absolute top-[78px] left-[277px] w-[393px] h-[852px] object-cover" alt="Background" src={bgImage} />
            <div className="absolute top-[70px] left-[262px] w-[426px] h-[874px] bg-black/30" />
            <div className="absolute top-[289px] left-[359px] w-[229px] h-[433px] bg-white rounded-full mix-blend-soft-light blur-[27px]" />
            <div className="absolute top-[202px] left-[306px] w-[117px] h-[333px] bg-white rounded-full mix-blend-soft-light blur-[27px]" />
            <div className="absolute top-[168px] left-[505px] w-[127px] h-[433px] bg-white rounded-full mix-blend-soft-light blur-[27px]" />
            <div className="absolute top-[-250px] left-[250px] w-[406px] h-[906px] bg-black rounded-full mix-blend-soft-light blur-[27px] opacity-30 rotate-90" />
            <div className="absolute top-[-145px] left-[338px] w-[250px] h-[558px] bg-black rounded-full mix-blend-soft-light blur-[27px] opacity-60 rotate-90" />
          </div>
        </div>

        {/* Win/Loss Stats */}
        <div className="absolute top-[433px] left-[351px] w-[246px] h-[126px]">
          <div className="relative w-[244px] h-[126px] left-px">
            {/* Raids Box */}
            <div className="absolute top-[8px] left-0 w-[82px] h-[110px] p-px rounded-l-[4px] bg-gradient-to-b from-black to-gray-500">
              <div className="relative w-full h-full rounded-l-[3px] bg-gradient-to-b from-black to-gray-500 overflow-hidden">
                <div className="relative h-[218px] w-[218px] top-[-69px] left-[-66px]">
                  <div className="absolute top-[30px] left-[34px] rotate-45">
                    <img className="w-[82px] h-[110px] mix-blend-overlay -rotate-45" alt="Union" src={union} />
                  </div>
                  <div className="absolute top-[83px] left-[88px] text-white font-['Roboto_Condensed'] text-base font-bold">RAIDS</div>
                  <div className="absolute top-[106px] left-[96px] text-white font-['Roboto_Condensed'] text-5xl font-bold" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.4)' }}>5</div>
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
                  <div className="absolute top-[80px] left-[91px] text-white font-['Roboto_Condensed'] text-5xl font-bold" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.4)' }}>2</div>
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
                  <div className="absolute top-[84px] left-[94px] text-white font-['Roboto_Condensed'] text-5xl font-bold tracking-[-2.88px]" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.4)' }}>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Player Profile */}
        <div className="absolute top-[214px] left-[410px] w-[128px] h-[160px]">
          <div className="relative w-[212px] h-[160px] -left-[43px]">
            <div className="absolute top-0 left-[43px] w-[128px] h-[128px] bg-[#2f2f2f] rounded-full overflow-hidden">
              <img className="w-full h-full" alt="Profile Pic" src={profilePic} />
            </div>
            <img className="absolute top-[118px] left-0 w-[212px] h-[42px]" alt="Name Tag" src={nameTag} />
          </div>
        </div>
        <div className="absolute top-[336px] left-[387px] inline-flex items-center gap-2">
          <img className="w-3 h-3" alt="Status" src={statusDot} />
          <div className="text-white font-['Bangers'] text-3xl tracking-[0.32px]">TONY MONTNA</div>
        </div>

        {/* Player Stats */}
        <div className="absolute top-[385px] left-[392px] inline-flex items-center gap-1">
          <PlayerStatBox iconUrl={iconRespect} iconClass="w-[11px] h-[14px]" gradientClass="bg-gradient-to-b from-[#0a0a28] to-[#49497f]">100</PlayerStatBox>
          <PlayerStatBox iconUrl={iconCoke} iconClass="w-[13px] h-[15px]" gradientClass="bg-gradient-to-b from-black to-[#8992a5]">20</PlayerStatBox>
          <PlayerStatBox iconUrl={iconWeed} iconClass="w-[14px] h-[15px]" gradientClass="bg-gradient-to-b from-[#10341d] to-[#318952]">50</PlayerStatBox>
        </div>
      </div>

      {/* Weapon Section */}
      <div className="absolute top-[505px] left-[16px] w-[361px] h-[222px]">
        <div className="relative w-full h-[215px]">
          <div className="absolute top-[14px] left-0 w-[361px] h-[201px] p-px rounded-[4px] bg-gradient-to-b from-black to-gray-500">
            <div className="relative w-full h-full rounded-[3px] bg-gradient-to-b from-black to-gray-500 overflow-hidden">
              <div className="relative w-[743px] h-[743px] top-[-225px] left-[-238px]">
                <div className="absolute top-[103px] left-[115px] -rotate-45">
                  <img className="w-[361px] h-[201px] mix-blend-overlay rotate-45" alt="Union" src={union3} />
                </div>
                <div className="absolute top-[421px] left-[235px] w-[364px] h-3 bg-[#737373]" />
                <div className="absolute top-[421px] left-[235px] w-[135px] h-3 bg-[#00ff4f]" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="absolute top-0 left-[83px] p-px rounded-[4px] bg-gradient-to-b from-black to-gray-500">
            <div className="inline-flex justify-center items-center gap-2.5 px-4 py-1 rounded-[3px] bg-gradient-to-b from-black to-gray-500">
              <div className="text-white font-['Bangers'] text-xl tracking-[0.42px]" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>CHOOSE YOUR WEAPON</div>
            </div>
          </div>

          {/* Weapon Choices */}
          <div className="absolute top-[54px] left-[27px]">
            <WeaponChoice bgImg={weaponBg1} frameImg={weaponFrame1} maskImg={weaponMask} weaponImg={weapon1} />
          </div>
          <div className="absolute top-[54px] left-[135px]">
            <WeaponChoice to="/raid/win" bgImg={weaponBg2} frameImg={weaponFrame2} maskImg={weaponMask} weaponImg={weapon2} />
          </div>
          <div className="absolute top-[54px] left-[243px]">
            <WeaponChoice bgImg={weaponBg3} frameImg={weaponFrame3} maskImg={weaponMask} weaponImg={weapon3} />
          </div>

          {/* Auto-pick Timer */}
          <div className="absolute top-[173px] left-[114px] inline-flex items-center gap-2">
            <div className="text-white font-['Bangers'] text-base tracking-[0.32px]" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>AUTO-PICKING IN 3 SECS</div>
          </div>
        </div>
      </div>

      {/* Raiding Status */}
      <div className="absolute top-[58px] left-[140px] text-white font-['Bangers'] text-3xl tracking-[0.64px] text-center">
        RAIDING...
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-screen w-full min-w-[390px] relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div className="scale-[0.9] origin-center">
            {renderContent()}
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
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};