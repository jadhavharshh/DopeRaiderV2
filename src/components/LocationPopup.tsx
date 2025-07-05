import React from 'react';

// Import images
import maskGroupPng from '@/static/img/mask-group.png';
import weedIcon from '@/static/img/weed-icon.svg';
import cokeIcon from '@/static/img/coke-icon.svg';

// Popup data for each location
const popupData: Record<string, any> = {
  'Chinatown': {
    population: '12k',
    image: maskGroupPng,
    items: [
      { name: 'COKE', icon: cokeIcon, buy: '$6.66', sell: '$6.33', buyColor: 'text-green-400' },
      { name: 'WEED', icon: weedIcon, buy: '$3.73', sell: '$3.54', buyColor: 'text-green-400' },
    ],
    description: `Tucked behind neon-lit noodle shops and incense-filled herbal markets, Chinatown is the beating heart of the underground narcotics trade. Beneath its vibrant facade lies a dense web of hidden backrooms, coded phrases, and cash-only transactions.`
  },
  'Jamaica Village': {
    population: '8k',
    image: maskGroupPng,
    items: [
      { name: 'COKE', icon: cokeIcon, buy: '$5.00', sell: '$4.80', buyColor: 'text-green-400' },
      { name: 'WEED', icon: weedIcon, buy: '$2.50', sell: '$2.30', buyColor: 'text-green-400' },
    ],
    description: 'A laid-back coastal hub known for reggae, rum, and a thriving herbal scene.'
  },
  'Novo Moskovo': {
    population: '10k',
    image: maskGroupPng,
    items: [
      { name: 'COKE', icon: cokeIcon, buy: '$7.10', sell: '$6.90', buyColor: 'text-green-400' },
      { name: 'WEED', icon: weedIcon, buy: '$4.00', sell: '$3.80', buyColor: 'text-green-400' },
    ],
    description: 'A cold, industrial city with a taste for luxury and a hidden underworld.'
  },
  'Little Italy': {
    population: '6k',
    image: maskGroupPng,
    items: [
      { name: 'COKE', icon: cokeIcon, buy: '$6.00', sell: '$5.80', buyColor: 'text-green-400' },
      { name: 'WEED', icon: weedIcon, buy: '$3.20', sell: '$3.00', buyColor: 'text-green-400' },
    ],
    description: 'Classic mobster territory, where deals are made over pasta and wine.'
  },
  'Cartagena': {
    population: '7k',
    image: maskGroupPng,
    items: [
      { name: 'COKE', icon: cokeIcon, buy: '$5.80', sell: '$5.60', buyColor: 'text-green-400' },
      { name: 'WEED', icon: weedIcon, buy: '$2.90', sell: '$2.70', buyColor: 'text-green-400' },
    ],
    description: 'A sun-soaked port city with a reputation for fast boats and faster deals.'
  },
  'Baltimore': {
    population: '9k',
    image: maskGroupPng,
    items: [
      { name: 'COKE', icon: cokeIcon, buy: '$6.20', sell: '$6.00', buyColor: 'text-green-400' },
      { name: 'WEED', icon: weedIcon, buy: '$3.50', sell: '$3.30', buyColor: 'text-green-400' },
    ],
    description: 'A gritty city where the docks never sleep and neither do the hustlers.'
  },
  'Vice Island': {
    population: '5k',
    image: maskGroupPng,
    items: [
      { name: 'COKE', icon: cokeIcon, buy: '$7.50', sell: '$7.20', buyColor: 'text-green-400' },
      { name: 'WEED', icon: weedIcon, buy: '$4.50', sell: '$4.20', buyColor: 'text-green-400' },
    ],
    description: 'A tropical paradise with a dark side, where anything goes for the right price.'
  },
};

interface LocationPopupProps {
  openPopup: string | null;
  handleClosePopup: () => void;
}

