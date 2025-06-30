import React from "react";
import type { JSX } from "react";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";

// Import background image
import italyBgImg from "@/static/img/italybg.jpg";

export const MarketScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout - Exact Figma Dimensions (393x852) - up to 767px */}
      <div className="relative w-full h-screen overflow-hidden md:hidden">
        {/* Background Image */}
        <div 
          className="absolute"
          style={{
            width: '486px',
            height: '851px',
            left: '-43px',
            filter: 'blur(2px)',
            backgroundImage: `url(${italyBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* MARKET Title */}
        <div className="absolute w-[137px] h-[34px] left-[128px] top-[59px] z-20">
          <h1 className="text-white text-[32px] font-normal leading-[34px] text-center tracking-[0.02em]" style={{ fontFamily: 'Bangers' }}>
            MARKET
          </h1>
        </div>

        {/* Middle Element */}
        <div 
          className="absolute z-20"
          style={{
            width: 'calc(100% - 32px)',
            height: '136px',
            top: '317px',
            left: '16px',
            right: '16px',
            borderRadius: '4px',
            background: '#000000B2',
            border: '0.5px solid #FFFFFF66'
          }}
        >
          {/* ITEM Label */}
          <div 
            className="absolute"
            style={{
              width: '29px',
              height: '16px',
              top: '14px',
              left: '24px'
            }}
          >
            <span 
              style={{
                fontFamily: 'Roboto Condensed',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}
            >
              ITEM
            </span>
          </div>

          {/* BUY Label */}
          <div 
            className="absolute"
            style={{
              width: '24px',
              height: '16px',
              top: '14px',
              left: '146px'
            }}
          >
            <span 
              style={{
                fontFamily: 'Roboto Condensed',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}
            >
              BUY
            </span>
          </div>

          {/* SELL Label */}
          <div 
            className="absolute"
            style={{
              width: '28px',
              height: '16px',
              top: '14px',
              left: '213px'
            }}
          >
            <span 
              style={{
                fontFamily: 'Roboto Condensed',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}
            >
              SELL
            </span>
          </div>

          {/* Divider Line */}
          <div 
            className="absolute"
            style={{
              width: '100%',
              top: '46px',
              left: '0',
              borderTop: '0.5px solid #FFFFFF66'
            }}
          />
        </div>

        {/* Bottom Element */}
        <div 
          className="absolute z-20"
          style={{
            width: 'calc(100% - 32px)',
            height: '93px',
            top: '461px',
            left: '16px',
            right: '16px',
            borderRadius: '4px',
            background: '#000000B2',
            border: '0.5px solid #FFFFFF66'
          }}
        />

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
          src={italyBgImg}
        />

        {/* Desktop Content - Centered Layout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pb-20">
          {/* Title */}
          <div className="text-center mb-7">
            <h1 className="text-white text-5xl font-black tracking-wider" style={{ fontFamily: 'Bangers' }}>
              MARKET
            </h1>
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
