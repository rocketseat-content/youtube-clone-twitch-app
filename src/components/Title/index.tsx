import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

const Title: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Title;
