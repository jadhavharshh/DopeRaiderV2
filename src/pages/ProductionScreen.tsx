import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { JSX } from "react";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";
import { BagIcon } from "@/icons/BagIcon";
import { InfoIcon } from "@/icons/InfoIcon";

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

        {/* Yield Limitation Element */}
        <div className="absolute flex items-center z-20" style={{ top: '591px', left: '25px', gap: '8px' }}>
          {/* 70/70 Element */}
          <div 
            className="flex items-center"
            style={{
              width: '97px',
              height: '32px',
              gap: '8px',
              borderRadius: '4px',
              border: '1px solid',
              borderImage: 'linear-gradient(360deg, #000000 0%, #666666 100%)',
              background: 'linear-gradient(180deg, #666666 0%, #454545 100%)',
              paddingTop: '4px',
              paddingRight: '8px',
              paddingBottom: '4px',
              paddingLeft: '8px',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }}
          >
            <BagIcon className="w-4 h-[14px]" />
            <div 
              className="flex items-center justify-center"
              style={{
                width: '57px',
                height: '28px'
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center'
                }}
              >
                <span style={{ color: '#FFFFFF' }}>70</span>
                <span style={{ color: '#ABABAB' }}>/70</span>
              </span>
            </div>
          </div>
          
          {/* Info Icon and Warning Text Container */}
          <div 
            className="flex items-center"
            style={{
              width: '238px',
              height: '32px',
              gap: '8px',
              borderRadius: '4px',
              paddingRight: '8px',
              paddingLeft: '8px',
              background: 'rgba(0, 0, 0, 0.4)'
            }}
          >
            <InfoIcon className="w-5 h-5 flex-shrink-0" />
            <span className="text-white text-[12px] font-medium" style={{ fontFamily: 'Roboto Condensed', lineHeight: '1' }}>
              YOUR MAX YIELD WILL BE LIMITED TO 15 DUE TO CARRY SIZE
            </span>
          </div>
        </div>

        {/* Left Production Card - GROW WEED */}
        <div className="absolute w-[176px] h-[298px] left-[calc(50%-176px/2-92.5px)] top-[277px] border border-[#6e6b67] border-opacity-40 rounded-[4px] flex flex-col items-center pt-[15px] px-[15px] pb-0 z-20" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)' }}>
          {/* WEED Header */}
          <div className="flex items-center justify-center gap-[8px] w-full h-[24px] mb-[15px]">
            {/* Icon */}
            <div className="relative w-[24px] h-[24px]">
              <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#paint0_diamond_1_2940_clip_path)" data-figma-skip-parse="true">
                    <g transform="matrix(0 0.0075 -0.007 0 7.5 7.5)">
                      <rect x="0" y="0" width="1133.33" height="1142.86" fill="url(#paint0_diamond_1_2940)" opacity="1" shapeRendering="crispEdges"/>
                      <rect x="0" y="0" width="1133.33" height="1142.86" transform="scale(1 -1)" fill="url(#paint0_diamond_1_2940)" opacity="1" shapeRendering="crispEdges"/>
                      <rect x="0" y="0" width="1133.33" height="1142.86" transform="scale(-1 1)" fill="url(#paint0_diamond_1_2940)" opacity="1" shapeRendering="crispEdges"/>
                      <rect x="0" y="0" width="1133.33" height="1142.86" transform="scale(-1)" fill="url(#paint0_diamond_1_2940)" opacity="1" shapeRendering="crispEdges"/>
                    </g>
                  </g>
                  <path d="M9.82514 9.64753C10.5899 9.32905 11.3367 9.14122 12.1019 9.02554C12.7977 8.9204 13.4979 8.88082 14.1985 8.97187C14.3079 8.98595 14.463 9.06249 14.4935 9.14606C14.5231 9.22788 14.4478 9.38404 14.3698 9.45882C13.5136 10.2796 12.4619 10.7481 11.317 11.0213C10.8055 11.1436 10.2775 11.1977 9.77135 11.2804C10.3299 11.4563 10.8705 11.7264 11.3587 12.0884C11.5721 12.2468 11.7783 12.4192 11.9612 12.6097C12.0338 12.6853 12.0728 12.8349 12.0526 12.9365C12.0423 12.9902 11.8724 13.0465 11.7743 13.0465C10.4303 13.0491 9.22938 12.6418 8.18085 11.8122C8.1293 11.7713 8.07685 11.7312 7.99168 11.6653V14.9925L6.9714 15V11.6894C6.1775 12.3893 5.23746 12.7847 4.20642 12.9774C3.89397 13.0359 3.56897 13.0403 3.24935 13.0447C3.14759 13.046 2.97276 12.9836 2.95842 12.9215C2.93555 12.8252 2.98711 12.6629 3.06645 12.6C3.48783 12.2657 3.91549 11.9353 4.36601 11.6406C4.62018 11.4743 4.92277 11.3785 5.19712 11.2544C4.23691 11.1796 3.29418 10.9711 2.39583 10.5858C1.81844 10.3381 1.28186 10.0254 0.811613 9.60926C0.734061 9.54064 0.654715 9.47245 0.587474 9.3946C0.43237 9.2138 0.48706 9.02378 0.725095 8.99474C1.07924 8.9512 1.4392 8.91821 1.79469 8.93184C2.79749 8.97099 3.77518 9.15838 4.72194 9.48961C4.86674 9.54019 5.00884 9.60002 5.16663 9.63609C4.89767 9.41747 4.62422 9.20413 4.36108 8.97935C2.80197 7.64564 1.73148 6.00708 1.17965 4.04742C1.15768 3.97 1.12586 3.89082 1.1281 3.81296C1.13123 3.71135 1.12989 3.56971 1.1922 3.52044C1.25496 3.47074 1.41455 3.47602 1.49479 3.52044C1.95383 3.77733 2.42093 4.02674 2.84993 4.32718C4.36556 5.38729 5.54095 6.74212 6.39671 8.3644C6.42988 8.4273 6.46709 8.488 6.52447 8.54123C6.44916 8.15589 6.36981 7.771 6.29854 7.38523C6.08919 6.25342 6.06364 5.11809 6.20171 3.9744C6.35188 2.7335 6.66657 1.53747 7.15206 0.384102C7.22064 0.221346 7.26009 -0.00563175 7.49365 8.66869e-05C7.72316 0.00536524 7.75589 0.230584 7.82537 0.395099C8.53858 2.07808 8.8972 3.83012 8.85148 5.65342C8.82727 6.62072 8.6641 7.57261 8.42875 8.5122C8.42024 8.54563 8.41531 8.58038 8.4041 8.63712C8.65424 8.21176 8.87614 7.80003 9.13031 7.4081C10.16 5.81881 11.5219 4.57263 13.202 3.66252C13.332 3.59214 13.4665 3.52616 13.6064 3.47821C13.7745 3.42015 13.8969 3.50549 13.8794 3.68144C13.8605 3.86839 13.8144 4.0549 13.7597 4.23569C13.1419 6.28905 11.9352 7.94739 10.2411 9.27759C10.1188 9.37348 9.99728 9.47069 9.87579 9.56791C9.86504 9.57671 9.86011 9.59254 9.82514 9.64753Z" fill="url(#paint0_diamond_1_2940_mobile)"/>
                  <defs>
                    <clipPath id="paint0_diamond_1_2940_clip_path">
                      <path d="M9.82514 9.64753C10.5899 9.32905 11.3367 9.14122 12.1019 9.02554C12.7977 8.9204 13.4979 8.88082 14.1985 8.97187C14.3079 8.98595 14.463 9.06249 14.4935 9.14606C14.5231 9.22788 14.4478 9.38404 14.3698 9.45882C13.5136 10.2796 12.4619 10.7481 11.317 11.0213C10.8055 11.1436 10.2775 11.1977 9.77135 11.2804C10.3299 11.4563 10.8705 11.7264 11.3587 12.0884C11.5721 12.2468 11.7783 12.4192 11.9612 12.6097C12.0338 12.6853 12.0728 12.8349 12.0526 12.9365C12.0423 12.9902 11.8724 13.0465 11.7743 13.0465C10.4303 13.0491 9.22938 12.6418 8.18085 11.8122C8.1293 11.7713 8.07685 11.7312 7.99168 11.6653V14.9925L6.9714 15V11.6894C6.1775 12.3893 5.23746 12.7847 4.20642 12.9774C3.89397 13.0359 3.56897 13.0403 3.24935 13.0447C3.14759 13.046 2.97276 12.9836 2.95842 12.9215C2.93555 12.8252 2.98711 12.6629 3.06645 12.6C3.48783 12.2657 3.91549 11.9353 4.36601 11.6406C4.62018 11.4743 4.92277 11.3785 5.19712 11.2544C4.23691 11.1796 3.29418 10.9711 2.39583 10.5858C1.81844 10.3381 1.28186 10.0254 0.811613 9.60926C0.734061 9.54064 0.654715 9.47245 0.587474 9.3946C0.43237 9.2138 0.48706 9.02378 0.725095 8.99474C1.07924 8.9512 1.4392 8.91821 1.79469 8.93184C2.79749 8.97099 3.77518 9.15838 4.72194 9.48961C4.86674 9.54019 5.00884 9.60002 5.16663 9.63609C4.89767 9.41747 4.62422 9.20413 4.36108 8.97935C2.80197 7.64564 1.73148 6.00708 1.17965 4.04742C1.15768 3.97 1.12586 3.89082 1.1281 3.81296C1.13123 3.71135 1.12989 3.56971 1.1922 3.52044C1.25496 3.47074 1.41455 3.47602 1.49479 3.52044C1.95383 3.77733 2.42093 4.02674 2.84993 4.32718C4.36556 5.38729 5.54095 6.74212 6.39671 8.3644C6.42988 8.4273 6.46709 8.488 6.52447 8.54123C6.44916 8.15589 6.36981 7.771 6.29854 7.38523C6.08919 6.25342 6.06364 5.11809 6.20171 3.9744C6.35188 2.7335 6.66657 1.53747 7.15206 0.384102C7.22064 0.221346 7.26009 -0.00563175 7.49365 8.66869e-05C7.72316 0.00536524 7.75589 0.230584 7.82537 0.395099C8.53858 2.07808 8.8972 3.83012 8.85148 5.65342C8.82727 6.62072 8.6641 7.57261 8.42875 8.5122C8.42024 8.54563 8.41531 8.58038 8.4041 8.63712C8.65424 8.21176 8.87614 7.80003 9.13031 7.4081C10.16 5.81881 11.5219 4.57263 13.202 3.66252C13.332 3.59214 13.4665 3.52616 13.6064 3.47821C13.7745 3.42015 13.8969 3.50549 13.8794 3.68144C13.8605 3.86839 13.8144 4.0549 13.7597 4.23569C13.1419 6.28905 11.9352 7.94739 10.2411 9.27759C10.1188 9.37348 9.99728 9.47069 9.87579 9.56791C9.86504 9.57671 9.86011 9.59254 9.82514 9.64753Z"/>
                    </clipPath>
                    <linearGradient id="paint0_diamond_1_2940" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00FF4F"/>
                      <stop offset="1" stopColor="#00C43D"/>
                    </linearGradient>
                    <linearGradient id="paint0_diamond_1_2940_mobile" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00FF4F"/>
                      <stop offset="1" stopColor="#00C43D"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Title */}
            <span className="text-white text-[16px] font-bold leading-[19px]" style={{ fontFamily: 'Roboto Condensed' }}>
              GROW WEED
            </span>
          </div>

          {/* Requirements Frame */}
          <div className="w-[144px] h-[111px] rounded-[4px] relative" style={{ background: 'rgba(255, 255, 255, 0)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}>
            {/* REQUIRES text */}
            <div className="absolute w-[49px] h-[14px] left-[calc(50%-49px/2+0.5px)] top-[5px]">
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
            <div className="absolute w-[55px] h-[16px] left-[calc(50%-55px/2+0.5px)] top-[70px]">
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

          {/* Stats Container */}
          <div className="w-[144px] h-[36px] relative" style={{ marginTop: '15px', marginBottom: '15px' }}>
            {/* Left column - labels */}
            <div className="absolute w-[51px] h-[36px] left-[calc(50%-51px/2-41.5px)] top-0 flex flex-col gap-[5px]">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>Max Yield:</span>
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>Time:</span>
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>Cost:</span>
            </div>
            
            {/* Right column - values */}
            <div className="absolute w-[48px] h-[36px] left-[calc(50%-48px/2+43px)] top-0 flex flex-col gap-[5px] items-end">
              <span className="text-white text-[12px] font-bold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>15oZ</span>
              <span className="text-white text-[12px] font-bold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>3 Minutes</span>
              <span className="text-white text-[12px] font-bold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>$0.25</span>
            </div>
          </div>

          {/* GROW Button / Timer */}
          {!isGrowActive ? (
            <button 
              onClick={handleGrowClick}
              className="w-[144px] h-[35px] rounded-[74px] flex items-center justify-center mb-[15px] mt-auto"
              style={{ background: 'linear-gradient(to top, rgba(0, 196, 61, 1), rgba(0, 255, 79, 1))' }}
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
        <div className="absolute w-[176px] h-[298px] left-[calc(50%-176px/2+92.5px)] top-[277px] border border-[#6e6b67] border-opacity-40 rounded-[4px] flex flex-col items-center pt-[15px] px-[15px] pb-0 z-20" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)' }}>
          {/* COKE Header */}
          <div className="flex items-center justify-center gap-[8px] w-full h-[24px] mb-[15px]">
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
          <div className="w-[144px] h-[111px] rounded-[4px] relative" style={{ background: 'rgba(255, 255, 255, 0)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}>
            {/* REQUIRES text */}
            <div className="absolute w-[49px] h-[14px] left-[calc(50%-49px/2+0.5px)] top-[5px]">
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
            <div className="absolute w-[86px] h-[16px] left-[calc(50%-86px/2)] top-[70px]">
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

          {/* Stats Container */}
          <div className="w-[144px] h-[36px] flex items-center px-[5px] gap-[35px]" style={{ marginTop: '15px', marginBottom: '15px' }}>
            {/* Left column - labels */}
            <div className="w-[51px] h-[36px] flex flex-col gap-[5px]">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>Max Yield:</span>
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>Time:</span>
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>Cost:</span>
            </div>
            
            {/* Right column - values */}
            <div className="w-[48px] h-[36px] flex flex-col gap-[5px] items-end">
              <span className="text-white text-[12px] font-bold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>15oZ</span>
              <span className="text-white text-[12px] font-bold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>3 Minutes</span>
              <span className="text-white text-[12px] font-bold leading-[12px]" style={{ fontFamily: 'Roboto Condensed' }}>$0.25</span>
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
                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#paint0_diamond_1_2940_desktop_clip_path)" data-figma-skip-parse="true">
                        <g transform="matrix(0 0.0075 -0.007 0 7.5 7.5)">
                          <rect x="0" y="0" width="1133.33" height="1142.86" fill="url(#paint0_diamond_1_2940_desktop)" opacity="1" shapeRendering="crispEdges"/>
                          <rect x="0" y="0" width="1133.33" height="1142.86" transform="scale(1 -1)" fill="url(#paint0_diamond_1_2940_desktop)" opacity="1" shapeRendering="crispEdges"/>
                          <rect x="0" y="0" width="1133.33" height="1142.86" transform="scale(-1 1)" fill="url(#paint0_diamond_1_2940_desktop)" opacity="1" shapeRendering="crispEdges"/>
                          <rect x="0" y="0" width="1133.33" height="1142.86" transform="scale(-1)" fill="url(#paint0_diamond_1_2940_desktop)" opacity="1" shapeRendering="crispEdges"/>
                        </g>
                      </g>
                      <path d="M9.82514 9.64753C10.5899 9.32905 11.3367 9.14122 12.1019 9.02554C12.7977 8.9204 13.4979 8.88082 14.1985 8.97187C14.3079 8.98595 14.463 9.06249 14.4935 9.14606C14.5231 9.22788 14.4478 9.38404 14.3698 9.45882C13.5136 10.2796 12.4619 10.7481 11.317 11.0213C10.8055 11.1436 10.2775 11.1977 9.77135 11.2804C10.3299 11.4563 10.8705 11.7264 11.3587 12.0884C11.5721 12.2468 11.7783 12.4192 11.9612 12.6097C12.0338 12.6853 12.0728 12.8349 12.0526 12.9365C12.0423 12.9902 11.8724 13.0465 11.7743 13.0465C10.4303 13.0491 9.22938 12.6418 8.18085 11.8122C8.1293 11.7713 8.07685 11.7312 7.99168 11.6653V14.9925L6.9714 15V11.6894C6.1775 12.3893 5.23746 12.7847 4.20642 12.9774C3.89397 13.0359 3.56897 13.0403 3.24935 13.0447C3.14759 13.046 2.97276 12.9836 2.95842 12.9215C2.93555 12.8252 2.98711 12.6629 3.06645 12.6C3.48783 12.2657 3.91549 11.9353 4.36601 11.6406C4.62018 11.4743 4.92277 11.3785 5.19712 11.2544C4.23691 11.1796 3.29418 10.9711 2.39583 10.5858C1.81844 10.3381 1.28186 10.0254 0.811613 9.60926C0.734061 9.54064 0.654715 9.47245 0.587474 9.3946C0.43237 9.2138 0.48706 9.02378 0.725095 8.99474C1.07924 8.9512 1.4392 8.91821 1.79469 8.93184C2.79749 8.97099 3.77518 9.15838 4.72194 9.48961C4.86674 9.54019 5.00884 9.60002 5.16663 9.63609C4.89767 9.41747 4.62422 9.20413 4.36108 8.97935C2.80197 7.64564 1.73148 6.00708 1.17965 4.04742C1.15768 3.97 1.12586 3.89082 1.1281 3.81296C1.13123 3.71135 1.12989 3.56971 1.1922 3.52044C1.25496 3.47074 1.41455 3.47602 1.49479 3.52044C1.95383 3.77733 2.42093 4.02674 2.84993 4.32718C4.36556 5.38729 5.54095 6.74212 6.39671 8.3644C6.42988 8.4273 6.46709 8.488 6.52447 8.54123C6.44916 8.15589 6.36981 7.771 6.29854 7.38523C6.08919 6.25342 6.06364 5.11809 6.20171 3.9744C6.35188 2.7335 6.66657 1.53747 7.15206 0.384102C7.22064 0.221346 7.26009 -0.00563175 7.49365 8.66869e-05C7.72316 0.00536524 7.75589 0.230584 7.82537 0.395099C8.53858 2.07808 8.8972 3.83012 8.85148 5.65342C8.82727 6.62072 8.6641 7.57261 8.42875 8.5122C8.42024 8.54563 8.41531 8.58038 8.4041 8.63712C8.65424 8.21176 8.87614 7.80003 9.13031 7.4081C10.16 5.81881 11.5219 4.57263 13.202 3.66252C13.332 3.59214 13.4665 3.52616 13.6064 3.47821C13.7745 3.42015 13.8969 3.50549 13.8794 3.68144C13.8605 3.86839 13.8144 4.0549 13.7597 4.23569C13.1419 6.28905 11.9352 7.94739 10.2411 9.27759C10.1188 9.37348 9.99728 9.47069 9.87579 9.56791C9.86504 9.57671 9.86011 9.59254 9.82514 9.64753Z" fill="url(#paint0_diamond_1_2940_desktop_2)"/>
                      <defs>
                        <clipPath id="paint0_diamond_1_2940_desktop_clip_path">
                          <path d="M9.82514 9.64753C10.5899 9.32905 11.3367 9.14122 12.1019 9.02554C12.7977 8.9204 13.4979 8.88082 14.1985 8.97187C14.3079 8.98595 14.463 9.06249 14.4935 9.14606C14.5231 9.22788 14.4478 9.38404 14.3698 9.45882C13.5136 10.2796 12.4619 10.7481 11.317 11.0213C10.8055 11.1436 10.2775 11.1977 9.77135 11.2804C10.3299 11.4563 10.8705 11.7264 11.3587 12.0884C11.5721 12.2468 11.7783 12.4192 11.9612 12.6097C12.0338 12.6853 12.0728 12.8349 12.0526 12.9365C12.0423 12.9902 11.8724 13.0465 11.7743 13.0465C10.4303 13.0491 9.22938 12.6418 8.18085 11.8122C8.1293 11.7713 8.07685 11.7312 7.99168 11.6653V14.9925L6.9714 15V11.6894C6.1775 12.3893 5.23746 12.7847 4.20642 12.9774C3.89397 13.0359 3.56897 13.0403 3.24935 13.0447C3.14759 13.046 2.97276 12.9836 2.95842 12.9215C2.93555 12.8252 2.98711 12.6629 3.06645 12.6C3.48783 12.2657 3.91549 11.9353 4.36601 11.6406C4.62018 11.4743 4.92277 11.3785 5.19712 11.2544C4.23691 11.1796 3.29418 10.9711 2.39583 10.5858C1.81844 10.3381 1.28186 10.0254 0.811613 9.60926C0.734061 9.54064 0.654715 9.47245 0.587474 9.3946C0.43237 9.2138 0.48706 9.02378 0.725095 8.99474C1.07924 8.9512 1.4392 8.91821 1.79469 8.93184C2.79749 8.97099 3.77518 9.15838 4.72194 9.48961C4.86674 9.54019 5.00884 9.60002 5.16663 9.63609C4.89767 9.41747 4.62422 9.20413 4.36108 8.97935C2.80197 7.64564 1.73148 6.00708 1.17965 4.04742C1.15768 3.97 1.12586 3.89082 1.1281 3.81296C1.13123 3.71135 1.12989 3.56971 1.1922 3.52044C1.25496 3.47074 1.41455 3.47602 1.49479 3.52044C1.95383 3.77733 2.42093 4.02674 2.84993 4.32718C4.36556 5.38729 5.54095 6.74212 6.39671 8.3644C6.42988 8.4273 6.46709 8.488 6.52447 8.54123C6.44916 8.15589 6.36981 7.771 6.29854 7.38523C6.08919 6.25342 6.06364 5.11809 6.20171 3.9744C6.35188 2.7335 6.66657 1.53747 7.15206 0.384102C7.22064 0.221346 7.26009 -0.00563175 7.49365 8.66869e-05C7.72316 0.00536524 7.75589 0.230584 7.82537 0.395099C8.53858 2.07808 8.8972 3.83012 8.85148 5.65342C8.82727 6.62072 8.6641 7.57261 8.42875 8.5122C8.42024 8.54563 8.41531 8.58038 8.4041 8.63712C8.65424 8.21176 8.87614 7.80003 9.13031 7.4081C10.16 5.81881 11.5219 4.57263 13.202 3.66252C13.332 3.59214 13.4665 3.52616 13.6064 3.47821C13.7745 3.42015 13.8969 3.50549 13.8794 3.68144C13.8605 3.86839 13.8144 4.0549 13.7597 4.23569C13.1419 6.28905 11.9352 7.94739 10.2411 9.27759C10.1188 9.37348 9.99728 9.47069 9.87579 9.56791C9.86504 9.57671 9.86011 9.59254 9.82514 9.64753Z"/>
                        </clipPath>
                        <linearGradient id="paint0_diamond_1_2940_desktop" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00FF4F"/>
                          <stop offset="1" stopColor="#00C43D"/>
                        </linearGradient>
                        <linearGradient id="paint0_diamond_1_2940_desktop_2" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00FF4F"/>
                          <stop offset="1" stopColor="#00C43D"/>
                        </linearGradient>
                      </defs>
                    </svg>
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
                  className="flex items-center justify-center hover:scale-105 transition-transform"
                  style={{
                    borderRadius: '74px',
                    height: '42px',
                    background: 'linear-gradient(to top, rgba(0, 196, 61, 1), rgba(0, 255, 79, 1))'
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