export const LocationPopup: React.FC<LocationPopupProps> = ({ openPopup, handleClosePopup }) => {
  if (!openPopup) return null;

  return (
    <div 
      className="absolute inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'rgba(0, 0, 0, 0.7)',
        animation: 'dissolve-in 300ms ease-out'
      }}
    >
      <style>
        {`
          @keyframes dissolve-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
      <div
        className="relative rounded-2xl shadow-2xl flex flex-col"
        style={{
          width: 340,
          background: `
            linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%),
            url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="24" height="24" fill="none"/><rect x="-6" y="0" width="12" height="24" transform="rotate(45 0 0)" fill="%23000000" fill-opacity="0.08"/></svg>') repeat
          `,
          border: '1px solid #333',
          boxShadow: '0 12px 40px rgba(0,0,0,0.8)',
          padding: '24px 16px 16px 16px',
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          marginTop: 32,
        }}
      >
        {/* City Name Badge - anchored to container */}
        <div
          className="absolute left-1/2 z-50"
          style={{
            top: -24,
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        >
          <div
            className="flex items-center px-4 py-1.5 rounded-full border-4 border-[#1a1a1a] shadow-xl"
            style={{
              minWidth: 160,
              height: 48,
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              fontFamily: 'Bangers, Roboto, Helvetica, Arial, sans-serif',
              fontSize: 22,
              letterSpacing: 1,
              color: 'white',
              pointerEvents: 'auto',
              background: 'linear-gradient(180deg, #232323 0%, #111 100%)',
              borderColor: '#232323',
            }}
          >
            <span className="uppercase tracking-wider font-bold text-white" style={{fontSize: 20}}>{openPopup}</span>
          </div>
        </div>
        {/* Close Button - anchored to container */}
        <div
          className="absolute z-50"
          style={{
            top: -24,
            right: 16,
            pointerEvents: 'auto',
          }}
        >
          <button
            onClick={handleClosePopup}
            className="w-10 h-10 rounded-full bg-[#222] border-2 border-[#d1a15a] flex items-center justify-center text-2xl text-[#fff] hover:bg-[#333] transition shadow-lg"
            style={{ boxShadow: '0 2px 8px #0008' }}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        {/* Absolutely positioned main image at the top */}
        <img
          src={popupData[openPopup]?.image}
          alt={openPopup}
          className="absolute left-0 top-0 w-full object-cover rounded-t-2xl"
          style={{height: 110, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, border: 'none', margin: 0, padding: 0, zIndex: 1}}
        />
        {/* Spacer for badge and close button overlap, and for image height */}
        <div style={{height: 110}} />

        {/* Population Row */}
        <div className="flex items-center gap-2 text-xs text-[#aaa] font-medium w-full mb-3">
          <span className="inline-flex items-center"><svg width="16" height="16" fill="currentColor" className="mr-1"><circle cx="8" cy="8" r="8" fill="#aaa" /></svg></span>
          <span>POPULATION: <span className="text-white font-bold">{popupData[openPopup]?.population}</span></span>
          <span className="ml-auto flex items-center gap-1">
            <img src={cokeIcon} alt="coke" className="w-4 h-4" />
            <img src={weedIcon} alt="weed" className="w-4 h-4" />
          </span>
        </div>

        {/* Table */}
        <div className="w-full mb-4 bg-[#222] rounded-lg border border-[#444] overflow-hidden">
          <div className="flex justify-between px-3 py-2 text-xs text-[#aaa] font-bold border-b border-[#444] bg-[#1a1a1a] tracking-wider">
            <span>ITEM</span>
            <span>BUY</span>
            <span>SELL</span>
          </div>
          {popupData[openPopup]?.items.map((item:any) => (
            <div key={item.name} className="flex justify-between items-center px-3 py-2 text-sm border-b border-[#333] last:border-b-0 bg-[#222]">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <img src={item.icon} alt={item.name} className="w-4 h-4" />
                {item.name}
              </span>
              <span className={item.buyColor + ' font-bold'}>{item.buy}</span>
              <span className="text-[#aaa] font-bold">{item.sell}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-xs text-[#aaa] text-left w-full font-normal mb-4 leading-relaxed">
          {popupData[openPopup]?.description}
        </div>

        {/* Travel Buttons */}
        <div className="flex w-full gap-3 mt-2">
          {/* Green Travel Button - Using IntroScreen style */}
          <button className="group relative flex-1">
            {/* Button Glow Effect */}
            <div 
              className="absolute inset-0 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" 
              style={{
                background: 'linear-gradient(to bottom, #103410, #318952)'
              }}
            />
            {/* Main Button */}
            <div 
              className="relative transition-all duration-200 text-white py-2.5 rounded-lg shadow-lg hover:shadow-xl transform group-hover:scale-105 group-active:scale-95"
              style={{
                background: `
                  linear-gradient(to bottom, #76E39D, #6BBA1C) padding-box,
                  linear-gradient(to bottom, #103410, #318952) border-box
                `,
                border: '2px solid transparent'
              }}
            >
              {/* Inner content */}
              <div 
                className="absolute inset-[2px] rounded-lg"
                style={{
                  background: 'linear-gradient(to bottom, #103410, #318952)'
                }}
              />
              <span className="relative text-white text-sm font-bold z-10">
                TRAVEL $0.25
              </span>
            </div>
          </button>

          {/* Gray Fast Travel Button */}
          <button className="flex-1 bg-[#444] text-[#aaa] font-bold py-2.5 rounded-lg border border-[#666] text-sm cursor-not-allowed opacity-70 hover:bg-[#555] transition">
            FAST TRAVEL $1.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup; 