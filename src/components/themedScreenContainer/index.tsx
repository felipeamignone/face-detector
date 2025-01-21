import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../../theme";
import { styles } from "./styles";

interface ThemedScreenContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ThemedScreenContainer: React.FC<ThemedScreenContainerProps> = ({
  children,
  style,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          padding: theme.spacing.medium,
          gap: theme.spacing.medium,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ThemedScreenContainer;
