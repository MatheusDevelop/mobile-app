import React from 'react';
import Svg, { Path } from 'react-native-svg';
const ThrashIcon: React.FC = () => {
  return (
    <Svg width={10} height={10} viewBox="0 0 13 13" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.875 1.625V.812c0-.468.344-.812.813-.812h1.625c.468 0 .812.344.812.813v.812h2.438a.406.406 0 110 .813H2.438a.406.406 0 110-.813h2.437zm2.438 0V.812H5.688v.813h1.625zm-2.032 9.75a.406.406 0 00.407-.406v-6.5a.406.406 0 10-.813 0v6.5c0 .224.182.406.406.406zm2.438 0a.406.406 0 00.406-.406v-6.5a.406.406 0 10-.813 0v6.5c0 .224.182.406.407.406zM2.844 3.25a.406.406 0 00-.406.406v8.531c0 .469.344.813.812.813h6.5a.789.789 0 00.813-.813v-8.53a.406.406 0 00-.813 0v8.53h-6.5v-8.53a.406.406 0 00-.406-.407z"
        fill="#FFF"
      />
    </Svg>
  );
};
export default ThrashIcon;
