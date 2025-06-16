/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Master3 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`master-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 14 24"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9 6C9 7.10457 8.10457 8 7 8C5.89543 8 5 7.10457 5 6C5 4.89543 5.89543 4 7 4C8.10457 4 9 4.89543 9 6Z"
        fill="white"
      />

      <path
        className="path"
        d="M9 12C9 13.1046 8.10457 14 7 14C5.89543 14 5 13.1046 5 12C5 10.8954 5.89543 10 7 10C8.10457 10 9 10.8954 9 12Z"
        fill="white"
      />

      <path
        className="path"
        d="M9 18C9 19.1046 8.10457 20 7 20C5.89543 20 5 19.1046 5 18C5 16.8954 5.89543 16 7 16C8.10457 16 9 16.8954 9 18Z"
        fill="white"
      />
    </svg>
  );
};
