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
      <div className="relative w-full h-screen overflow-hidden md:hidden">
        {/* Background Image */}
        <div 
          className="absolute"
          style={{
            width: '429px',
            height: '751px',
            top: '-12px',
            left: '-27px',
            filter: 'blur(2px)',
            backgroundImage: `url(${WeedBgMobile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

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
        <div 
          className={`absolute w-[176px] h-[298px] left-[calc(50%-176px/2-92.5px)] top-[277px] rounded-[4px] flex flex-col items-center pt-[15px] px-[15px] pb-0 z-20 border ${isGrowActive ? 'border-[#3CE000]' : 'border-[#6e6b67] border-opacity-40'}`}
          style={{ 
            background: 'rgba(0, 0, 0, 0.7)', 
            backdropFilter: 'blur(10px)'
          }}
        >
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

          {/* Requirements Frame / In Progress Frame */}
          {!isGrowActive ? (
            <div className="w-[144px] h-[111px] rounded-[4px] relative" style={{ background: 'rgba(255, 255, 255, 0)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}>
              {/* REQUIRES text */}
              <div className="absolute w-[49px] h-[14px] left-[calc(50%-49px/2+0.5px)] top-[9px]">
                <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[14px]" style={{ fontFamily: 'Roboto Condensed' }}>
                  REQUIRES
                </span>
              </div>
              
              {/* Icon Frame */}
              <div className="absolute w-[24px] h-[24px] left-[calc(50%-24px/2)] top-[36px]">
                <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_2946_mobile)">
                      <path d="M11.07 6.78247C11.0781 8.7313 10.3875 10.3939 8.92309 11.713C8.16388 12.3969 7.3014 12.8865 6.26424 12.9796C5.10445 13.0841 4.05883 12.7727 3.15157 12.0329C2.01033 11.1024 1.32777 9.88934 1.06516 8.4515C0.560495 5.68436 1.4855 3.40918 3.51181 1.53809C4.23754 0.867968 5.07501 0.374789 6.02422 0.108359C6.37841 0.00875156 6.76527 -0.00218098 7.13681 -0.000156433C7.42081 0.0014632 7.69391 0.130224 7.88674 0.34766C8.50637 1.04694 9.1615 1.72233 9.71215 2.47424C10.6384 3.73958 11.0708 5.18996 11.07 6.78247ZM6.42803 1.32875C6.33726 1.33564 6.32193 1.3328 6.31185 1.33847C6.27675 1.35831 6.24286 1.37977 6.20979 1.40285C5.25977 2.06771 4.58648 2.96378 4.0911 3.99872C3.35004 5.54628 3.11849 7.17766 3.36578 8.87301C3.50213 9.80592 3.83413 10.6647 4.43924 11.4013C4.50701 11.4839 4.58971 11.5547 4.66555 11.6313C3.50616 7.89759 4.01284 4.47004 6.42803 1.32916V1.32875Z" fill="url(#paint0_linear_1_2946_mobile)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_1_2946_mobile" x1="5.99989" y1="-0.000366211" x2="6" y2="13" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFE1CB"/>
                        <stop offset="1" stopColor="#85622A"/>
                      </linearGradient>
                      <clipPath id="clip0_1_2946_mobile">
                        <rect width="10.14" height="13" fill="white" transform="translate(0.930176)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* 20 SEEDS */}
              <div className="absolute w-[55px] h-[16px] left-[calc(50%-55px/2+0.5px)] top-[61px]">
                <span className="text-white text-[14px] font-bold leading-[16px]" style={{ fontFamily: 'Roboto Condensed' }}>
                  20 SEEDS
                </span>
              </div>
              
              {/* 20 available */}
              <div className="absolute w-[57px] h-[14px] left-[calc(50%-57px/2+0.5px)] top-[81px]">
                <span className="text-[#AEAEAE] text-[12px] font-normal leading-[14px] text-center" style={{ fontFamily: 'Roboto Condensed' }}>
                  20 available
                </span>
              </div>
            </div>
          ) : (
            <div 
              className="w-[144px] h-[111px] rounded-[4px] relative" 
              style={{ 
                background: 'linear-gradient(180deg, #10341D 0%, #318952 100%)',
                border: '1px solid #3CE000'
              }}
            >
              {/* IN PROGRESS text */}
              <div className="absolute w-[77px] h-[14px]" style={{ left: '34px', top: '16px' }}>
                <span 
                  className="text-white text-[12px] font-semibold leading-[100%]" 
                  style={{ 
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 600,
                    letterSpacing: '0%'
                  }}
                >
                  IN PROGRESS...
                </span>
              </div>
              
              {/* Circle Component */}
              <div className="absolute w-[64px] h-[64px]" style={{ left: '40px', top: '37px' }}>
                <svg width="68" height="72" viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="36" cy="32" r="30.53" stroke="#003D16" strokeWidth="2.94"/>
                  <mask id="mask0_1_3048" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="4" y="0" width="64" height="64">
                    <circle cx="36" cy="32" r="30.53" stroke="#5BFF8E" strokeWidth="2.94"/>
                  </mask>
                  <g mask="url(#mask0_1_3048)">
                    <g filter="url(#filter0_f_1_3048)">
                      <rect x="-22" y="31" width="58" height="40" fill="#5BFF8E"/>
                    </g>
                  </g>
                  <g filter="url(#filter1_f_1_3048)">
                    <mask id="mask1_1_3048" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="4" y="0" width="64" height="64">
                      <circle cx="36" cy="32" r="30.53" stroke="#5BFF8E" strokeWidth="2.94"/>
                    </mask>
                    <g mask="url(#mask1_1_3048)">
                      <g filter="url(#filter2_f_1_3048)">
                        <rect x="-22" y="31" width="58" height="40" fill="#00FF4F"/>
                      </g>
                    </g>
                  </g>
                  <mask id="mask2_1_3048" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="4" y="0" width="64" height="64">
                    <circle cx="36" cy="32" r="30.53" stroke="#5BFF8E" strokeWidth="2.94"/>
                  </mask>
                  <g mask="url(#mask2_1_3048)">
                    <rect x="36" y="32" width="54" height="40" fill="#013D16"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_1_3048" x="-36" y="17" width="86" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1_3048"/>
                    </filter>
                    <filter id="filter1_f_1_3048" x="0" y="27" width="40" height="41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1_3048"/>
                    </filter>
                    <filter id="filter2_f_1_3048" x="-36" y="17" width="86" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1_3048"/>
                    </filter>
                  </defs>
                </svg>
                
                {/* Weed Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#paint0_diamond_1_3047_clip_path)">
                      <g transform="matrix(0 0.015 -0.014 0 14 15)">
                        <rect x="0" y="0" width="1066.67" height="1071.43" fill="url(#paint0_diamond_1_3047)" opacity="1" shapeRendering="crispEdges"/>
                        <rect x="0" y="0" width="1066.67" height="1071.43" transform="scale(1 -1)" fill="url(#paint0_diamond_1_3047)" opacity="1" shapeRendering="crispEdges"/>
                        <rect x="0" y="0" width="1066.67" height="1071.43" transform="scale(-1 1)" fill="url(#paint0_diamond_1_3047)" opacity="1" shapeRendering="crispEdges"/>
                        <rect x="0" y="0" width="1066.67" height="1071.43" transform="scale(-1)" fill="url(#paint0_diamond_1_3047)" opacity="1" shapeRendering="crispEdges"/>
                      </g>
                    </g>
                    <path d="M18.6503 19.2951C20.1798 18.6581 21.6735 18.2824 23.2039 18.0511C24.5953 17.8408 25.9958 17.7616 27.3971 17.9437C27.6158 17.9719 27.926 18.125 27.987 18.2921C28.0462 18.4558 27.8956 18.7681 27.7396 18.9176C26.0271 20.5593 23.9238 21.4962 21.634 22.0425C20.611 22.2871 19.5549 22.3953 18.5427 22.5607C19.6598 22.9126 20.741 23.4528 21.7174 24.1768C22.1442 24.4935 22.5566 24.8384 22.9224 25.2194C23.0676 25.3707 23.1456 25.6698 23.1053 25.873C23.0847 25.9803 22.7449 26.093 22.5485 26.093C19.8606 26.0982 17.4588 25.2836 15.3617 23.6243C15.2586 23.5425 15.1537 23.4625 14.9834 23.3305V29.985L12.9428 30V23.3789C11.355 24.7786 9.47492 25.5695 7.41285 25.9548C6.78795 26.0718 6.13794 26.0806 5.4987 26.0894C5.29518 26.0921 4.94552 25.9671 4.91683 25.8431C4.87111 25.6504 4.97421 25.3258 5.1329 25.2C5.97567 24.5314 6.83098 23.8707 7.73202 23.2812C8.24037 22.9487 8.84554 22.7569 9.39423 22.5088C7.47381 22.3593 5.58835 21.9422 3.79165 21.1716C2.63689 20.6763 1.56371 20.0508 0.623225 19.2185C0.468121 19.0813 0.309431 18.9449 0.174947 18.7892C-0.135261 18.4276 -0.0258805 18.0476 0.450191 17.9895C1.15847 17.9024 1.87841 17.8364 2.58938 17.8637C4.59497 17.942 6.55036 18.3168 8.44388 18.9792C8.73347 19.0804 9.01768 19.2 9.33327 19.2722C8.79534 18.8349 8.24844 18.4083 7.72216 17.9587C4.60394 15.2913 2.46296 12.0142 1.3593 8.09484C1.31537 7.94 1.25171 7.78164 1.25619 7.62593C1.26247 7.4227 1.25978 7.13942 1.3844 7.04089C1.50992 6.94147 1.8291 6.95203 1.98958 7.04089C2.90765 7.55467 3.84186 8.05349 4.69987 8.65436C7.73112 10.7746 10.0819 13.4842 11.7934 16.7288C11.8598 16.8546 11.9342 16.976 12.0489 17.0825C11.8983 16.3118 11.7396 15.542 11.5971 14.7705C11.1784 12.5068 11.1273 10.2362 11.4034 7.9488C11.7038 5.467 12.3331 3.07493 13.3041 0.768203C13.4413 0.442692 13.5202 -0.0112635 13.9873 0.000173374C14.4463 0.0107305 14.5118 0.461167 14.6507 0.790197C16.0772 4.15616 16.7944 7.66024 16.703 11.3068C16.6545 13.2414 16.3282 15.1452 15.8575 17.0244C15.8405 17.0913 15.8306 17.1608 15.8082 17.2742C16.3085 16.4235 16.7523 15.6001 17.2606 14.8162C19.32 11.6376 22.0437 9.14527 25.404 7.32505C25.664 7.18429 25.933 7.05232 26.2127 6.95643C26.5489 6.8403 26.7937 7.01097 26.7587 7.36288C26.7211 7.73678 26.6287 8.10979 26.5194 8.47138C25.2839 12.5781 22.8704 15.8948 19.4823 18.5552C19.2375 18.747 18.9946 18.9414 18.7516 19.1358C18.7301 19.1534 18.7202 19.1851 18.6503 19.2951Z" fill="url(#paint0_diamond_1_3047_fill)"/>
                    <defs>
                      <clipPath id="paint0_diamond_1_3047_clip_path">
                        <path d="M18.6503 19.2951C20.1798 18.6581 21.6735 18.2824 23.2039 18.0511C24.5953 17.8408 25.9958 17.7616 27.3971 17.9437C27.6158 17.9719 27.926 18.125 27.987 18.2921C28.0462 18.4558 27.8956 18.7681 27.7396 18.9176C26.0271 20.5593 23.9238 21.4962 21.634 22.0425C20.611 22.2871 19.5549 22.3953 18.5427 22.5607C19.6598 22.9126 20.741 23.4528 21.7174 24.1768C22.1442 24.4935 22.5566 24.8384 22.9224 25.2194C23.0676 25.3707 23.1456 25.6698 23.1053 25.873C23.0847 25.9803 22.7449 26.093 22.5485 26.093C19.8606 26.0982 17.4588 25.2836 15.3617 23.6243C15.2586 23.5425 15.1537 23.4625 14.9834 23.3305V29.985L12.9428 30V23.3789C11.355 24.7786 9.47492 25.5695 7.41285 25.9548C6.78795 26.0718 6.13794 26.0806 5.4987 26.0894C5.29518 26.0921 4.94552 25.9671 4.91683 25.8431C4.87111 25.6504 4.97421 25.3258 5.1329 25.2C5.97567 24.5314 6.83098 23.8707 7.73202 23.2812C8.24037 22.9487 8.84554 22.7569 9.39423 22.5088C7.47381 22.3593 5.58835 21.9422 3.79165 21.1716C2.63689 20.6763 1.56371 20.0508 0.623225 19.2185C0.468121 19.0813 0.309431 18.9449 0.174947 18.7892C-0.135261 18.4276 -0.0258805 18.0476 0.450191 17.9895C1.15847 17.9024 1.87841 17.8364 2.58938 17.8637C4.59497 17.942 6.55036 18.3168 8.44388 18.9792C8.73347 19.0804 9.01768 19.2 9.33327 19.2722C8.79534 18.8349 8.24844 18.4083 7.72216 17.9587C4.60394 15.2913 2.46296 12.0142 1.3593 8.09484C1.31537 7.94 1.25171 7.78164 1.25619 7.62593C1.26247 7.4227 1.25978 7.13942 1.3844 7.04089C1.50992 6.94147 1.8291 6.95203 1.98958 7.04089C2.90765 7.55467 3.84186 8.05349 4.69987 8.65436C7.73112 10.7746 10.0819 13.4842 11.7934 16.7288C11.8598 16.8546 11.9342 16.976 12.0489 17.0825C11.8983 16.3118 11.7396 15.542 11.5971 14.7705C11.1784 12.5068 11.1273 10.2362 11.4034 7.9488C11.7038 5.467 12.3331 3.07493 13.3041 0.768203C13.4413 0.442692 13.5202 -0.0112635 13.9873 0.000173374C14.4463 0.0107305 14.5118 0.461167 14.6507 0.790197C16.0772 4.15616 16.7944 7.66024 16.703 11.3068C16.6545 13.2414 16.3282 15.1452 15.8575 17.0244C15.8405 17.0913 15.8306 17.1608 15.8082 17.2742C16.3085 16.4235 16.7523 15.6001 17.2606 14.8162C19.32 11.6376 22.0437 9.14527 25.404 7.32505C25.664 7.18429 25.933 7.05232 26.2127 6.95643C26.5489 6.8403 26.7937 7.01097 26.7587 7.36288C26.7211 7.73678 26.6287 8.10979 26.5194 8.47138C25.2839 12.5781 22.8704 15.8948 19.4823 18.5552C19.2375 18.747 18.9946 18.9414 18.7516 19.1358C18.7301 19.1534 18.7202 19.1851 18.6503 19.2951Z"/>
                      </clipPath>
                      <linearGradient id="paint0_diamond_1_3047" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00FF4F"/>
                        <stop offset="1" stopColor="#00C43D"/>
                      </linearGradient>
                      <linearGradient id="paint0_diamond_1_3047_fill" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00FF4F"/>
                        <stop offset="1" stopColor="#00C43D"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          )}

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

          {/* Grow Power Tier 1 Element - Shows when active */}
          {isGrowActive && (
            <div 
              className="w-[134px] h-[24px] rounded-[4px] flex items-center justify-center gap-[4px] mb-[8px]"
              style={{
                background: 'linear-gradient(180deg, #10341D 0%, #318952 100%), linear-gradient(180deg, #000000 0%, #666666 100%)',
                border: '1px solid #3CE000',
                paddingTop: '4px',
                paddingRight: '8px',
                paddingBottom: '4px',
                paddingLeft: '4px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Small Weed Icon */}
              <div className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.82514 9.64753C10.5899 9.32905 11.3367 9.14122 12.1019 9.02554C12.7977 8.9204 13.4979 8.88082 14.1985 8.97187C14.3079 8.98595 14.463 9.06249 14.4935 9.14606C14.5231 9.22788 14.4478 9.38404 14.3698 9.45882C13.5136 10.2796 12.4619 10.7481 11.317 11.0213C10.8055 11.1436 10.2775 11.1977 9.77135 11.2804C10.3299 11.4563 10.8705 11.7264 11.3587 12.0884C11.5721 12.2468 11.7783 12.4192 11.9612 12.6097C12.0338 12.6853 12.0728 12.8349 12.0526 12.9365C12.0423 12.9902 11.8724 13.0465 11.7743 13.0465C10.4303 13.0491 9.22938 12.6418 8.18085 11.8122C8.1293 11.7713 8.07685 11.7312 7.99168 11.6653V14.9925L6.9714 15V11.6894C6.1775 12.3893 5.23746 12.7847 4.20642 12.9774C3.89397 13.0359 3.56897 13.0403 3.24935 13.0447C3.14759 13.046 2.97276 12.9836 2.95842 12.9215C2.93555 12.8252 2.98711 12.6629 3.06645 12.6C3.48783 12.2657 3.91549 11.9353 4.36601 11.6406C4.62018 11.4743 4.92277 11.3785 5.19712 11.2544C4.23691 11.1796 3.29418 10.9711 2.39583 10.5858C1.81844 10.3381 1.28186 10.0254 0.811613 9.60926C0.734061 9.54064 0.654715 9.47245 0.587474 9.3946C0.43237 9.2138 0.48706 9.02378 0.725095 8.99474C1.07924 8.9512 1.4392 8.91821 1.79469 8.93184C2.79749 8.97099 3.77518 9.15838 4.72194 9.48961C4.86674 9.54019 5.00884 9.60002 5.16663 9.63609C4.89767 9.41747 4.62422 9.20413 4.36108 8.97935C2.80197 7.64564 1.73148 6.00708 1.17965 4.04742C1.15768 3.97 1.12586 3.89082 1.1281 3.81296C1.13123 3.71135 1.12989 3.56971 1.1922 3.52044C1.25496 3.47074 1.41455 3.47602 1.49479 3.52044C1.95383 3.77733 2.42093 4.02674 2.84993 4.32718C4.36556 5.38729 5.54095 6.74212 6.39671 8.3644C6.42988 8.4273 6.46709 8.488 6.52447 8.54123C6.44916 8.15589 6.36981 7.771 6.29854 7.38523C6.08919 6.25342 6.06364 5.11809 6.20171 3.9744C6.35188 2.7335 6.66657 1.53747 7.15206 0.384102C7.22064 0.221346 7.26009 -0.00563175 7.49365 8.66869e-05C7.72316 0.00536524 7.75589 0.230584 7.82537 0.395099C8.53858 2.07808 8.8972 3.83012 8.85148 5.65342C8.82727 6.62072 8.6641 7.57261 8.42875 8.5122C8.42024 8.54563 8.41531 8.58038 8.4041 8.63712C8.65424 8.21176 8.87614 7.80003 9.13031 7.4081C10.16 5.81881 11.5219 4.57263 13.202 3.66252C13.332 3.59214 13.4665 3.52616 13.6064 3.47821C13.7745 3.42015 13.8969 3.50549 13.8794 3.68144C13.8605 3.86839 13.8144 4.0549 13.7597 4.23569C13.1419 6.28905 11.9352 7.94739 10.2411 9.27759C10.1188 9.37348 9.99728 9.47069 9.87579 9.56791C9.86504 9.57671 9.86011 9.59254 9.82514 9.64753Z" fill="#00FF4F"/>
                </svg>
              </div>
              
              {/* Text */}
              <span 
                className="text-[12px] whitespace-nowrap flex-shrink-0"
                style={{ 
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: '#BBF88E',
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                GROW POWER TIER 1
              </span>
            </div>
          )}

          {/* GROW Button / Timer */}
          {!isGrowActive ? (
            <button 
              onClick={handleGrowClick}
              className="w-[144px] h-[35px] rounded-[74px] flex items-center justify-center mb-[15px] mt-auto"
              style={{ 
                background: 'linear-gradient(to top, #10341D, #318952)',
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(to top, #10341D, #318952), linear-gradient(to top, #76E39D, #6BBA1C)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box'
              }}
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
            <div className="absolute w-[49px] h-[14px] left-[calc(50%-49px/2+0.5px)] top-[9px]">
              <span className="text-[#AEAEAE] text-[12px] font-semibold leading-[14px]" style={{ fontFamily: 'Roboto Condensed' }}>
                REQUIRES
              </span>
            </div>
            
            {/* Icon Frame */}
            <div className="absolute w-[24px] h-[24px] left-[calc(50%-24px/2)] top-[36px]">
              <div className="absolute w-[24px] h-[24px] bg-gradient-to-b from-black to-[#666666] rounded-full mix-blend-luminosity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.06524 11.9986C3.9627 11.9986 2.86016 12.0025 1.75762 11.9972C1.05823 11.9939 0.516609 11.7171 0.185046 11.13C-0.0412554 10.7291 -0.0579748 10.3056 0.12382 9.88551C0.42218 9.19704 0.734904 8.5141 1.03538 7.8263C1.54874 6.65069 2.05833 5.47353 2.56557 4.29548C2.60277 4.20917 2.62632 4.11117 2.62726 4.01824C2.63503 3.22405 2.63833 2.42964 2.63621 1.63545C2.63621 1.55598 2.6096 1.46548 2.56392 1.39904C2.42168 1.19266 2.26415 0.995545 2.11273 0.7949C1.93965 0.565781 1.95001 0.322093 2.14216 0.144625C2.23871 0.0554493 2.35622 0.0115237 2.49162 0.0115237C3.5904 0.0106408 4.68894 0.0108615 5.78771 0.00909567C6.29353 0.00821275 6.79936 0.00446031 7.30518 4.56816e-05C7.52865 -0.0019409 7.7194 0.0605261 7.82796 0.254108C7.93863 0.451662 7.88871 0.638401 7.74648 0.807482C7.59553 0.986716 7.44859 1.16772 7.40031 1.39948C7.39584 1.42089 7.38901 1.44275 7.38901 1.46438C7.38595 2.31684 7.38124 3.16953 7.38383 4.02199C7.38407 4.11779 7.41162 4.21889 7.45071 4.30828C8.25089 6.14543 9.04659 7.98457 9.86066 9.8162C10.2735 10.745 9.72126 11.6842 8.8323 11.9145C8.59941 11.9747 8.34508 11.9778 8.10041 11.9794C7.08877 11.986 6.07736 11.9822 5.06571 11.9822C5.06571 11.9878 5.06571 11.9931 5.06571 11.9986H5.06524ZM3.34385 3.01502C3.34385 3.29844 3.34455 3.56287 3.34314 3.82709C3.3429 3.88779 3.37493 3.89949 3.43192 3.89861C3.60453 3.89596 3.77714 3.89441 3.94975 3.89772C4.12895 3.90103 4.24269 4.00897 4.23963 4.16525C4.23633 4.3255 4.12377 4.42704 3.94598 4.42814C3.76937 4.42902 3.59275 4.43211 3.41637 4.42682C3.33301 4.42439 3.29204 4.44977 3.26213 4.52526C3.16134 4.7791 3.05443 5.03096 2.94352 5.28105C2.22929 6.89415 1.51389 8.5066 0.79825 10.119C0.552874 10.672 0.975806 11.2887 1.61303 11.2898C3.87298 11.2933 6.13293 11.2929 8.39289 11.2898C9.01928 11.2889 9.44645 10.6817 9.21049 10.1389C9.06755 9.81002 8.91755 9.48377 8.77296 9.15555C8.12184 7.67665 7.47096 6.19774 6.82126 4.71818C6.72353 4.49546 6.61073 4.27826 6.61379 4.02619C6.62345 3.2139 6.6324 2.40138 6.62863 1.58909C6.62745 1.32201 6.655 1.07037 6.81749 0.843682C6.82008 0.84015 6.81372 0.830879 6.81349 0.830217H3.03489C3.08505 0.89158 3.1199 0.935947 3.15687 0.978548C3.3137 1.15999 3.38411 1.36328 3.37093 1.60035C3.35633 1.86081 3.36739 2.12238 3.36057 2.38328C3.35821 2.4718 3.38058 2.50711 3.48419 2.5038C3.72321 2.4963 3.9627 2.49828 4.20195 2.50137C4.34395 2.50314 4.45016 2.59563 4.46711 2.721C4.48501 2.85101 4.40023 2.97529 4.26553 3.00619C4.21702 3.01745 4.16428 3.01436 4.11341 3.01458C3.86733 3.01524 3.62101 3.0148 3.34408 3.0148L3.34385 3.01502Z" fill="url(#paint0_linear_1_2966_mobile)"/>
                  <path d="M4.99125 10.829C3.9789 10.829 2.96654 10.829 1.95419 10.829C1.90333 10.829 1.85176 10.8305 1.80136 10.8246C1.40504 10.7789 1.22419 10.4833 1.37867 10.137C2.00788 8.72452 2.6371 7.31228 3.2642 5.89916C3.29246 5.83537 3.32825 5.80976 3.40172 5.80976C4.472 5.80711 5.54205 5.80358 6.61209 5.79652C6.70629 5.79585 6.74161 5.83801 6.77269 5.90887C7.22058 6.93196 7.66966 7.95461 8.11967 8.97682C8.28663 9.35603 8.46065 9.73238 8.62361 10.1129C8.79622 10.5158 8.56521 10.8272 8.09871 10.8276C7.06281 10.8285 6.02691 10.8279 4.99101 10.8279V10.8294L4.99125 10.829ZM6.84616 9.42954C6.84758 9.08806 6.57112 8.82054 6.21601 8.81965C5.85336 8.81877 5.55877 9.09292 5.55523 9.43417C5.55194 9.76483 5.83876 10.033 6.19787 10.0352C6.56146 10.0374 6.84475 9.77277 6.84616 9.42976V9.42954ZM5.41182 7.41183C5.41182 7.14408 5.18882 6.9335 4.90788 6.93659C4.61141 6.93968 4.38534 7.14408 4.38346 7.41073C4.38157 7.67428 4.60764 7.89082 4.88575 7.8917C5.18529 7.89258 5.41182 7.6862 5.41206 7.41205L5.41182 7.41183ZM3.42291 8.92362C3.41632 9.11676 3.58069 9.2748 3.79027 9.27679C3.98502 9.27878 4.15716 9.11897 4.16069 8.93267C4.16422 8.74571 4.01116 8.59605 3.80958 8.58921C3.59623 8.58193 3.42998 8.72584 3.42315 8.92362H3.42291Z" fill="url(#paint1_linear_1_2966_mobile)"/>
                  <defs>
                    <linearGradient id="paint0_linear_1_2966_mobile" x1="5" y1="0" x2="5" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#35B2FF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_2966_mobile" x1="5.00223" y1="5.79651" x2="5.00223" y2="10.8294" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A8E5FF"/>
                      <stop offset="1" stopColor="#006B99"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            {/* 20 CHEMICALS */}
            <div className="absolute w-[86px] h-[16px] left-[calc(50%-86px/2)] top-[61px]">
              <span className="text-white text-[14px] font-bold leading-[16px]" style={{ fontFamily: 'Roboto Condensed' }}>
                20 CHEMICALS
              </span>
            </div>
            
            {/* 20 available */}
            <div className="absolute w-[57px] h-[14px] left-[calc(50%-57px/2+0.5px)] top-[81px]">
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
          <button 
            className="w-[144px] h-[35px] rounded-[74px] flex items-center justify-center mb-[15px] mt-auto"
            style={{ 
              background: 'linear-gradient(to top, #10341D, #318952)',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(to top, #10341D, #318952), linear-gradient(to top, #76E39D, #6BBA1C)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box'
            }}
          >
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
                border: isGrowActive 
                  ? '1px solid #3CE000'
                  : '0.5px solid rgba(255, 255, 255, 0.4)',
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
                    <svg width="14" height="16" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_2946_desktop)">
                        <path d="M11.07 6.78247C11.0781 8.7313 10.3875 10.3939 8.92309 11.713C8.16388 12.3969 7.3014 12.8865 6.26424 12.9796C5.10445 13.0841 4.05883 12.7727 3.15157 12.0329C2.01033 11.1024 1.32777 9.88934 1.06516 8.4515C0.560495 5.68436 1.4855 3.40918 3.51181 1.53809C4.23754 0.867968 5.07501 0.374789 6.02422 0.108359C6.37841 0.00875156 6.76527 -0.00218098 7.13681 -0.000156433C7.42081 0.0014632 7.69391 0.130224 7.88674 0.34766C8.50637 1.04694 9.1615 1.72233 9.71215 2.47424C10.6384 3.73958 11.0708 5.18996 11.07 6.78247ZM6.42803 1.32875C6.33726 1.33564 6.32193 1.3328 6.31185 1.33847C6.27675 1.35831 6.24286 1.37977 6.20979 1.40285C5.25977 2.06771 4.58648 2.96378 4.0911 3.99872C3.35004 5.54628 3.11849 7.17766 3.36578 8.87301C3.50213 9.80592 3.83413 10.6647 4.43924 11.4013C4.50701 11.4839 4.58971 11.5547 4.66555 11.6313C3.50616 7.89759 4.01284 4.47004 6.42803 1.32916V1.32875Z" fill="url(#paint0_linear_1_2946_desktop)"/>
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_1_2946_desktop" x1="5.99989" y1="-0.000366211" x2="6" y2="13" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFE1CB"/>
                          <stop offset="1" stopColor="#85622A"/>
                        </linearGradient>
                        <clipPath id="clip0_1_2946_desktop">
                          <rect width="10.14" height="13" fill="white" transform="translate(0.930176)"/>
                        </clipPath>
                      </defs>
                    </svg>
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
                    background: 'linear-gradient(to top, #10341D, #318952)',
                    border: '1px solid transparent',
                    backgroundImage: 'linear-gradient(to top, #10341D, #318952), linear-gradient(to top, #76E39D, #6BBA1C)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'content-box, border-box'
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
                    <svg width="12" height="14" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.06524 11.9986C3.9627 11.9986 2.86016 12.0025 1.75762 11.9972C1.05823 11.9939 0.516609 11.7171 0.185046 11.13C-0.0412554 10.7291 -0.0579748 10.3056 0.12382 9.88551C0.42218 9.19704 0.734904 8.5141 1.03538 7.8263C1.54874 6.65069 2.05833 5.47353 2.56557 4.29548C2.60277 4.20917 2.62632 4.11117 2.62726 4.01824C2.63503 3.22405 2.63833 2.42964 2.63621 1.63545C2.63621 1.55598 2.6096 1.46548 2.56392 1.39904C2.42168 1.19266 2.26415 0.995545 2.11273 0.7949C1.93965 0.565781 1.95001 0.322093 2.14216 0.144625C2.23871 0.0554493 2.35622 0.0115237 2.49162 0.0115237C3.5904 0.0106408 4.68894 0.0108615 5.78771 0.00909567C6.29353 0.00821275 6.79936 0.00446031 7.30518 4.56816e-05C7.52865 -0.0019409 7.7194 0.0605261 7.82796 0.254108C7.93863 0.451662 7.88871 0.638401 7.74648 0.807482C7.59553 0.986716 7.44859 1.16772 7.40031 1.39948C7.39584 1.42089 7.38901 1.44275 7.38901 1.46438C7.38595 2.31684 7.38124 3.16953 7.38383 4.02199C7.38407 4.11779 7.41162 4.21889 7.45071 4.30828C8.25089 6.14543 9.04659 7.98457 9.86066 9.8162C10.2735 10.745 9.72126 11.6842 8.8323 11.9145C8.59941 11.9747 8.34508 11.9778 8.10041 11.9794C7.08877 11.986 6.07736 11.9822 5.06571 11.9822C5.06571 11.9878 5.06571 11.9931 5.06571 11.9986H5.06524ZM3.34385 3.01502C3.34385 3.29844 3.34455 3.56287 3.34314 3.82709C3.3429 3.88779 3.37493 3.89949 3.43192 3.89861C3.60453 3.89596 3.77714 3.89441 3.94975 3.89772C4.12895 3.90103 4.24269 4.00897 4.23963 4.16525C4.23633 4.3255 4.12377 4.42704 3.94598 4.42814C3.76937 4.42902 3.59275 4.43211 3.41637 4.42682C3.33301 4.42439 3.29204 4.44977 3.26213 4.52526C3.16134 4.7791 3.05443 5.03096 2.94352 5.28105C2.22929 6.89415 1.51389 8.5066 0.79825 10.119C0.552874 10.672 0.975806 11.2887 1.61303 11.2898C3.87298 11.2933 6.13293 11.2929 8.39289 11.2898C9.01928 11.2889 9.44645 10.6817 9.21049 10.1389C9.06755 9.81002 8.91755 9.48377 8.77296 9.15555C8.12184 7.67665 7.47096 6.19774 6.82126 4.71818C6.72353 4.49546 6.61073 4.27826 6.61379 4.02619C6.62345 3.2139 6.6324 2.40138 6.62863 1.58909C6.62745 1.32201 6.655 1.07037 6.81749 0.843682C6.82008 0.84015 6.81372 0.830879 6.81349 0.830217H3.03489C3.08505 0.89158 3.1199 0.935947 3.15687 0.978548C3.3137 1.15999 3.38411 1.36328 3.37093 1.60035C3.35633 1.86081 3.36739 2.12238 3.36057 2.38328C3.35821 2.4718 3.38058 2.50711 3.48419 2.5038C3.72321 2.4963 3.9627 2.49828 4.20195 2.50137C4.34395 2.50314 4.45016 2.59563 4.46711 2.721C4.48501 2.85101 4.40023 2.97529 4.26553 3.00619C4.21702 3.01745 4.16428 3.01436 4.11341 3.01458C3.86733 3.01524 3.62101 3.0148 3.34408 3.0148L3.34385 3.01502Z" fill="url(#paint0_linear_1_2966_desktop)"/>
                      <path d="M4.99125 10.829C3.9789 10.829 2.96654 10.829 1.95419 10.829C1.90333 10.829 1.85176 10.8305 1.80136 10.8246C1.40504 10.7789 1.22419 10.4833 1.37867 10.137C2.00788 8.72452 2.6371 7.31228 3.2642 5.89916C3.29246 5.83537 3.32825 5.80976 3.40172 5.80976C4.472 5.80711 5.54205 5.80358 6.61209 5.79652C6.70629 5.79585 6.74161 5.83801 6.77269 5.90887C7.22058 6.93196 7.66966 7.95461 8.11967 8.97682C8.28663 9.35603 8.46065 9.73238 8.62361 10.1129C8.79622 10.5158 8.56521 10.8272 8.09871 10.8276C7.06281 10.8285 6.02691 10.8279 4.99101 10.8279V10.8294L4.99125 10.829ZM6.84616 9.42954C6.84758 9.08806 6.57112 8.82054 6.21601 8.81965C5.85336 8.81877 5.55877 9.09292 5.55523 9.43417C5.55194 9.76483 5.83876 10.033 6.19787 10.0352C6.56146 10.0374 6.84475 9.77277 6.84616 9.42976V9.42954ZM5.41182 7.41183C5.41182 7.14408 5.18882 6.9335 4.90788 6.93659C4.61141 6.93968 4.38534 7.14408 4.38346 7.41073C4.38157 7.67428 4.60764 7.89082 4.88575 7.8917C5.18529 7.89258 5.41182 7.6862 5.41206 7.41205L5.41182 7.41183ZM3.42291 8.92362C3.41632 9.11676 3.58069 9.2748 3.79027 9.27679C3.98502 9.27878 4.15716 9.11897 4.16069 8.93267C4.16422 8.74571 4.01116 8.59605 3.80958 8.58921C3.59623 8.58193 3.42998 8.72584 3.42315 8.92362H3.42291Z" fill="url(#paint1_linear_1_2966_desktop)"/>
                      <defs>
                        <linearGradient id="paint0_linear_1_2966_desktop" x1="5" y1="0" x2="5" y2="12" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white"/>
                          <stop offset="1" stopColor="#35B2FF"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_2966_desktop" x1="5.00223" y1="5.79651" x2="5.00223" y2="10.8294" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#A8E5FF"/>
                          <stop offset="1" stopColor="#006B99"/>
                        </linearGradient>
                      </defs>
                    </svg>
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
                className="flex items-center justify-center hover:scale-105 transition-transform"
                style={{
                  borderRadius: '74px',
                  height: '42px',
                  background: 'linear-gradient(to top, #10341D, #318952)',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(to top, #10341D, #318952), linear-gradient(to top, #76E39D, #6BBA1C)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box'
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
