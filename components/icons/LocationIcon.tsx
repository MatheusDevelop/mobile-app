import React from 'react';
import Svg, { Path } from 'react-native-svg';
const LocationIcon = () => {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5.625A1.562 1.562 0 115 2.5a1.562 1.562 0 010 3.125zM5 5a.938.938 0 100-1.875A.938.938 0 005 5zM2.15 1.13A4.002 4.002 0 015.01 0a4.185 4.185 0 014.052 3.956c0 .982-.283 1.698-.91 2.558-.076.105-.159.214-.26.344l-.271.347c-.325.415-.687.833-1.165 1.355-.05.055-.984 1.061-1.23 1.336a.312.312 0 01-.464.001c-.21-.232-1.06-1.132-1.246-1.336-.461-.503-.825-.93-1.147-1.361l-.332-.44a12.919 12.919 0 01-.312-.43c-.54-.787-.788-1.46-.788-2.377A4 4 0 012.15 1.13zm6.288 2.844A3.556 3.556 0 004.993.624a3.375 3.375 0 00-3.43 3.332c0 .774.203 1.33.677 2.02.083.12.175.246.297.409l.332.44c.308.412.659.825 1.107 1.313.141.154.678.724 1.016 1.087.37-.405.966-1.047 1.003-1.087.468-.511.82-.918 1.134-1.318l.27-.345c.097-.125.176-.23.248-.329.555-.761.79-1.356.791-2.172z"
        fill="#68737D"
      />
    </Svg>
  );
};
export default LocationIcon;