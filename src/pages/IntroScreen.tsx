import type { JSX } from "react";
import { Link } from "react-router-dom";

// Import images from static directory
import backgroundImg from "../static/img/5-1.png";
import desktopBackgroundImg from "../static/img/telegram-chair.png"; // For bigger screens
import vectorImg from "../static/img/Vector.png"; // The green cannabis leaf
import shapeImg from "../static/img/organic-grunge-bold-shapes.svg"; // The grunge shape behind text

export const IntroScreen = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
          alt="Mobile Background"
          src={backgroundImg}
        />

        {/* Desktop Background Image - For bigger screens with reduced opacity */}
        <img
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          alt="Desktop Background"
          src={desktopBackgroundImg}
        />

        {/* Radial gradient overlay - emanating from center, starting black and fading out */}
        <div className="absolute inset-0 z-5" style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)'
        }}></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          {/* Logo Section - Centered */}
          <div className="flex flex-col items-center max-w-lg mx-auto">
            {/* Cannabis Leaf Logo */}
            <div className="mb-8">
              <img
                className="w-32 h-32 mx-auto"
                alt="Cannabis Leaf Logo"
                src={vectorImg}
                style={{
                  filter: 'brightness(1.2) saturate(1.8) drop-shadow(0 0 10px #22c55e)'
                }}
              />
            </div>

            {/* Main Title */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black mb-2 leading-none tracking-wider drop-shadow-2xl">
              DOPERAIDER
            </h1>

            {/* Tagline with grunge background */}
            <div className="relative mb-24 w-full">
              {/* Grunge shape background - Using organic-grunge-bold-shapes.svg */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  className="w-[500px] h-24 md:w-[600px] md:h-28 lg:w-[700px] lg:h-32 opacity-90 object-contain"
                  alt="Grunge background"
                  src={shapeImg}
                  style={{
                    filter: 'brightness(0.6) contrast(1.4) saturate(1.3)'
                  }}
                />
              </div>

              {/* Tagline text */}
              <p className="relative text-yellow-400 text-lg md:text-xl lg:text-2xl font-semibold italic tracking-widest px-8 py-4 z-10">
                RESPECT HAS A PRICE...
              </p>
            </div>

            {/* Play Game Button */}
            <Link
              to="/player/inventory"
              className="group relative inline-flex items-center justify-center"
            >
              {/* Button Glow Effect */}
              <div 
                className="absolute inset-0 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" 
                style={{
                  background: 'linear-gradient(to bottom, #103410, #318952)'
                }}
              />

              {/* Main Button with inner border gradient */}
              <div 
                className="relative transition-all duration-200 text-white px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transform group-hover:scale-105 group-active:scale-95"
                style={{
                  background: `
                    linear-gradient(to bottom, #76E39D, #6BBA1C) padding-box,
                    linear-gradient(to bottom, #103410, #318952) border-box
                  `,
                  border: '2px solid transparent'
                }}
              >
                {/* Inner content with main background */}
                <div 
                  className="absolute inset-[2px] rounded-full"
                  style={{
                    background: 'linear-gradient(to bottom, #103410, #318952)'
                  }}
                />
                
                <span className="relative text-white text-lg md:text-xl font-semibold z-10">
                  PLAY GAME
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};