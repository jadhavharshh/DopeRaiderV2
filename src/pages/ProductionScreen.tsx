import React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";

// Import images using Vite's path configuration
import backgroundImg from "@/static/img/image-2.png";
import WeedBgIMG from "@/static/img/weed.png";
import weedIcon from "@/static/img/weed-icon.svg";
import cokeIcon from "@/static/img/coke-icon.svg";
import seedsIcon from "@/static/img/seeds-icon.svg";
import chemicalsIcon from "@/static/img/chemicals-icon.svg";
import chemicalsDetailedIcon from "@/static/img/chemicals-detailed-icon.svg";
import grungeBackground from "@/static/img/organic-grunge-bold-shapes-16.svg";

export const ProductionScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout - Exact Figma Dimensions (393x852) - up to 767px */}
      <div className="relative w-full h-screen bg-white overflow-hidden md:hidden">
        {/* BG Container - Exact positioning from Figma */}
        <div className="absolute w-[906px] h-[944px] left-[-277px] top-[-78px]">
          {/* Background Image with blur */}
          <img
            className="absolute w-[429px] h-[751px] left-[-27px] top-[-12px] object-cover"
            style={{ filter: 'blur(1px)' }}
            alt="Background"
            src={backgroundImg}
          />
          
          {/* Dark overlay */}
          <div className="absolute w-[426px] h-[874px] left-[-15px] top-[-8px] bg-black bg-opacity-60" />
          
          {/* Ellipse blur effects - Exact Figma positioning */}
          <div className="absolute w-[229px] h-[433px] left-[calc(50%-229px/2)] top-[calc(50%-433px/2+1.5px)] bg-white rounded-[114.5px] blur-[27px] mix-blend-soft-light" />
          <div className="absolute w-[117px] h-[333px] left-[calc(50%-117px/2-109px)] top-[calc(50%-333px/2-135.5px)] bg-white rounded-[58.5px] blur-[27px] mix-blend-soft-light" />
          <div className="absolute w-[127px] h-[433px] left-[calc(50%-127px/2+114px)] top-[calc(50%-433px/2-161.5px)] bg-white rounded-[63.5px] blur-[27px] mix-blend-soft-light" />
          <div className="absolute w-[406px] h-[906px] left-[calc(50%-406px/2+635.92px)] top-[calc(50%-906px/2-50.91px)] bg-black opacity-30 blur-[27px] mix-blend-soft-light rotate-90" />
          <div className="absolute w-[250px] h-[558px] left-[calc(50%-250px/2+393.5px)] top-[calc(50%-558px/2-216px)] bg-black opacity-60 blur-[27px] mix-blend-soft-light rotate-90" />
        </div>

        {/* PRODUCTION Title */}
        <div className="absolute w-[137px] h-[34px] left-[128px] top-[59px]">
          <h1 className="text-white text-[32px] font-normal leading-[34px] text-center tracking-[0.02em]" style={{ fontFamily: 'Bangers' }}>
            PRODUCTION
          </h1>
        </div>

        {/* Status Message Frame */}
        <div className="absolute w-[208px] h-[42px] left-[calc(50%-208px/2+1.5px)] top-[211px]">
          <svg width="208" height="42" viewBox="0 0 208 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <path d="M8.67885 37.9189C7.91783 37.6209 11.204 35.5547 9.75117 34.2435C6.3612 31.1641 -9.65462 23.0385 8.54045 22.1047L8.54045 21.1411C7.46811 20.9524 1.51842 21.5285 1.48382 20.5749C1.41464 18.7372 13.66 5.47598 17.2921 4.25415C21.3047 2.90319 28.7072 3.03237 33.8614 2.24762C35.8331 1.94962 36.0752 0.668161 37.0783 0.539026C43.6161 -0.285457 112.107 0.0125423 124.422 0.280748C133.934 0.479419 198.585 3.54892 201.491 4.48267C209.067 8.76402 203.913 13.095 204.224 17.3068C204.328 18.8763 208.167 20.5253 207.994 22.4424C207.718 25.2934 198.758 38.1076 191.84 39.4685C186.824 40.4519 146.456 41.9519 138.362 41.9916C108.717 42.1207 69.4213 40.74 40.7104 39.2401C34.0689 38.8924 11.7228 39.101 8.74798 37.9288L8.67885 37.9189Z" fill="url(#paint0_linear_117_638)"/>
            <defs>
              <linearGradient id="paint0_linear_117_638" x1="208" y1="21" x2="-9.17939e-07" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#303030"/>
                <stop offset="1" stopColor="#1B1B1B"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute w-[145px] h-[19px] left-[calc(50%-145px/2+0.5px)] top-[11px]">
            <span className="text-white text-[16px] font-bold leading-[19px]" style={{ fontFamily: 'Roboto Condensed' }}>
              LET'S GET TO WORK...
            </span>
          </div>
        </div>

        {/* Left Production Card - GROW WEED */}
        <div className="absolute w-[176px] h-[298px] left-[calc(50%-176px/2-92.5px)] top-[277px] bg-black bg-opacity-70 border border-[#6e6b67] border-opacity-40 rounded-[4px] flex flex-col items-center p-[16px] gap-[16px]">
          {/* WEED Header */}
          <div className="flex items-center justify-center gap-[8px] w-full h-[24px]">
            {/* Icon */}
            <div className="relative w-[24px] h-[24px]">
              <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-[15px] h-[15px]" alt="Weed" src={weedIcon} />
              </div>
            </div>
            {/* Title */}
            <span className="text-white text-[16px] font-bold leading-[19px]" style={{ fontFamily: 'Roboto Condensed' }}>
              GROW WEED
            </span>
          </div>

          {/* Requirements Frame */}
          <div className="w-[144px] h-[111px] bg-black bg-opacity-50 border border-[#6e6b67] border-opacity-40 rounded-[4px] relative">
            {/* REQUIRES text */}
            <div className="absolute w-[49px] h-[14px] left-[calc(50%-49px/2+0.5px)] top-[16px]">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[14px]" style={{ fontFamily: 'Roboto Condensed' }}>
                REQUIRES
              </span>
            </div>
            
            {/* Icon Frame */}
            <div className="absolute w-[24px] h-[24px] left-[calc(50%-24px/2)] top-[36px]">
              <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-[12px] h-[13px]" alt="Seeds" src={seedsIcon} />
              </div>
            </div>
            
            {/* 20 SEEDS */}
            <div className="absolute w-[55px] h-[16px] left-[calc(50%-55px/2+0.5px)] top-[65px]">
              <span className="text-white text-[14px] font-bold leading-[16px]" style={{ fontFamily: 'Roboto Condensed' }}>
                20 SEEDS
              </span>
            </div>
            
            {/* 20 available */}
            <div className="absolute w-[57px] h-[14px] left-[calc(50%-57px/2+0.5px)] top-[85px]">
              <span className="text-[#AEAEAE] text-[12px] font-normal leading-[14px] text-center" style={{ fontFamily: 'Roboto Condensed' }}>
                20 available
              </span>
            </div>
          </div>

          {/* Stats Frame */}
          <div className="w-[144px] h-[48px] relative">
            {/* Left column - labels */}
            <div className="absolute w-[51px] h-[48px] left-[calc(50%-51px/2-41.5px)] top-0">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[16px]" style={{ fontFamily: 'Roboto Condensed' }}>
                Max Yield:<br/>Time:<br/>Cost:
              </span>
            </div>
            
            {/* Right column - values */}
            <div className="absolute w-[48px] h-[48px] left-[calc(50%-48px/2+43px)] top-0">
              <span className="text-white text-[12px] font-bold leading-[16px] text-right" style={{ fontFamily: 'Roboto Condensed' }}>
                15oZ<br/>3 Minutes<br/>$0.25
              </span>
            </div>
          </div>

          {/* GROW Button */}
          <Link
            to="/production/active"
            className="w-[144px] h-[35px] bg-gradient-to-t from-[#10341D] to-[#318952] rounded-[74px] flex items-center justify-center"
          >
            <span className="text-white text-[16px] font-semibold leading-[19px] tracking-[-0.03em]" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              GROW
            </span>
          </Link>
        </div>

        {/* Right Production Card - PRODUCE COKE */}
        <div className="absolute w-[176px] h-[298px] left-[calc(50%-176px/2+92.5px)] top-[277px] bg-black bg-opacity-70 border border-[#6e6b67] border-opacity-40 rounded-[4px] flex flex-col items-center p-[16px] gap-[16px]">
          {/* COKE Header */}
          <div className="flex items-center justify-center gap-[8px] w-full h-[24px]">
            {/* Icon */}
            <div className="relative w-[24px] h-[24px]">
              <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-[13px] h-[15px]" alt="Coke" src={cokeIcon} />
              </div>
            </div>
            {/* Title */}
            <span className="text-white text-[16px] font-bold leading-[19px]" style={{ fontFamily: 'Roboto Condensed' }}>
              PRODUCE COKE
            </span>
          </div>

          {/* Requirements Frame */}
          <div className="w-[144px] h-[111px] bg-black bg-opacity-50 border border-[#6e6b67] border-opacity-40 rounded-[4px] relative">
            {/* REQUIRES text */}
            <div className="absolute w-[49px] h-[14px] left-[calc(50%-49px/2+0.5px)] top-[16px]">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[14px]" style={{ fontFamily: 'Roboto Condensed' }}>
                REQUIRES
              </span>
            </div>
            
            {/* Icon Frame */}
            <div className="absolute w-[24px] h-[24px] left-[calc(50%-24px/2)] top-[36px]">
              <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-[10px] h-[12px]" alt="Chemicals" src={chemicalsDetailedIcon} />
              </div>
            </div>
            
            {/* 20 CHEMICALS */}
            <div className="absolute w-[86px] h-[16px] left-[calc(50%-86px/2)] top-[65px]">
              <span className="text-white text-[14px] font-bold leading-[16px]" style={{ fontFamily: 'Roboto Condensed' }}>
                20 CHEMICALS
              </span>
            </div>
            
            {/* 20 available */}
            <div className="absolute w-[57px] h-[14px] left-[calc(50%-57px/2+0.5px)] top-[85px]">
              <span className="text-[#AEAEAE] text-[12px] font-normal leading-[14px] text-center" style={{ fontFamily: 'Roboto Condensed' }}>
                20 available
              </span>
            </div>
          </div>

          {/* Stats Frame */}
          <div className="w-[144px] h-[48px] flex items-center px-[5px] gap-[35px]">
            {/* Left column - labels */}
            <div className="w-[51px] h-[48px]">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[16px]" style={{ fontFamily: 'Roboto Condensed' }}>
                Max Yield:<br/>Time:<br/>Cost:
              </span>
            </div>
            
            {/* Right column - values */}
            <div className="w-[48px] h-[48px]">
              <span className="text-white text-[12px] font-bold leading-[16px] text-right" style={{ fontFamily: 'Roboto Condensed' }}>
                15oZ<br/>3 Minutes<br/>$0.25
              </span>
            </div>
          </div>

          {/* PRODUCE Button */}
          <button className="w-[144px] h-[35px] bg-gradient-to-t from-[#10341D] to-[#318952] rounded-[74px] flex items-center justify-center">
            <span className="text-white text-[16px] font-semibold leading-[19px] tracking-[-0.03em]" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              PRODUCE
            </span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <BottomNav3 />
        </div>
      </div>

      {/* Desktop Layout - 768px and above */}
      <div className="hidden md:block h-screen relative">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Background"
          src={WeedBgIMG}
        />

        {/* Desktop Content - Centered Layout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pb-20">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-white text-4xl font-black tracking-wider" style={{ fontFamily: 'Bangers' }}>
              PRODUCTION
            </h1>
          </div>

          {/* Status Message */}
          <div className="flex justify-center mb-6">
            <div className="relative w-[280px] h-[50px] flex items-center justify-center">
              <svg width="280" height="50" viewBox="0 0 208 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none">
                <path d="M8.67885 37.9189C7.91783 37.6209 11.204 35.5547 9.75117 34.2435C6.3612 31.1641 -9.65462 23.0385 8.54045 22.1047L8.54045 21.1411C7.46811 20.9524 1.51842 21.5285 1.48382 20.5749C1.41464 18.7372 13.66 5.47598 17.2921 4.25415C21.3047 2.90319 28.7072 3.03237 33.8614 2.24762C35.8331 1.94962 36.0752 0.668161 37.0783 0.539026C43.6161 -0.285457 112.107 0.0125423 124.422 0.280748C133.934 0.479419 198.585 3.54892 201.491 4.48267C209.067 8.76402 203.913 13.095 204.224 17.3068C204.328 18.8763 208.167 20.5253 207.994 22.4424C207.718 25.2934 198.758 38.1076 191.84 39.4685C186.824 40.4519 146.456 41.9519 138.362 41.9916C108.717 42.1207 69.4213 40.74 40.7104 39.2401C34.0689 38.8924 11.7228 39.101 8.74798 37.9288L8.67885 37.9189Z" fill="url(#paint0_linear_117_638_desktop)"/>
                <defs>
                  <linearGradient id="paint0_linear_117_638_desktop" x1="104" y1="0" x2="104" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#303030"/>
                    <stop offset="1" stopColor="#1B1B1B"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="relative z-10 text-white text-lg font-bold" style={{ fontFamily: 'Roboto Condensed' }}>
                LET'S GET TO WORK...
              </span>
            </div>
          </div>

          {/* Production Cards - Side by Side for Desktop */}
          <div className="flex justify-center gap-4 max-w-[800px] w-full">
            {/* Grow Weed Card */}
            <div 
              className="flex flex-col gap-4"
              style={{ 
                width: '240px',
                height: '340px',
                background: 'rgba(0, 0, 0, 0.85)',
                border: '0.5px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '4px',
                padding: '16px',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-6 h-6">
                  <div className="absolute w-6 h-6 bg-gradient-to-b from-black to-[#666666] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-[15px] h-[15px]" alt="Weed" src={weedIcon} />
                  </div>
                </div>
                <span className="text-white text-base font-bold" style={{ fontFamily: 'Roboto Condensed' }}>
                  GROW WEED
                </span>
              </div>

              {/* Requirements */}
              <div 
                className="flex flex-col items-center gap-3"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '0.5px solid rgba(110, 107, 103, 0.4)',
                  borderRadius: '4px',
                  padding: '16px'
                }}
              >
                <div className="text-center text-[#AEAEAE] text-xs font-semibold" style={{ fontFamily: 'Roboto Condensed' }}>REQUIRES</div>
                <div className="relative w-6 h-6">
                  <div className="absolute w-6 h-6 bg-gradient-to-b from-black to-[#666666] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-[12px] h-[13px]" alt="Seeds" src={seedsIcon} />
                  </div>
                </div>
                <div className="text-center text-white text-sm font-bold" style={{ fontFamily: 'Roboto Condensed' }}>20 SEEDS</div>
                <div className="text-center text-[#AEAEAE] text-xs" style={{ fontFamily: 'Roboto Condensed' }}>20 available</div>
              </div>

              {/* Stats */}
              <div className="flex justify-between">
                <div className="text-[#AEAEAE] text-xs font-semibold" style={{ fontFamily: 'Roboto Condensed' }}>
                  <div>Max Yield:</div>
                  <div>Time:</div>
                  <div>Cost:</div>
                </div>
                <div className="text-white text-xs font-bold text-right" style={{ fontFamily: 'Roboto Condensed' }}>
                  <div>15oZ</div>
                  <div>3 Minutes</div>
                  <div>$0.25</div>
                </div>
              </div>

              {/* Grow Button */}
              <Link
                to="/production/active"
                className="flex items-center justify-center bg-gradient-to-t from-[#10341D] to-[#318952] hover:scale-105 transition-transform"
                style={{
                  borderRadius: '74px',
                  height: '35px'
                }}
              >
                <span className="text-white text-base font-semibold" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                  GROW
                </span>
              </Link>
            </div>

            {/* Produce Coke Card */}
            <div 
              className="flex flex-col gap-4"
              style={{ 
                width: '240px',
                height: '340px',
                background: 'rgba(0, 0, 0, 0.85)',
                border: '0.5px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '4px',
                padding: '16px',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-6 h-6">
                  <div className="absolute w-6 h-6 bg-gradient-to-b from-black to-[#666666] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-[13px] h-[15px]" alt="Coke" src={cokeIcon} />
                  </div>
                </div>
                <span className="text-white text-base font-bold" style={{ fontFamily: 'Roboto Condensed' }}>
                  PRODUCE COKE
                </span>
              </div>

              {/* Requirements */}
              <div 
                className="flex flex-col items-center gap-3"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '0.5px solid rgba(110, 107, 103, 0.4)',
                  borderRadius: '4px',
                  padding: '16px'
                }}
              >
                <div className="text-center text-[#AEAEAE] text-xs font-semibold" style={{ fontFamily: 'Roboto Condensed' }}>REQUIRES</div>
                <div className="relative w-6 h-6">
                  <div className="absolute w-6 h-6 bg-gradient-to-b from-black to-[#666666] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-[10px] h-[12px]" alt="Chemicals" src={chemicalsDetailedIcon} />
                  </div>
                </div>
                <div className="text-center text-white text-sm font-bold" style={{ fontFamily: 'Roboto Condensed' }}>20 CHEMICALS</div>
                <div className="text-center text-[#AEAEAE] text-xs" style={{ fontFamily: 'Roboto Condensed' }}>20 available</div>
              </div>

              {/* Stats */}
              <div className="flex justify-between">
                <div className="text-[#AEAEAE] text-xs font-semibold" style={{ fontFamily: 'Roboto Condensed' }}>
                  <div>Max Yield:</div>
                  <div>Time:</div>
                  <div>Cost:</div>
                </div>
                <div className="text-white text-xs font-bold text-right" style={{ fontFamily: 'Roboto Condensed' }}>
                  <div>15oZ</div>
                  <div>3 Minutes</div>
                  <div>$0.25</div>
                </div>
              </div>

              {/* Produce Button */}
              <button 
                className="flex items-center justify-center bg-gradient-to-t from-[#10341D] to-[#318952] hover:scale-105 transition-transform"
                style={{
                  borderRadius: '74px',
                  height: '35px'
                }}
              >
                <span className="text-white text-base font-semibold" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                  PRODUCE
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-30">
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-30">
            <div className="scale-60 sm:scale-70 md:scale-80 lg:scale-90 xl:scale-100 origin-bottom">
              <BottomNav3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
