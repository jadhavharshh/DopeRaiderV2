import { BottomNav3 } from "./InventoryScreenSections/BottomNav3";
import { Scroll } from "./InventoryScreenSections/Scroll";
import { TopWrapper } from "./InventoryScreenSections/TopWrapper";
import { YourStatsWrapper } from "./InventoryScreenSections/YourStatsWrapper";
import type { JSX } from "react";
import TelegramIMG from "@/static/img/telegram-cloud-photo-size-4-5809685116522448568-y-1.png"
import Logo from "@/static/img/logo-1.svg";
export const InventoryScreen = (): JSX.Element => {
  return (
    <div className="bg-black h-[852px] w-[393px]" data-model-id="412:1574">
      <div className="h-[852px] relative">
        <img
          className="h-[729px] left-0 object-cover absolute top-[123px] w-[393px]"
          alt="Telegram cloud photo"
          src= {TelegramIMG}
        />

        <TopWrapper />
        <Scroll />
        <BottomNav3 />
        <YourStatsWrapper />
        <img className="h-7 left-[118px] absolute top-[60px] w-[157px]" alt="Logo" src={Logo} />
      </div>
    </div>
  );
};