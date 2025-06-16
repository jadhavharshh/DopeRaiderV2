/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Master = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`master ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 14 24"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M0.241206 8.24665C0.562814 7.91778 1.08424 7.91778 1.40585 8.24665L7 13.967L12.5941 8.24665C12.9158 7.91778 13.4372 7.91778 13.7588 8.24665C14.0804 8.57551 14.0804 9.1087 13.7588 9.43756L7.58232 15.7534C7.26072 16.0822 6.73928 16.0822 6.41768 15.7534L0.241206 9.43756C-0.0804021 9.1087 -0.0804021 8.57551 0.241206 8.24665Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};
