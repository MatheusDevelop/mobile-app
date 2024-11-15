import React from "react";
import Svg, { Path } from "react-native-svg";
const InfoIcon = () => {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 5a1 1 0 100-2 1 1 0 000 2zm0 7a.5.5 0 00.5-.5V7a.5.5 0 00-1 0v4.5a.5.5 0 00.5.5zm0 3a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-1a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        fill="#ffffff"
      />
    </Svg>
  );
};
export default InfoIcon;
