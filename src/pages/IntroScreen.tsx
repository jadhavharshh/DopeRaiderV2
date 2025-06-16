import { type JSX } from "react";
import { Link } from "react-router-dom";

export const IntroScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-white overflow-hidden relative">
      {/* Background Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image */}
        <div className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            alt="Background"
            src="/img/5-1.png"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
          
          {/* Blur Effects - Hidden on mobile for performance */}
          <div className="hidden md:block">
            {/* White blur effects */}
            <div className="absolute top-1/4 right-1/4 w-64 h-96 bg-white/30 rounded-full blur-3xl" />
            <div className="absolute top-0 left-1/4 w-64 h-96 bg-white/30 rounded-full blur-3xl" />
            
            {/* Dark blur effects */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/50 rounded-full blur-3xl rotate-90" />
            <div className="absolute bottom-1/4 right-1/3 w-72 h-48 bg-black/90 rounded-full blur-3xl rotate-90" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-4 md:p-8 lg:p-12">
        
        {/* Logo and Title Section - Top */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto">
            {/* Logo */}
            <div className="mb-8 md:mb-12">
              <img 
                className="w-32 h-8 md:w-40 md:h-9 lg:w-48 lg:h-10 mx-auto mb-4" 
                alt="Logo" 
                src="/img/logo.svg" 
              />
              <img 
                className="w-20 h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 mx-auto" 
                alt="Vector" 
                src="/img/vector-2.svg" 
              />
            </div>

            {/* Title with Gradient Background */}
            <div className="relative inline-block">
              {/* Background shape */}
              <div 
                className="absolute inset-0 w-full h-12 md:h-14 bg-cover bg-center opacity-90"
                style={{
                  backgroundImage: "url(/img/organic-grunge-bold-shapes.svg)"
                }}
              />
              
              {/* Text with gradient */}
              <h1 className="relative px-6 py-3 md:py-4 text-lg md:text-xl lg:text-2xl font-bangers font-normal tracking-wide">
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                  Respect has a price...
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Play Button - Bottom */}
        <div className="flex justify-center pb-8 md:pb-12">
          <Link 
            to="/player/inventory" 
            className="group relative inline-flex items-center justify-center"
          >
            {/* Button gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
            
            {/* Main button */}
            <div className="relative bg-gradient-to-r from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-full transition-all duration-300 transform group-hover:scale-105 group-active:scale-95">
              <span className="font-roboto-condensed font-semibold text-sm md:text-base lg:text-lg tracking-tight drop-shadow-lg">
                PLAY GAME
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};