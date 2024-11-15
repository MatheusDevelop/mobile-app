import React from "react";
import { Text } from "react-native";

// import { Container } from './styles';

const Typography: React.FC<any> = ({ children, style }) => {
  return <Text style={[{ fontFamily: "Montserrat" }, style]}>{children}</Text>;
};

export default Typography;
