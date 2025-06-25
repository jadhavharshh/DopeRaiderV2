import React from "react";
import type { JSX } from "react";

// Import all images using Vite's static imports
import { FriendsSection } from "@/mini-components/FriendsSection";

import organicGrunge31Svg from "@/static/img/organic-grunge-bold-shapes-31.svg";
import organicGrunge35Svg from "@/static/img/organic-grunge-bold-shapes-35.svg";
import telegramPeerPhoto5Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-5.png";
import telegramPeerPhoto6Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-6.png";
import telegramPeerPhoto7Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-7.png";
import telegramPeerPhoto8Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-8.png";
import telegramPeerPhoto9Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-9.png";
import telegramPeerPhoto10Png from "@/static/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-10.png";
import ellipse15Svg from "@/static/img/ellipse-15.svg";
import ellipse151Svg from "@/static/img/ellipse-15-1.svg";
import ellipse152Svg from "@/static/img/ellipse-15-2.svg";
import ellipse153Svg from "@/static/img/ellipse-15-3.svg";
import ellipse154Svg from "@/static/img/ellipse-15-4.svg";
import ellipse155Svg from "@/static/img/ellipse-15-5.svg";

export const SocialContent = (): JSX.Element => {
  return (
    <div className="w-full h-full overflow-y-auto scrollbar-hide p-4">
      <div className="flex flex-col items-start gap-1 w-full max-w-[361px] mx-auto">

        <FriendsSection />

        {/* TONY MONTANA */}
        <div className="flex-none h-[52px] relative w-full">
          <div
            className="bg-cover bg-center bg-no-repeat h-12 relative top-0.5 w-full"
            style={{ 
              backgroundImage: `url(${organicGrunge31Svg})`,
              backgroundSize: 'cover',
              minHeight: '48px'
            }}
          >
            <div className="flex items-center justify-between px-[9px] py-2 h-full">
              <div className="flex items-center flex-none gap-4 relative">
                <div
                  className="bg-cover bg-center rounded-[40px] flex-none h-8 relative w-8"
                  style={{
                    backgroundImage: `url(${telegramPeerPhoto5Png})`,
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.1), 0px 3.5px 3.5px rgba(0,0,0,0.09), 0px 8px 4.75px rgba(0,0,0,0.05), 0px 14px 5.75px rgba(0,0,0,0.01), 0px 22px 6.25px transparent"
                  }}
                />

                <div className="flex items-center flex-none gap-2 relative">
                  <img className="h-3 relative w-3" alt="Ellipse" src={ellipse15Svg} />
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative whitespace-nowrap w-fit">
                    TONY MONTANA
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-none gap-1 relative">
                {/* Blue score container */}
                <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    94
                  </div>
                </div>

                {/* Gray score container */}
                <div className="flex items-center bg-gradient-to-b from-[#2a2a2a] to-[#8992a5] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    0
                  </div>
                </div>

                {/* Green score container */}
                <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    49
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SONNY BLACK */}
        <div className="flex-none h-[52px] relative w-full">
          <div
            className="bg-cover bg-center bg-no-repeat h-12 relative top-0.5 w-full"
            style={{ 
              backgroundImage: `url(${organicGrunge31Svg})`,
              backgroundSize: 'cover',
              minHeight: '48px'
            }}
          >
            <div className="flex items-center justify-between px-[9px] py-2 h-full">
              <div className="flex items-center flex-none gap-4 relative">
                <div
                  className="bg-cover bg-center rounded-[40px] flex-none h-8 relative w-8"
                  style={{
                    backgroundImage: `url(${telegramPeerPhoto6Png})`,
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.1), 0px 3.5px 3.5px rgba(0,0,0,0.09), 0px 8px 4.75px rgba(0,0,0,0.05), 0px 14px 5.75px rgba(0,0,0,0.01), 0px 22px 6.25px transparent"
                  }}
                />

                <div className="flex items-center flex-none gap-2 relative">
                  <img className="h-3 relative w-3" alt="Ellipse" src={ellipse151Svg} />
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative whitespace-nowrap w-fit">
                    SONNY BLACK
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-none gap-1 relative">
                {/* Blue score container */}
                <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    60
                  </div>
                </div>

                {/* Gray score container */}
                <div className="flex items-center bg-gradient-to-b from-[#2a2a2a] to-[#8992a5] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    12
                  </div>
                </div>

                {/* Green score container */}
                <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    48
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DR GONZO */}
        <div className="flex-none h-[52px] relative w-full">
          <div
            className="bg-cover bg-center bg-no-repeat h-12 relative top-0.5 w-full"
            style={{ 
              backgroundImage: `url(${organicGrunge35Svg})`,
              backgroundSize: 'cover',
              minHeight: '48px'
            }}
          >
            <div className="flex items-center justify-between px-[9px] py-2 h-full">
              <div className="flex items-center flex-none gap-4 relative">
                <div
                  className="bg-cover bg-center rounded-[40px] flex-none h-8 relative w-8"
                  style={{
                    backgroundImage: `url(${telegramPeerPhoto7Png})`,
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.1), 0px 3.5px 3.5px rgba(0,0,0,0.09), 0px 8px 4.75px rgba(0,0,0,0.05), 0px 14px 5.75px rgba(0,0,0,0.01), 0px 22px 6.25px transparent"
                  }}
                />

                <div className="flex items-center flex-none gap-2 relative">
                  <img className="h-3 relative w-3" alt="Ellipse" src={ellipse152Svg} />
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative whitespace-nowrap w-fit">
                    DR GONZO
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-none gap-1 relative">
                {/* Blue score container */}
                <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    87
                  </div>
                </div>

                {/* Gray score container */}
                <div className="flex items-center bg-gradient-to-b from-[#2a2a2a] to-[#8992a5] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    17
                  </div>
                </div>

                {/* Green score container */}
                <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    43
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VITO CORLEONE */}
        <div className="flex-none h-[52px] relative w-full">
          <div
            className="bg-cover bg-center bg-no-repeat h-12 relative top-0.5 w-full"
            style={{ 
              backgroundImage: `url(${organicGrunge35Svg})`,
              backgroundSize: 'cover',
              minHeight: '48px'
            }}
          >
            <div className="flex items-center justify-between px-[9px] py-2 h-full">
              <div className="flex items-center flex-none gap-4 relative">
                <div
                  className="bg-cover bg-center rounded-[40px] flex-none h-8 relative w-8"
                  style={{
                    backgroundImage: `url(${telegramPeerPhoto8Png})`,
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.1), 0px 3.5px 3.5px rgba(0,0,0,0.09), 0px 8px 4.75px rgba(0,0,0,0.05), 0px 14px 5.75px rgba(0,0,0,0.01), 0px 22px 6.25px transparent"
                  }}
                />

                <div className="flex items-center flex-none gap-2 relative">
                  <img className="h-3 relative w-3" alt="Ellipse" src={ellipse153Svg} />
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative whitespace-nowrap w-fit">
                    VITO CORLEONE
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-none gap-1 relative">
                {/* Blue score container */}
                <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    71
                  </div>
                </div>

                {/* Gray score container */}
                <div className="flex items-center bg-gradient-to-b from-[#2a2a2a] to-[#8992a5] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    4
                  </div>
                </div>

                {/* Green score container */}
                <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EL CHAPO */}
        <div className="flex-none h-[52px] relative w-full">
          <div
            className="bg-cover bg-center bg-no-repeat h-12 relative top-0.5 w-full"
            style={{ 
              backgroundImage: `url(${organicGrunge35Svg})`,
              backgroundSize: 'cover',
              minHeight: '48px'
            }}
          >
            <div className="flex items-center justify-between px-[9px] py-2 h-full">
              <div className="flex items-center flex-none gap-4 relative">
                <div
                  className="bg-cover bg-center rounded-[40px] flex-none h-8 relative w-8"
                  style={{
                    backgroundImage: `url(${telegramPeerPhoto9Png})`,
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.1), 0px 3.5px 3.5px rgba(0,0,0,0.09), 0px 8px 4.75px rgba(0,0,0,0.05), 0px 14px 5.75px rgba(0,0,0,0.01), 0px 22px 6.25px transparent"
                  }}
                />

                <div className="flex items-center flex-none gap-2 relative">
                  <img className="h-3 relative w-3" alt="Ellipse" src={ellipse154Svg} />
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative whitespace-nowrap w-fit">
                    EL CHAPO
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-none gap-1 relative">
                {/* Blue score container */}
                <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    67
                  </div>
                </div>

                {/* Gray score container */}
                <div className="flex items-center bg-gradient-to-b from-[#2a2a2a] to-[#8992a5] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    9
                  </div>
                </div>

                {/* Green score container */}
                <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LUCKY MARY */}
        <div className="flex-none h-[52px] relative w-full">
          <div
            className="bg-cover bg-center bg-no-repeat h-12 relative top-0.5 w-full"
            style={{ 
              backgroundImage: `url(${organicGrunge35Svg})`,
              backgroundSize: 'cover',
              minHeight: '48px'
            }}
          >
            <div className="flex items-center justify-between px-[9px] py-2 h-full">
              <div className="flex items-center flex-none gap-4 relative">
                <div
                  className="bg-cover bg-center rounded-[40px] flex-none h-8 relative w-8"
                  style={{
                    backgroundImage: `url(${telegramPeerPhoto10Png})`,
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.1), 0px 3.5px 3.5px rgba(0,0,0,0.09), 0px 8px 4.75px rgba(0,0,0,0.05), 0px 14px 5.75px rgba(0,0,0,0.01), 0px 22px 6.25px transparent"
                  }}
                />

                <div className="flex items-center flex-none gap-2 relative">
                  <img className="h-3 relative w-3" alt="Ellipse" src={ellipse155Svg} />
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative whitespace-nowrap w-fit">
                    LUCKY MARY
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-none gap-1 relative">
                {/* Blue score container */}
                <div className="flex items-center bg-gradient-to-b from-[#0a0a28] to-[#49497f] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    60
                  </div>
                </div>

                {/* Gray score container */}
                <div className="flex items-center bg-gradient-to-b from-[#2a2a2a] to-[#8992a5] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    12
                  </div>
                </div>

                {/* Green score container */}
                <div className="flex items-center bg-gradient-to-b from-[#10341d] to-[#318952] border border-white/30 rounded gap-1 justify-center overflow-hidden px-2 py-1 relative w-10">
                  <div className="text-white font-['Roboto_Condensed'] text-base font-bold tracking-[0] leading-normal -mt-px relative text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap w-fit z-10">
                    48
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};