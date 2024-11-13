import React from 'react';
import Svg, { Path } from 'react-native-svg';
const CameraIcon: React.FC<{ color: string }> = ({ color }: { color: string }) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.571c0 .632.512 1.143 1.143 1.143h13.714c.631 0 1.143-.511 1.143-1.143v-8.98c0-.63-.512-1.142-1.143-1.142h-2.286v-.163A2.286 2.286 0 0010.286 0H5.714A2.286 2.286 0 003.43 2.286v.163H1.143C.512 2.449 0 2.961 0 3.592v8.98zm4.571-8.98H1.143v8.98h13.714v-8.98H11.43V2.287c0-.631-.512-1.143-1.143-1.143H5.714c-.63 0-1.143.512-1.143 1.143v1.306zM8 11.43A3.429 3.429 0 108 4.57a3.429 3.429 0 000 6.858zM10.286 8a2.286 2.286 0 11-4.572 0 2.286 2.286 0 014.572 0z"
        fill={color || '#68737D'}
      />
    </Svg>
  );
};
export default CameraIcon;
