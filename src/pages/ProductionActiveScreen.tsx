import React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";
import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";

// Import images using Vite's path configuration
import backgroundImg from "@/static/img/image-2.png";
import TelegramChairIMG from "@/static/img/telegram-chair.png";
import vectorWeed from "@/static/img/vector-18.svg";
import vectorProgress from "@/static/img/vector-19.svg";
import vectorPower from "@/static/img/vector-20.svg";
import maskGroup4 from "@/static/img/mask-group-4.png";
import maskGroup5 from "@/static/img/mask-group-5.png";
import maskGroup7 from "@/static/img/mask-group-7.png";
import maskGroup8 from "@/static/img/mask-group-8.png";
import line3 from "@/static/img/line-3.svg";
import grungeBackground from "@/static/img/organic-grunge-bold-shapes-16.svg";

export const ProductionActiveScreen = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      {/* Mobile Layout - up to 767px */}
      <div className="flex flex-col h-screen w-full min-w-[390px] md:hidden">
        <div className="bg-black h-full w-full relative flex flex-col">
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="Background"
            src={backgroundImg}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-[1]" />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Title */}
            <div className="text-center pt-8 pb-4">
              <h1 className="text-white text-4xl font-black tracking-wider italic">
                PRODUCTION
              </h1>
            </div>

            {/* Status Message */}
            <div className="flex justify-center mb-8">
              <div 
                className="relative w-[260px] h-[45px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${grungeBackground})` }}
              >
                <span className="text-yellow-400 text-lg font-bold italic tracking-wide">
                  THAT WEED IS COMING ALONG...
                </span>
              </div>
            </div>

            {/* Production Content */}
            <div className="flex-1 px-4 pb-4">
              {/* Active Grow Weed Card */}
              <div className="bg-black bg-opacity-80 border border-gray-600 rounded-lg p-4 mb-4">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img className="w-5 h-5" alt="Weed" src={vectorWeed} />
                  </div>
                  <span className="text-white text-lg font-bold">GROW WEED</span>
                </div>

                {/* Progress Section */}
                <div className="relative bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="text-center text-white font-bold mb-3">IN PROGRESS...</div>
                  
                  {/* Progress Animation Dots */}
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>

                  {/* Progress Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <img className="w-6 h-6" alt="Progress" src={vectorProgress} />
                    </div>
                  </div>

                  {/* Production Images */}
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="relative">
                      <img className="w-8 h-8 rounded" alt="Mask group" src={maskGroup4} />
                      <img className="absolute top-0 left-0 w-8 h-8 rounded opacity-75" alt="Mask group" src={maskGroup5} />
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="flex justify-center">
                    <img className="w-20 h-1" alt="Progress line" src={line3} />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                  <div>
                    <div className="text-gray-300">Max Yield:</div>
                    <div className="text-white font-bold">15oZ</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Time:</div>
                    <div className="text-white font-bold">3 Minutes</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Cost:</div>
                    <div className="text-white font-bold">$0.25</div>
                  </div>
                </div>

                {/* Grow Power Section */}
                <div className="flex items-center gap-3 mb-4 p-3 bg-green-900 bg-opacity-60 rounded">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <img className="w-4 h-4" alt="Power" src={vectorPower} />
                  </div>
                  <span className="text-white text-sm font-bold tracking-wide">
                    GROW POWER TIER 1
                  </span>
                </div>

                {/* Timer Button */}
                <Link
                  to="/production"
                  className="block w-full relative bg-gradient-to-b from-green-600 to-green-800 text-white text-center py-3 rounded font-bold"
                >
                  {/* Timer mask images */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex">
                    <div className="relative">
                      <img className="w-5 h-5 rounded" alt="Timer mask" src={maskGroup7} />
                      <img className="absolute top-0 left-0 w-5 h-5 rounded opacity-75" alt="Timer mask" src={maskGroup8} />
                    </div>
                  </div>
                  <span className="relative z-10">2min 12secs</span>
                </Link>
              </div>

              {/* Available Produce Coke Card */}
              <div className="bg-black bg-opacity-80 border border-gray-600 rounded-lg p-3">
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full" />
                  </div>
                  <span className="text-white text-sm font-bold">PRODUCE COKE</span>
                </div>

                {/* Requirements Section */}
                <div className="bg-black bg-opacity-60 rounded p-2 mb-3">
                  <div className="text-center text-gray-300 text-xs mb-2">REQUIRES</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-400 rounded" />
                    </div>
                  </div>
                  <div className="text-center text-white text-sm font-bold mt-1">20 CHEMICALS</div>
                  <div className="text-center text-green-400 text-xs">20 available</div>
                </div>

                {/* Stats */}
                <div className="space-y-1 mb-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">Max Yield:</span>
                    <span className="text-white">15oZ</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">Time:</span>
                    <span className="text-white">3 Minutes</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-300">Cost:</span>
                    <span className="text-white">$0.25</span>
                  </div>
                </div>

                {/* Produce Button */}
                <button className="w-full bg-gradient-to-b from-green-500 to-green-700 text-white py-2 rounded font-bold text-sm">
                  PRODUCE
                </button>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="relative z-10 flex-shrink-0">
              <BottomNav3 />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen relative">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Background"
          src={TelegramChairIMG}
        />

        {/* Production Content for Desktop */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/30 p-8 max-w-2xl w-full mx-4">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-white text-5xl font-black tracking-wider italic">
                PRODUCTION
              </h1>
            </div>

            {/* Status Message */}
            <div className="flex justify-center mb-8">
              <div 
                className="relative w-[320px] h-[56px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${grungeBackground})` }}
              >
                <span className="text-yellow-400 text-xl font-bold italic tracking-wide">
                  THAT WEED IS COMING ALONG...
                </span>
              </div>
            </div>

            {/* Active Production Card */}
            <div className="bg-black bg-opacity-80 border border-gray-600 rounded-lg p-6 mb-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img className="w-6 h-6" alt="Weed" src={vectorWeed} />
                </div>
                <span className="text-white text-xl font-bold">GROW WEED</span>
              </div>

              {/* Progress Section */}
              <div className="relative bg-gray-800 rounded-lg p-6 mb-6">
                <div className="text-center text-white font-bold text-lg mb-4">IN PROGRESS...</div>
                
                {/* Progress Animation Dots */}
                <div className="flex justify-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>

                {/* Progress Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <img className="w-8 h-8" alt="Progress" src={vectorProgress} />
                  </div>
                </div>

                {/* Production Images */}
                <div className="flex justify-center gap-2 mb-6">
                  <div className="relative">
                    <img className="w-12 h-12 rounded" alt="Mask group" src={maskGroup4} />
                    <img className="absolute top-0 left-0 w-12 h-12 rounded opacity-75" alt="Mask group" src={maskGroup5} />
                  </div>
                </div>

                {/* Progress Line */}
                <div className="flex justify-center">
                  <img className="w-24 h-2" alt="Progress line" src={line3} />
                </div>
              </div>

              {/* Stats and Power */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Max Yield:</span>
                    <span className="text-white">15oZ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time:</span>
                    <span className="text-white">3 Minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cost:</span>
                    <span className="text-white">$0.25</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-green-900 bg-opacity-60 rounded">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img className="w-5 h-5" alt="Power" src={vectorPower} />
                  </div>
                  <span className="text-white font-bold tracking-wide">
                    GROW POWER TIER 1
                  </span>
                </div>
              </div>

              {/* Timer Button */}
              <Link
                to="/production"
                className="block w-full relative bg-gradient-to-b from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white text-center py-4 rounded font-bold text-lg transition-all duration-200 transform hover:scale-105"
              >
                {/* Timer mask images */}
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex">
                  <div className="relative">
                    <img className="w-6 h-6 rounded" alt="Timer mask" src={maskGroup7} />
                    <img className="absolute top-0 left-0 w-6 h-6 rounded opacity-75" alt="Timer mask" src={maskGroup8} />
                  </div>
                </div>
                <span className="relative z-10">2min 12secs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
