import React from 'react';
import Svg, { Path } from 'react-native-svg';
const HomeIcon: React.FC<{ color: string }> = ({ color }: { color: string }) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6a6 6 0 009.874 4.582l4.772 4.772a.5.5 0 00.708-.708l-4.772-4.772A6 6 0 100 6zm6 5A5 5 0 106 1a5 5 0 000 10z"
        fill={color || '#68737D'}
      />
    </Svg>
  );
};
export default HomeIcon;
