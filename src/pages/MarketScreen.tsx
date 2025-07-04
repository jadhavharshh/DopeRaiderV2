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

          {/* Row #1 - COKE */}
          <div 
            className="absolute"
            style={{
              width: '329px',
              height: '38px',
              top: '52px',
              left: '16px'
            }}
          >
            {/* Icon */}
            <div 
              className="absolute"
              style={{
                width: '24px',
                height: '24px',
                top: '7px'
              }}
            >
              <div 
                className="absolute w-[24px] h-[24px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #000000 0%, #666666 100%)',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(180deg, #000000 0%, #666666 100%), linear-gradient(360deg, #000000 0%, #666666 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box'
                }}
              />
              {/* Vector Icon */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9822 4.22341C11.3865 3.96552 11.734 3.73365 12.091 3.51874C12.5014 3.2716 12.8753 3.43957 12.9833 3.90614C13.0361 4.13518 12.9636 4.30824 12.7663 4.43492C12.3659 4.69224 11.9673 4.95296 11.5321 5.23516C11.8172 5.36806 12.0657 5.48513 12.3153 5.6005C12.7179 5.78656 12.8602 6.04445 12.737 6.36737C12.6105 6.69935 12.2732 6.81981 11.8672 6.66937C11.3691 6.48501 10.8748 6.28933 10.375 6.10949C10.2884 6.07838 10.1608 6.06651 10.0883 6.10836C9.3191 6.55287 8.55725 7.0104 7.79428 7.46509C7.78022 7.47357 7.77291 7.49393 7.74817 7.52843C7.98938 7.66925 8.23114 7.80498 8.46841 7.94919C8.98062 8.25968 9.49227 8.57016 9.99942 8.88912C10.1557 8.98753 10.2901 9.00336 10.4661 8.92306C10.9502 8.70249 11.4405 8.49551 11.9364 8.30379C12.0949 8.24271 12.3142 8.17598 12.4418 8.24045C12.6105 8.32528 12.7708 8.517 12.8337 8.69854C12.9085 8.91288 12.7854 9.12495 12.5728 9.23693C12.2434 9.41055 11.9066 9.57117 11.5327 9.75723C11.9397 10.01 12.321 10.2362 12.6909 10.48C13.0547 10.7198 13.0794 11.1592 12.7578 11.4352C12.5594 11.6049 12.3418 11.5952 12.1315 11.4765C11.8548 11.3204 11.5889 11.1445 11.3173 10.9788C11.224 10.9217 11.1273 10.8702 10.9991 10.7978C10.9991 11.1886 11.003 11.5421 10.998 11.8955C10.9935 12.24 10.8327 12.4249 10.5313 12.4475C10.2333 12.4701 9.97412 12.2773 9.92914 11.9764C9.84593 11.4188 9.78296 10.8583 9.69356 10.3018C9.67332 10.1763 9.61034 10.014 9.51364 9.95234C8.74898 9.46428 7.97138 8.99601 7.19717 8.52265C7.17524 8.50908 7.146 8.50738 7.07684 8.48702C7.07684 8.65725 7.07741 8.81164 7.07684 8.9666C7.07347 9.68258 7.08134 10.3991 7.0611 11.1145C7.05435 11.3605 7.14319 11.5161 7.3248 11.6625C7.76335 12.0154 8.1946 12.3768 8.6191 12.7461C8.90191 12.9921 8.94239 13.2924 8.7501 13.5384C8.54713 13.798 8.24126 13.8212 7.93146 13.5967C7.66102 13.4004 7.39227 13.2014 7.05829 12.9565C7.05829 13.4915 7.06391 13.9558 7.0566 14.4201C7.05042 14.7809 6.85925 14.9862 6.54046 14.9992C6.16881 15.0145 5.93772 14.8013 5.93379 14.4252C5.92873 13.9637 5.93266 13.5022 5.93266 12.9622C5.61218 13.2048 5.33612 13.4146 5.05893 13.6227C4.84977 13.7805 4.63105 13.8025 4.41009 13.6515C4.19981 13.5079 4.11828 13.3026 4.197 13.0623C4.23242 12.9537 4.31563 12.849 4.40334 12.7721C4.82672 12.4017 5.26471 12.0471 5.68471 11.6727C5.78985 11.5794 5.9158 11.4358 5.91861 11.313C5.93829 10.4019 5.92929 9.49086 5.92929 8.52718C5.70045 8.66234 5.5121 8.77658 5.3215 8.8863C4.73001 9.22788 4.13177 9.55759 3.55097 9.91615C3.43009 9.9908 3.32045 10.1593 3.29402 10.3007C3.19675 10.8261 3.13996 11.3594 3.06069 11.8888C3.01964 12.1602 2.88189 12.3666 2.60301 12.4345C2.3798 12.4888 2.18639 12.4113 2.07281 12.2122C2.01659 12.1138 2.00028 11.9832 1.99691 11.8656C1.98735 11.5206 1.99354 11.175 1.99354 10.7752C1.61064 11.0218 1.2598 11.2446 0.912327 11.472C0.688552 11.6179 0.469274 11.6009 0.25843 11.4567C0.0537705 11.3164 -0.0536193 11.1083 0.0267825 10.8713C0.0762606 10.7249 0.188711 10.5716 0.315779 10.4856C0.677307 10.2402 1.06076 10.027 1.48863 9.76911C1.11305 9.5723 0.768391 9.42865 0.469274 9.2194C0.324213 9.11817 0.202767 8.90213 0.180277 8.72398C0.152164 8.49946 0.316342 8.30662 0.544053 8.24893C0.676744 8.21556 0.842046 8.23253 0.971926 8.28286C1.50269 8.48759 2.02333 8.71946 2.55297 8.92758C2.65418 8.96717 2.80767 8.98979 2.89089 8.94059C3.63306 8.50512 4.36455 8.05212 5.09885 7.60252C5.13652 7.57933 5.16688 7.5437 5.23603 7.48262C4.45788 7.02284 3.71065 6.56362 2.94205 6.14342C2.80711 6.0699 2.57097 6.12702 2.40173 6.1847C1.95193 6.33797 1.51506 6.52855 1.07032 6.69708C0.825741 6.78983 0.595218 6.76947 0.396743 6.57493C0.0953771 6.27858 0.149915 5.85726 0.524374 5.66214C0.681242 5.58014 0.847106 5.51567 1.01016 5.44554C1.16365 5.37937 1.31883 5.31603 1.51618 5.23346C1.15128 5.00894 0.818431 4.80422 0.485579 4.59949C0.0239712 4.31559 -0.0963504 4.02038 0.115618 3.6935C0.32084 3.37679 0.657066 3.36265 1.09506 3.64486C1.37056 3.82187 1.65112 3.99097 1.93056 4.16176C1.95193 4.17477 1.98173 4.17307 1.99522 4.1759C1.99522 3.83714 1.99522 3.50291 1.99522 3.16867C1.99522 2.82143 2.15153 2.61557 2.43659 2.58899C2.76045 2.55845 3.01514 2.75752 3.06406 3.09572C3.14446 3.65334 3.20912 4.21323 3.29627 4.77029C3.31482 4.88905 3.37217 5.04457 3.4627 5.10169C4.22117 5.58184 4.99146 6.04332 5.75893 6.50876C5.78873 6.52686 5.8264 6.53138 5.88768 6.55118C5.90174 6.44938 5.92535 6.35946 5.92535 6.26897C5.92929 5.47721 5.92254 4.68602 5.93323 3.89426C5.9366 3.65391 5.84551 3.49499 5.66166 3.34682C5.23097 2.99958 4.81491 2.63367 4.39772 2.27059C4.15426 2.05852 4.12784 1.72371 4.32631 1.48732C4.5068 1.27185 4.80985 1.24187 5.05668 1.41945C5.32656 1.614 5.5925 1.81307 5.93098 2.06191C5.93098 1.53143 5.92817 1.08578 5.9321 0.640138C5.93547 0.268577 6.10584 0.0423605 6.39989 0.00616588C6.78391 -0.0413396 7.05492 0.188836 7.06166 0.586977C7.06953 1.06542 7.06335 1.54387 7.06335 2.10941C7.36584 1.87471 7.61773 1.67734 7.87074 1.48223C8.15918 1.25997 8.38857 1.24244 8.6056 1.42341C8.88504 1.65642 8.90303 1.99574 8.62697 2.2525C8.17998 2.6676 7.71668 3.06461 7.26913 3.47972C7.18761 3.5555 7.10214 3.67879 7.10102 3.78115C7.09034 4.65718 7.09877 5.5332 7.10271 6.40922C7.10271 6.4358 7.1162 6.46239 7.13138 6.52177C7.27532 6.4375 7.41026 6.36002 7.54351 6.28028C8.17829 5.90137 8.81757 5.52981 9.44167 5.13449C9.55749 5.06154 9.66039 4.90206 9.68794 4.76576C9.80151 4.20474 9.87966 3.63694 9.97918 3.0731C10.0393 2.73264 10.2659 2.56637 10.5948 2.60426C10.8923 2.6382 11.0357 2.82765 11.0244 3.1862C11.0143 3.51139 10.9969 3.83714 10.98 4.22341H10.9822Z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* COKE Text */}
            <div 
              className="absolute"
              style={{
                width: '32px',
                height: '16px',
                top: '7px',
                left: '32px'
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
                COKE
              </span>
            </div>

            {/* BUY Price */}
            <div 
              className="absolute"
              style={{
                width: '33px',
                height: '16px',
                top: '7px',
                left: '125px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#5BFF8E'
                }}
              >
                $6.66
              </span>
            </div>

            {/* SELL Price */}
            <div 
              className="absolute"
              style={{
                width: '33px',
                height: '16px',
                top: '7px',
                left: '195px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                $6.33
              </span>
            </div>

            {/* TRADE Button */}
            <button 
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                minWidth: '48px',
                height: '30px',
                left: '258px',
                top: '4px',
                background: 'linear-gradient(to top, #10341D, #318952)',
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(to top, #10341D, #318952), linear-gradient(to top, #76E39D, #6BBA1C)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                borderRadius: '74px'
              }}
            >
              <span className="text-white text-[12px] font-semibold leading-[14px] tracking-[-0.03em]" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                TRADE
              </span>
            </button>
          </div>

          {/* Row #2 - WEED */}
          <div 
            className="absolute"
            style={{
              width: '329px',
              height: '38px',
              top: '90px',
              left: '16px'
            }}
          >
            {/* Icon */}
            <div 
              className="absolute"
              style={{
                width: '24px',
                height: '24px',
                top: '7px'
              }}
            >
              <div 
                className="absolute w-[24px] h-[24px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #000000 0%, #666666 100%)',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(180deg, #000000 0%, #666666 100%), linear-gradient(360deg, #000000 0%, #666666 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box'
                }}
              />
              {/* Vector Icon */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.32514 9.64753C10.0899 9.32905 10.8367 9.14122 11.6019 9.02554C12.2977 8.9204 12.9979 8.88082 13.6985 8.97187C13.8079 8.98595 13.963 9.06249 13.9935 9.14606C14.0231 9.22788 13.9478 9.38404 13.8698 9.45882C13.0136 10.2796 11.9619 10.7481 10.817 11.0213C10.3055 11.1436 9.77745 11.1977 9.27135 11.2804C9.8299 11.4563 10.3705 11.7264 10.8587 12.0884C11.0721 12.2468 11.2783 12.4192 11.4612 12.6097C11.5338 12.6853 11.5728 12.8349 11.5526 12.9365C11.5423 12.9902 11.3724 13.0465 11.2743 13.0465C9.93032 13.0491 8.72938 12.6418 7.68085 11.8122C7.6293 11.7713 7.57685 11.7312 7.49168 11.6653V14.9925L6.4714 15V11.6894C5.6775 12.3893 4.73746 12.7847 3.70642 12.9774C3.39397 13.0359 3.06897 13.0403 2.74935 13.0447C2.64759 13.046 2.47276 12.9836 2.45842 12.9215C2.43555 12.8252 2.48711 12.6629 2.56645 12.6C2.98783 12.2657 3.41549 11.9353 3.86601 11.6406C4.12018 11.4743 4.42277 11.3785 4.69712 11.2544C3.73691 11.1796 2.79418 10.9711 1.89583 10.5858C1.31844 10.3381 0.781856 10.0254 0.311613 9.60926C0.234061 9.54064 0.154715 9.47245 0.0874737 9.3946C-0.0676305 9.2138 -0.0129402 9.02378 0.225095 8.99474C0.579235 8.9512 0.939203 8.91821 1.29469 8.93184C2.29749 8.97099 3.27518 9.15838 4.22194 9.48961C4.36674 9.54019 4.50884 9.60002 4.66663 9.63609C4.39767 9.41747 4.12422 9.20413 3.86108 8.97935C2.30197 7.64564 1.23148 6.00708 0.67965 4.04742C0.657684 3.97 0.625856 3.89082 0.628097 3.81296C0.631235 3.71135 0.629891 3.56971 0.692202 3.52044C0.754961 3.47074 0.914548 3.47602 0.994789 3.52044C1.45383 3.77733 1.92093 4.02674 2.34993 4.32718C3.86556 5.38729 5.04095 6.74212 5.89671 8.3644C5.92988 8.4273 5.96709 8.488 6.02447 8.54123C5.94916 8.15589 5.86981 7.771 5.79854 7.38523C5.58919 6.25342 5.56364 5.11809 5.70171 3.9744C5.85188 2.7335 6.16657 1.53747 6.65206 0.384102C6.72064 0.221346 6.76009 -0.00563175 6.99365 8.66869e-05C7.22316 0.00536524 7.25589 0.230584 7.32537 0.395099C8.03858 2.07808 8.3972 3.83012 8.35148 5.65342C8.32727 6.62072 8.1641 7.57261 7.92875 8.5122C7.92024 8.54563 7.91531 8.58038 7.9041 8.63712C8.15424 8.21176 8.37614 7.80003 8.63031 7.4081C9.66 5.81881 11.0219 4.57263 12.702 3.66252C12.832 3.59214 12.9665 3.52616 13.1064 3.47821C13.2745 3.42015 13.3969 3.50549 13.3794 3.68144C13.3605 3.86839 13.3144 4.0549 13.2597 4.23569C12.6419 6.28905 11.4352 7.94739 9.74114 9.27759C9.61876 9.37348 9.49728 9.47069 9.37579 9.56791C9.36504 9.57671 9.36011 9.59254 9.32514 9.64753Z" fill="#5BFF8E"/>
</svg>
              </div>
            </div>

            {/* WEED Text */}
            <div 
              className="absolute"
              style={{
                width: '32px',
                height: '16px',
                top: '7px',
                left: '32px'
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
                WEED
              </span>
            </div>

            {/* BUY Price */}
            <div 
              className="absolute"
              style={{
                width: '33px',
                height: '16px',
                top: '7px',
                left: '125px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#FF5454'
                }}
              >
                $3.73
              </span>
            </div>

            {/* SELL Price */}
            <div 
              className="absolute"
              style={{
                width: '33px',
                height: '16px',
                top: '7px',
                left: '195px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                $3.54
              </span>
            </div>

            {/* TRADE Button */}
            <button 
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                minWidth: '48px',
                height: '30px',
                left: '258px',
                top: '4px',
                background: 'linear-gradient(to top, #10341D, #318952)',
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(to top, #10341D, #318952), linear-gradient(to top, #76E39D, #6BBA1C)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                borderRadius: '74px'
              }}
            >
              <span className="text-white text-[12px] font-semibold leading-[14px] tracking-[-0.03em]" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                TRADE
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Element - Container 2 with SEEDS and CHEMICALS */}
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
            border: '1px solid #FFFFFF66'
          }}
        >

          {/* Row #1 - SEEDS */}
          <div 
            className="absolute"
            style={{
              width: '329px',
              height: '38px',
              top: '8px',
              left: '16px'
            }}
          >
            {/* Icon */}
            <div 
              className="absolute"
              style={{
                width: '24px',
                height: '24px',
                top: '7px'
              }}
            >
              <div 
                className="absolute w-[24px] h-[24px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #000000 0%, #666666 100%)',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(180deg, #000000 0%, #666666 100%), linear-gradient(360deg, #000000 0%, #666666 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box'
                }}
              />
              {/* Seeds SVG Icon */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_2946_mobile)">
                    <path d="M11.07 6.78247C11.0781 8.7313 10.3875 10.3939 8.92309 11.713C8.16388 12.3969 7.3014 12.8865 6.26424 12.9796C5.10445 13.0841 4.05883 12.7727 3.15157 12.0329C2.01033 11.1024 1.32777 9.88934 1.06516 8.4515C0.560495 5.68436 1.4855 3.40918 3.51181 1.53809C4.23754 0.867968 5.07501 0.374789 6.02422 0.108359C6.37841 0.00875156 6.76527 -0.00218098 7.13681 -0.000156433C7.42081 0.0014632 7.69391 0.130224 7.88674 0.34766C8.50637 1.04694 9.1615 1.72233 9.71215 2.47424C10.6384 3.73958 11.0708 5.18996 11.07 6.78247ZM6.42803 1.32875C6.33726 1.33564 6.32193 1.3328 6.31185 1.33847C6.27675 1.35831 6.24286 1.37977 6.20979 1.40285C5.25977 2.06771 4.58648 2.96378 4.0911 3.99872C3.35004 5.54628 3.11849 7.17766 3.36578 8.87301C3.50213 9.80592 3.83413 10.6647 4.43924 11.4013C4.50701 11.4839 4.58971 11.5547 4.66555 11.6313C3.50616 7.89759 4.01284 4.47004 6.42803 1.32916V1.32875Z" fill="url(#paint0_linear_1_2946_mobile)" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_1_2946_mobile" x1="5.99989" y1="-0.000366211" x2="6" y2="13" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFE1CB" />
                      <stop offset="1" stopColor="#85622A" />
                    </linearGradient>
                    <clipPath id="clip0_1_2946_mobile">
                      <rect width="10.14" height="13" fill="white" transform="translate(0.930176)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            {/* SEEDS Text */}
            <div 
              className="absolute"
              style={{
                width: '40px',
                height: '16px',
                top: '7px',
                left: '32px'
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
                SEEDS
              </span>
            </div>

            {/* BUY Price */}
            <div 
              className="absolute"
              style={{
                width: '33px',
                height: '16px',
                top: '7px',
                left: '125px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#5BFF8E'
                }}
              >
                $0.25
              </span>
            </div>

            {/* SELL Price */}
            <div 
              className="absolute"
              style={{
                width: '33px',
                height: '16px',
                top: '7px',
                left: '195px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                $0.20
              </span>
            </div>

            {/* TRADE Button */}
            <button 
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                minWidth: '48px',
                height: '30px',
                left: '258px',
                top: '4px',
                background: 'linear-gradient(to top, #10341D, #318952)',
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(to top, #10341D, #318952), linear-gradient(to top, #76E39D, #6BBA1C)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                borderRadius: '74px'
              }}
            >
              <span className="text-white text-[12px] font-semibold leading-[14px] tracking-[-0.03em]" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                TRADE
              </span>
            </button>
          </div>

          {/* Row #2 - CHEMICALS */}
          <div 
            className="absolute"
            style={{
              width: '329px',
              height: '38px',
              top: '46px',
              left: '16px'
            }}
          >
            {/* Icon */}
            <div 
              className="absolute"
              style={{
                width: '24px',
                height: '24px',
                top: '7px'
              }}
            >
              <div 
                className="absolute w-[24px] h-[24px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #000000 0%, #666666 100%)',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(180deg, #000000 0%, #666666 100%), linear-gradient(360deg, #000000 0%, #666666 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box'
                }}
              />
              {/* Chemicals SVG Icon */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.06524 11.9986C3.9627 11.9986 2.86016 12.0025 1.75762 11.9972C1.05823 11.9939 0.516609 11.7171 0.185046 11.13C-0.0412554 10.7291 -0.0579748 10.3056 0.12382 9.88551C0.42218 9.19704 0.734904 8.5141 1.03538 7.8263C1.54874 6.65069 2.05833 5.47353 2.56557 4.29548C2.60277 4.20917 2.62632 4.11117 2.62726 4.01824C2.63503 3.22405 2.63833 2.42964 2.63621 1.63545C2.63621 1.55598 2.6096 1.46548 2.56392 1.39904C2.42168 1.19266 2.26415 0.995545 2.11273 0.7949C1.93965 0.565781 1.95001 0.322093 2.14216 0.144625C2.23871 0.0554493 2.35622 0.0115237 2.49162 0.0115237C3.5904 0.0106408 4.68894 0.0108615 5.78771 0.00909567C6.29353 0.00821275 6.79936 0.00446031 7.30518 4.56816e-05C7.52865 -0.0019409 7.7194 0.0605261 7.82796 0.254108C7.93863 0.451662 7.88871 0.638401 7.74648 0.807482C7.59553 0.986716 7.44859 1.16772 7.40031 1.39948C7.39584 1.42089 7.38901 1.44275 7.38901 1.46438C7.38595 2.31684 7.38124 3.16953 7.38383 4.02199C7.38407 4.11779 7.41162 4.21889 7.45071 4.30828C8.25089 6.14543 9.04659 7.98457 9.86066 9.8162C10.2735 10.745 9.72126 11.6842 8.8323 11.9145C8.59941 11.9747 8.34508 11.9778 8.10041 11.9794C7.08877 11.986 6.07736 11.9822 5.06571 11.9822C5.06571 11.9878 5.06571 11.9931 5.06571 11.9986H5.06524ZM3.34385 3.01502C3.34385 3.29844 3.34455 3.56287 3.34314 3.82709C3.3429 3.88779 3.37493 3.89949 3.43192 3.89861C3.60453 3.89596 3.77714 3.89441 3.94975 3.89772C4.12895 3.90103 4.24269 4.00897 4.23963 4.16525C4.23633 4.3255 4.12377 4.42704 3.94598 4.42814C3.76937 4.42902 3.59275 4.43211 3.41637 4.42682C3.33301 4.42439 3.29204 4.44977 3.26213 4.52526C3.16134 4.7791 3.05443 5.03096 2.94352 5.28105C2.22929 6.89415 1.51389 8.5066 0.79825 10.119C0.552874 10.672 0.975806 11.2887 1.61303 11.2898C3.87298 11.2933 6.13293 11.2929 8.39289 11.2898C9.01928 11.2889 9.44645 10.6817 9.21049 10.1389C9.06755 9.81002 8.91755 9.48377 8.77296 9.15555C8.12184 7.67665 7.47096 6.19774 6.82126 4.71818C6.72353 4.49546 6.61073 4.27826 6.61379 4.02619C6.62345 3.2139 6.6324 2.40138 6.62863 1.58909C6.62745 1.32201 6.655 1.07037 6.81749 0.843682C6.82008 0.84015 6.81372 0.830879 6.81349 0.830217H3.03489C3.08505 0.89158 3.1199 0.935947 3.15687 0.978548C3.3137 1.15999 3.38411 1.36328 3.37093 1.60035C3.35633 1.86081 3.36739 2.12238 3.36057 2.38328C3.35821 2.4718 3.38058 2.50711 3.48419 2.5038C3.72321 2.4963 3.9627 2.49828 4.20195 2.50137C4.34395 2.50314 4.45016 2.59563 4.46711 2.721C4.48501 2.85101 4.40023 2.97529 4.26553 3.00619C4.21702 3.01745 4.16428 3.01436 4.11341 3.01458C3.86733 3.01524 3.62101 3.0148 3.34408 3.0148L3.34385 3.01502Z" fill="url(#paint0_linear_1_2966_mobile)" />
                  <path d="M4.99125 10.829C3.9789 10.829 2.96654 10.829 1.95419 10.829C1.90333 10.829 1.85176 10.8305 1.80136 10.8246C1.40504 10.7789 1.22419 10.4833 1.37867 10.137C2.00788 8.72452 2.6371 7.31228 3.2642 5.89916C3.29246 5.83537 3.32825 5.80976 3.40172 5.80976C4.472 5.80711 5.54205 5.80358 6.61209 5.79652C6.70629 5.79585 6.74161 5.83801 6.77269 5.90887C7.22058 6.93196 7.66966 7.95461 8.11967 8.97682C8.28663 9.35603 8.46065 9.73238 8.62361 10.1129C8.79622 10.5158 8.56521 10.8272 8.09871 10.8276C7.06281 10.8285 6.02691 10.8279 4.99101 10.8279V10.8294L4.99125 10.829ZM6.84616 9.42954C6.84758 9.08806 6.57112 8.82054 6.21601 8.81965C5.85336 8.81877 5.55877 9.09292 5.55523 9.43417C5.55194 9.76483 5.83876 10.033 6.19787 10.0352C6.56146 10.0374 6.84475 9.77277 6.84616 9.42976V9.42954ZM5.41182 7.41183C5.41182 7.14408 5.18882 6.9335 4.90788 6.93659C4.61141 6.93968 4.38534 7.14408 4.38346 7.41073C4.38157 7.67428 4.60764 7.89082 4.88575 7.8917C5.18529 7.89258 5.41182 7.6862 5.41206 7.41205L5.41182 7.41183ZM3.42291 8.92362C3.41632 9.11676 3.58069 9.2748 3.79027 9.27679C3.98502 9.27878 4.15716 9.11897 4.16069 8.93267C4.16422 8.74571 4.01116 8.59605 3.80958 8.58921C3.59623 8.58193 3.42998 8.72584 3.42315 8.92362H3.42291Z" fill="url(#paint1_linear_1_2966_mobile)" />
                  <defs>
                    <linearGradient id="paint0_linear_1_2966_mobile" x1="5" y1="0" x2="5" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="#35B2FF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_2966_mobile" x1="5.00223" y1="5.79651" x2="5.00223" y2="10.8294" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A8E5FF" />
                      <stop offset="1" stopColor="#006B99" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* CHEMICALS Text */}
            <div 
              className="absolute"
              style={{
                width: '70px',
                height: '16px',
                top: '7px',
                left: '32px'
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
                CHEMICALS
              </span>
            </div>

            {/* BUY Price */}
            <div 
              className="absolute"
              style={{
                width: '33px',
                height: '16px',
                top: '7px',
                left: '125px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#FF5454'
                }}
              >
                $0.25
              </span>
            </div>

            {/* SELL Price */}
            <div 
              className="absolute"
              style={{
                width: '33px',
                height: '16px',
                top: '7px',
                left: '195px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Roboto Condensed',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                $0.20
              </span>
            </div>

            {/* TRADE Button */}
            <button 
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                minWidth: '48px',
                height: '30px',
                left: '258px',
                top: '4px',
                background: 'linear-gradient(to top, #10341D, #318952)',
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(to top, #10341D, #318952), linear-gradient(to top, #76E39D, #6BBA1C)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                borderRadius: '74px'
              }}
            >
              <span className="text-white text-[12px] font-semibold leading-[14px] tracking-[-0.03em]" style={{ fontFamily: 'Roboto Condensed', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                TRADE
              </span>
            </button>
          </div>
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
