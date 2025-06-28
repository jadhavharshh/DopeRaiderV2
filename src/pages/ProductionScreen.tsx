import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { JSX } from "react";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";

// Import images using Vite's path configuration
import backgroundImg from "@/static/img/image-2.png";
import WeedBgIMG from "@/static/img/weedimg.jpg";
import WeedBgMobile from "@/static/img/weedimgm.png";
import weedIcon from "@/static/img/weed-icon.svg";
import cokeIcon from "@/static/img/coke-icon.svg";
import seedsIcon from "@/static/img/seeds-icon.svg";
import chemicalsIcon from "@/static/img/chemicals-icon.svg";
import chemicalsDetailedIcon from "@/static/img/chemicals-detailed-icon.svg";
import grungeBackground from "@/static/img/organic-grunge-bold-shapes-16.svg";

export const ProductionScreen = (): JSX.Element => {
  const [isGrowActive, setIsGrowActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(132); // 2min 12secs = 132 seconds
  const navigate = useNavigate();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGrowActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsGrowActive(false);
            navigate('/production/active');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGrowActive, timeRemaining, navigate]);

  const handleGrowClick = () => {
    setIsGrowActive(true);
    setTimeRemaining(132);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}min ${secs}secs`;
  };

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout - Exact Figma Dimensions (393x852) - up to 767px */}
      <div 
        className="relative w-full h-screen overflow-hidden md:hidden"
        style={{
          backgroundImage: `url('/weedimgm.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        {/* PRODUCTION Title */}
        <div className="absolute w-[137px] h-[34px] left-[128px] top-[59px] z-20">
          <h1 className="text-white text-[32px] font-normal leading-[34px] text-center tracking-[0.02em]" style={{ fontFamily: 'Bangers' }}>
            PRODUCTION
          </h1>
        </div>

        {/* Status Message Frame */}
        <div className="absolute w-[208px] h-[42px] left-[calc(50%-208px/2+1.5px)] top-[211px] z-20">
          <svg width="208" height="42" viewBox="0 0 208 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <path d="M8.67885 37.9189C7.91783 37.6209 11.204 35.5547 9.75117 34.2435C6.3612 31.1641 -9.65462 23.0385 8.54045 22.1047L8.54045 21.1411C7.46811 20.9524 1.51842 21.5285 1.48382 20.5749C1.41464 18.7372 13.66 5.47598 17.2921 4.25415C21.3047 2.90319 28.7072 3.03237 33.8614 2.24762C35.8331 1.94962 36.0752 0.668161 37.0783 0.539026C43.6161 -0.285457 112.107 0.0125423 124.422 0.280748C133.934 0.479419 198.585 3.54892 201.491 4.48267C209.067 8.76402 203.913 13.095 204.224 17.3068C204.328 18.8763 208.167 20.5253 207.994 22.4424C207.718 25.2934 198.758 38.1076 191.84 39.4685C186.824 40.4519 146.456 41.9519 138.362 41.9916C108.717 42.1207 69.4213 40.74 40.7104 39.2401C34.0689 38.8924 11.7228 39.101 8.74798 37.9288L8.67885 37.9189Z" fill="url(#paint0_linear_117_638)"/>
            <defs>
              <linearGradient id="paint0_linear_117_638" x1="104" y1="0" x2="104" y2="42" gradientUnits="userSpaceOnUse">
                <stop stopColor="#303030"/>
                <stop offset="1" stopColor="#1B1B1B"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute w-[180px] h-[22px] left-[calc(50%-180px/2)] top-[10px] flex items-center justify-center">
            <span 
              className="text-[22px] font-normal leading-[100%] whitespace-nowrap" 
              style={{ 
                fontFamily: 'Bangers',
                background: 'linear-gradient(90.74deg, #FFDCA5 8.37%, #D6B786 90.08%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0%'
              }}
            >
              LET'S GET TO WORK...
            </span>
          </div>
        </div>

        {/* Left Production Card - GROW WEED */}
        <div className="absolute w-[176px] h-[298px] left-[calc(50%-176px/2-92.5px)] top-[277px] bg-black bg-opacity-45 border border-[#6e6b67] border-opacity-40 rounded-[4px] flex flex-col items-center pt-[15px] px-[15px] pb-0 z-20" style={{ backdropFilter: 'blur(10px)' }}>
          {/* WEED Header */}
          <div className="flex items-center justify-center gap-[8px] w-full h-[24px]">
            {/* Icon */}
            <div className="relative w-[24px] h-[24px]">
              <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-[15px] h-[15px]" alt="Weed" src={weedIcon} style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(89%) saturate(2092%) hue-rotate(85deg) brightness(102%) contrast(101%)' }} />
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
                <img className="w-[12px] h-[13px]" alt="Seeds" src={seedsIcon} style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(89%) saturate(2092%) hue-rotate(85deg) brightness(102%) contrast(101%)' }} />
              </div>
            </div>
            
            {/* 20 SEEDS */}
            <div className="absolute w-[55px] h-[16px] left-[calc(50%-55px/2+0.5px)] top-[76px]">
              <span className="text-white text-[14px] font-bold leading-[16px]" style={{ fontFamily: 'Roboto Condensed' }}>
                20 SEEDS
              </span>
            </div>
            
            {/* 20 available */}
            <div className="absolute w-[57px] h-[14px] left-[calc(50%-57px/2+0.5px)] top-[90px]">
              <span className="text-[#AEAEAE] text-[12px] font-normal leading-[14px] text-center" style={{ fontFamily: 'Roboto Condensed' }}>
                20 available
              </span>
            </div>
          </div>

          {/* Stats Frame */}
          <div className="w-[144px] h-[36px] relative">
            {/* Left column - labels */}
            <div className="absolute w-[51px] h-[36px] left-[calc(50%-51px/2-41.5px)] top-0">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>
                Max Yield:<br/>Time:<br/>Cost:
              </span>
            </div>
            
            {/* Right column - values */}
            <div className="absolute w-[48px] h-[36px] left-[calc(50%-48px/2+43px)] top-0">
              <span className="text-white text-[12px] font-bold leading-[12px] text-right" style={{ fontFamily: 'Roboto Condensed' }}>
                15oZ<br/>3 Minutes<br/>$0.25
              </span>
            </div>
          </div>

          {/* GROW Button / Timer */}
          {!isGrowActive ? (
            <button 
              onClick={handleGrowClick}
              className="w-[144px] h-[35px] bg-gradient-to-t from-[#10341D] to-[#318952] rounded-[74px] flex items-center justify-center mb-[15px] mt-auto"
            >
              <span className="text-white text-[16px] font-semibold leading-[19px] tracking-[-0.03em]" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                GROW
              </span>
            </button>
          ) : (
            <div className="w-[144px] h-[35px] bg-gradient-to-b from-black to-[#666666] rounded-[74px] flex items-center justify-center gap-[8px] px-[8px] mb-[15px] mt-auto">
              {/* Animated Spinning Circle - Group 13 */}
              <div className="relative w-[18px] h-[18px] flex-none">
                {/* Background circle - Ellipse 9 */}
                <div className="absolute w-[18px] h-[18px] border-[2.83px] border-[#626262] rounded-full" />
                
                {/* Spinning green circle - Ellipse 10 */}
                <div 
                  className="absolute w-[18px] h-[18px] border-[2.83px] border-transparent rounded-full animate-spin"
                  style={{ 
                    borderTopColor: '#5BFF8E',
                    filter: 'drop-shadow(0px 1.125px 1.125px rgba(0, 0, 0, 0.25))',
                    animationDuration: '2s'
                  }}
                />
              </div>
              
              {/* Timer Text */}
              <span 
                className="text-[#AEAEAE] text-[16px] font-semibold leading-[19px] tracking-[-0.03em]" 
                style={{ 
                  fontFamily: 'Roboto Condensed',
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                {formatTime(timeRemaining)}
              </span>
            </div>
          )}
        </div>

        {/* Right Production Card - PRODUCE COKE */}
        <div className="absolute w-[176px] h-[298px] left-[calc(50%-176px/2+92.5px)] top-[277px] bg-black bg-opacity-45 border border-[#6e6b67] border-opacity-40 rounded-[4px] flex flex-col items-center pt-[15px] px-[15px] pb-0 z-20" style={{ backdropFilter: 'blur(10px)' }}>
          {/* COKE Header */}
          <div className="flex items-center justify-center gap-[8px] w-full h-[24px]">
            {/* Icon */}
            <div className="relative w-[24px] h-[24px]">
              <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-[13px] h-[15px]" alt="Coke" src={cokeIcon} style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
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
                <img className="w-[10px] h-[12px]" alt="Chemicals" src={chemicalsDetailedIcon} style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
              </div>
            </div>
            
            {/* 20 CHEMICALS */}
            <div className="absolute w-[86px] h-[16px] left-[calc(50%-86px/2)] top-[76px]">
              <span className="text-white text-[14px] font-bold leading-[16px]" style={{ fontFamily: 'Roboto Condensed' }}>
                20 CHEMICALS
              </span>
            </div>
            
            {/* 20 available */}
            <div className="absolute w-[57px] h-[14px] left-[calc(50%-57px/2+0.5px)] top-[90px]">
              <span className="text-[#AEAEAE] text-[12px] font-normal leading-[14px] text-center" style={{ fontFamily: 'Roboto Condensed' }}>
                20 available
              </span>
            </div>
          </div>

          {/* Stats Frame */}
          <div className="w-[144px] h-[36px] flex items-center px-[5px] gap-[35px]">
            {/* Left column - labels */}
            <div className="w-[51px] h-[36px]">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>
                Max Yield:<br/>Time:<br/>Cost:
              </span>
            </div>
            
            {/* Right column - values */}
            <div className="w-[48px] h-[36px]">
              <span className="text-white text-[12px] font-bold leading-[12px] text-right" style={{ fontFamily: 'Roboto Condensed' }}>
                15oZ<br/>3 Minutes<br/>$0.25
              </span>
            </div>
          </div>

          {/* PRODUCE Button */}
          <button className="w-[144px] h-[35px] bg-gradient-to-t from-[#10341D] to-[#318952] rounded-[74px] flex items-center justify-center mb-[15px] mt-auto">
            <span className="text-white text-[16px] font-semibold leading-[19px] tracking-[-0.03em]" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              PRODUCE
            </span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
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
          <div className="text-center mb-7">
            <h1 className="text-white text-5xl font-black tracking-wider" style={{ fontFamily: 'Bangers' }}>
              PRODUCTION
            </h1>
          </div>

          {/* Status Message */}
          <div className="flex justify-center mb-7">
            <div className="relative w-[336px] h-[60px] flex items-center justify-center">
              <svg width="280" height="50" viewBox="0 0 208 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none">
                <path d="M8.67885 37.9189C7.91783 37.6209 11.204 35.5547 9.75117 34.2435C6.3612 31.1641 -9.65462 23.0385 8.54045 22.1047L8.54045 21.1411C7.46811 20.9524 1.51842 21.5285 1.48382 20.5749C1.41464 18.7372 13.66 5.47598 17.2921 4.25415C21.3047 2.90319 28.7072 3.03237 33.8614 2.24762C35.8331 1.94962 36.0752 0.668161 37.0783 0.539026C43.6161 -0.285457 112.107 0.0125423 124.422 0.280748C133.934 0.479419 198.585 3.54892 201.491 4.48267C209.067 8.76402 203.913 13.095 204.224 17.3068C204.328 18.8763 208.167 20.5253 207.994 22.4424C207.718 25.2934 198.758 38.1076 191.84 39.4685C186.824 40.4519 146.456 41.9519 138.362 41.9916C108.717 42.1207 69.4213 40.74 40.7104 39.2401C34.0689 38.8924 11.7228 39.101 8.74798 37.9288L8.67885 37.9189Z" fill="url(#paint0_linear_117_638_desktop)"/>
                <defs>
                  <linearGradient id="paint0_linear_117_638_desktop" x1="104" y1="0" x2="104" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#303030"/>
                    <stop offset="1" stopColor="#1B1B1B"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="relative z-10 text-white text-xl font-bold" style={{ fontFamily: 'Roboto Condensed' }}>
                LET'S GET TO WORK...
              </span>
            </div>
          </div>

          {/* Production Cards - Side by Side for Desktop */}
          <div className="flex justify-center gap-5 max-w-[960px] w-full">
            {/* Grow Weed Card */}
            <div 
              className="flex flex-col gap-5"
              style={{ 
                width: '288px',
                height: '408px',
                background: 'rgba(0, 0, 0, 0.60)',
                border: '0.5px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '4px',
                padding: '20px',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-center gap-3">
                <div className="relative w-7 h-7">
                  <div className="absolute w-7 h-7 bg-gradient-to-b from-black to-[#666666] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-[18px] h-[18px]" alt="Weed" src={weedIcon} />
                  </div>
                </div>
                <span className="text-white text-lg font-bold" style={{ fontFamily: 'Roboto Condensed' }}>
                  GROW WEED
                </span>
              </div>

              {/* Requirements */}
              <div 
                className="flex flex-col items-center gap-4"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '0.5px solid rgba(110, 107, 103, 0.4)',
                  borderRadius: '4px',
                  padding: '20px'
                }}
              >
                <div className="text-center text-[#AEAEAE] text-sm font-semibold" style={{ fontFamily: 'Roboto Condensed' }}>REQUIRES</div>
                <div className="relative w-7 h-7">
                  <div className="absolute w-7 h-7 bg-gradient-to-b from-black to-[#666666] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-[14px] h-[16px]" alt="Seeds" src={seedsIcon} />
                  </div>
                </div>
                <div className="text-center text-white text-base font-bold mb-0" style={{ fontFamily: 'Roboto Condensed' }}>20 SEEDS</div>
                <div className="text-center text-[#AEAEAE] text-sm -mt-1" style={{ fontFamily: 'Roboto Condensed' }}>20 available</div>
              </div>

              {/* Stats */}
              <div className="flex justify-between">
                <div className="text-[#AEAEAE] text-sm font-semibold" style={{ fontFamily: 'Roboto Condensed' }}>
                  <div>Max Yield:</div>
                  <div>Time:</div>
                  <div>Cost:</div>
                </div>
                <div className="text-white text-sm font-bold text-right" style={{ fontFamily: 'Roboto Condensed' }}>
                  <div>15oZ</div>
                  <div>3 Minutes</div>
                  <div>$0.25</div>
                </div>
              </div>

              {/* Grow Button / Timer */}
              {!isGrowActive ? (
                <button
                  onClick={handleGrowClick}
                  className="flex items-center justify-center bg-gradient-to-t from-[#10341D] to-[#318952] hover:scale-105 transition-transform"
                  style={{
                    borderRadius: '74px',
                    height: '42px'
                  }}
                >
                  <span className="text-white text-lg font-semibold" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                    GROW
                  </span>
                </button>
              ) : (
                <div 
                  className="flex items-center justify-center gap-[10px] bg-gradient-to-b from-black to-[#666666]"
                  style={{
                    borderRadius: '74px',
                    height: '42px',
                    padding: '10px'
                  }}
                >
                  {/* Animated Spinning Circle - Group 13 Desktop */}
                  <div className="relative w-[22px] h-[22px] flex-none">
                    {/* Background circle - Ellipse 9 */}
                    <div className="absolute w-[22px] h-[22px] border-[3.5px] border-[#626262] rounded-full" />
                    
                    {/* Spinning green circle - Ellipse 10 */}
                    <div 
                      className="absolute w-[22px] h-[22px] border-[3.5px] border-transparent rounded-full animate-spin"
                      style={{ 
                        borderTopColor: '#5BFF8E',
                        filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
                        animationDuration: '2s'
                      }}
                    />
                  </div>
                  
                  {/* Timer Text */}
                  <span 
                    className="text-[#AEAEAE] text-lg font-semibold tracking-[-0.03em]" 
                    style={{ 
                      fontFamily: 'Roboto Condensed',
                      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              )}
            </div>

            {/* Produce Coke Card */}
            <div 
              className="flex flex-col gap-5"
              style={{ 
                width: '288px',
                height: '408px',
                background: 'rgba(0, 0, 0, 0.60)',
                border: '0.5px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '4px',
                padding: '20px',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-center gap-3">
                <div className="relative w-7 h-7">
                  <div className="absolute w-7 h-7 bg-gradient-to-b from-black to-[#666666] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-[16px] h-[18px]" alt="Coke" src={cokeIcon} />
                  </div>
                </div>
                <span className="text-white text-lg font-bold" style={{ fontFamily: 'Roboto Condensed' }}>
                  PRODUCE COKE
                </span>
              </div>

              {/* Requirements */}
              <div 
                className="flex flex-col items-center gap-4"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '0.5px solid rgba(110, 107, 103, 0.4)',
                  borderRadius: '4px',
                  padding: '20px'
                }}
              >
                <div className="text-center text-[#AEAEAE] text-sm font-semibold" style={{ fontFamily: 'Roboto Condensed' }}>REQUIRES</div>
                <div className="relative w-7 h-7">
                  <div className="absolute w-7 h-7 bg-gradient-to-b from-black to-[#666666] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-[12px] h-[14px]" alt="Chemicals" src={chemicalsDetailedIcon} />
                  </div>
                </div>
                <div className="text-center text-white text-base font-bold mb-0" style={{ fontFamily: 'Roboto Condensed' }}>20 CHEMICALS</div>
                <div className="text-center text-[#AEAEAE] text-sm -mt-1" style={{ fontFamily: 'Roboto Condensed' }}>20 available</div>
              </div>

              {/* Stats */}
              <div className="flex justify-between">
                <div className="text-[#AEAEAE] text-sm font-semibold" style={{ fontFamily: 'Roboto Condensed' }}>
                  <div>Max Yield:</div>
                  <div>Time:</div>
                  <div>Cost:</div>
                </div>
                <div className="text-white text-sm font-bold text-right" style={{ fontFamily: 'Roboto Condensed' }}>
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
                  height: '42px'
                }}
              >
                <span className="text-white text-lg font-semibold" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
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
