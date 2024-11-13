import React from 'react';
import Svg, { Path } from 'react-native-svg';
const HistoryIcon: React.FC<{ color: string }> = ({ color }: { color: string }) => {
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
        d="M16 8a8 8 0 00-8-8C5.53 0 3.482 1.117 2 3.115V1.5l-.008-.09A.5.5 0 001 1.5v3l.008.09A.5.5 0 001.5 5h3l.09-.008A.5.5 0 005 4.5l-.008-.09A.5.5 0 004.5 4H2.598C3.916 2.062 5.749 1 8 1a7 7 0 11-7 7 .5.5 0 00-1 0 8 8 0 1016 0zM7.5 4.5a.5.5 0 01.492.41L8 5v3.359l2.812 2.25a.5.5 0 01.128.628l-.05.075a.5.5 0 01-.627.128l-.075-.05-3-2.4a.5.5 0 01-.18-.3L7 8.6V5a.5.5 0 01.5-.5z"
        fill={color || '#68737D'}
      />
    </Svg>
  );
};
export default HistoryIcon;
