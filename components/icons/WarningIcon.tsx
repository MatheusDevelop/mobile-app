import React from "react";
import Svg, { Path } from "react-native-svg";
const WarningIcon: React.FC = () => {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.692 1.308S8.552 8.75 8.554 8.75H.828S4.69 1.305 4.692 1.307zm-.556-.291L.272 8.463a.626.626 0 00.553.912h7.731a.626.626 0 00.553-.912L5.246 1.02a.626.626 0 00-1.11-.002zM5 5.937V3.75c0-.417-.625-.417-.625 0v2.188c0 .416.625.416.625 0zm-.312 2.188a.625.625 0 100-1.25.625.625 0 000 1.25z"
        fill="#C8AD55"
      />
    </Svg>
  );
};
export default WarningIcon;
