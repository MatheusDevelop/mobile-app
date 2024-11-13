import React from 'react';
import Svg, { Path } from 'react-native-svg';
const HomeIcon: React.FC<{ color: string }> = ({ color }: { color: string }) => {
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
        d="M14.006 15a1 1 0 01-1.001 1h-3.003A1 1 0 019 15v-4.002H6.999V15a1 1 0 01-1.001 1H2.995a1 1 0 01-1.001-1V8.996h-.912a.998.998 0 01-.8-1.69L7.29.295a1.001 1.001 0 011.417 0l7.02 7.023a.997.997 0 01.173 1.118c-.18.373-.572.595-.941.562h-.954V15zM2.995 7.996V15h3.003v-4.002a1 1 0 011-1h2.003a1 1 0 011 1V15h3.004V7.996h.5l1.49.002L8 1 1.005 7.998l1.99-.002z"
        fill={color || '#68737D'}

      />
    </Svg>
  );
};
export default HomeIcon;
