import React from 'react';
import type { JSX } from 'react';

import brokenPayphone from '@/static/img/brokenphone.png';
import grungeBackground from '@/static/img/RaidBG.png';
import errorDialogBg from '@/static/img/organic-grunge-bold-shapes-48.svg';

export const ErrorComp = (): JSX.Element => {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div 
      className="fixed inset-0 bg-cover bg-center flex items-center justify-center z-50"
      style={{ backgroundImage: `url(${grungeBackground})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Dialog container */}
      <div className="relative w-[450px] h-[350px]">
        {/* Grunge background image */}
        <img
          src={errorDialogBg}
          alt="Error background"
          className="absolute inset-0 w-full h-full object-contain"
        />
        
        {/* Content on top of the grunge background */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <img 
            src={brokenPayphone} 
            alt="Broken payphone" 
            className="w-40 h-auto mb-4"
          />
          <h1 className="text-3xl font-normal text-[#e0d6c7] font-['Bangers'] tracking-wider mb-6 drop-shadow-lg">
            AN ERROR HAS OCCURRED
          </h1>
          <button
            onClick={handleRestart}
            className="group relative inline-flex items-center justify-center"
          >
            <div 
              className="absolute inset-0 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" 
              style={{
                background: 'linear-gradient(to bottom, #103410, #318952)'
              }}
            />
            <div 
              className="relative transition-all duration-200 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-xl transform group-hover:scale-105 group-active:scale-95"
              style={{
                background: `
                  linear-gradient(to bottom, #76E39D, #6BBA1C) padding-box,
                  linear-gradient(to bottom, #103410, #318952) border-box
                `,
                border: '2px solid transparent'
              }}
            >
              <div 
                className="absolute inset-[2px] rounded-full"
                style={{
                  background: 'linear-gradient(to bottom, #103410, #318952)'
                }}
              />
              <span className="relative text-white text-lg font-semibold z-10 font-['Roboto_Condensed']">
                RESTART APP
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComp;