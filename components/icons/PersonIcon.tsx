import React from 'react';
import Svg, { Path } from 'react-native-svg';
const PersonIcon: React.FC<{ color: string }> = ({ color }: { color: string }) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.997 14.553a.5.5 0 01-.994-.106C.334 11.353 2.883 9 6 9s5.666 2.353 5.997 5.447a.5.5 0 01-.994.106C10.725 11.962 8.6 10 6 10S1.275 11.962.997 14.553zM6 8a4 4 0 110-8 4 4 0 010 8zm0-1a3 3 0 100-6 3 3 0 000 6z"
        fill={color || '#68737D'}
      />
    </Svg>
  );
};
export default PersonIcon;
