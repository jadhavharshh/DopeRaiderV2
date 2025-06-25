import React from "react";
// Removed: import "./style.css";
import type { JSX } from "react";
export const Top1 = (): JSX.Element => {
  return (
    // TOP-1
    <div className="bg-gradient-to-b from-[rgba(48,48,48,1)] to-[rgba(27,27,27,1)] border-b border-black h-[144px] w-[393px] relative">
      {/* element-hga-wrapper */}
      <div
        className="bg-[url('/img/ellipse-4-18.svg')] bg-contain bg-no-repeat h-8 w-8 absolute left-[245px] top-[104px]"
      >
        {/* element-hga */}
        <img
          className="h-[19px] w-[15px] absolute left-2 top-[7px]"
          alt="Element hga"
          src="/img/9athga-15.png"
        />
      </div>

      {/* icon-44 */}
      <div
        className="bg-[url('/img/ellipse-4-19.svg')] bg-contain bg-no-repeat h-8 w-8 absolute left-[289px] top-[104px]"
      >
        {/* vector-6 */}
        <img
          className="h-[20px] w-[17px] absolute left-2 top-[7px]"
          alt="Vector"
          src="/img/vector-26.svg"
        />
      </div>

      {/* icon-45 */}
      <div
        className="bg-[url('/img/ellipse-4-20.svg')] bg-contain bg-no-repeat h-8 w-8 absolute left-[333px] top-[103px]"
      >
        {/* vector-7 */}
        <img
          className="h-[20px] w-[19px] absolute left-[7px] top-[5px]"
          alt="Vector"
          src="/img/vector-27.svg"
        />
      </div>

      {/* text-wrapper-103 */}
      <div className="text-white font-['Bangers',_Helvetica] text-2xl font-normal absolute left-6 top-[106px] whitespace-nowrap tracking-normal leading-normal">
        PLAYERS
      </div>

      {/* text-wrapper-104 */}
      <div className="text-white font-['Bangers',_Helvetica] text-3xl font-normal absolute left-[171px] top-[57px] whitespace-nowrap tracking-[0.64px] leading-normal text-center">
        RAID
      </div>
    </div>
  );
};