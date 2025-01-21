import React from "react";
import { View } from "react-native";
import { AlignOptions, JustifyOptions, getStyles } from "./styles";

interface ScreenContainerProps {
  children: React.ReactNode;
  justifyContent?: JustifyOptions;
  alignItems?: AlignOptions;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  justifyContent,
  alignItems,
}) => {
  const styles = getStyles(justifyContent, alignItems);

  return <View style={styles.container}>{children}</View>;
};

export default ScreenContainer;
