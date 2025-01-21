import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import { useTheme, TextVariant } from "../../theme";

interface ThemedTextProps {
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const ThemedText: React.FC<ThemedTextProps> = ({
  variant = "description",
  style,
  children,
}) => {
  const theme = useTheme();
  const textStyle = theme.textVariants[variant];

  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default ThemedText;
