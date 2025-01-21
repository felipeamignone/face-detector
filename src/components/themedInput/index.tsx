import React from "react";
import { View, TextInput, StyleProp, ViewStyle, TextStyle } from "react-native";
import { InputVariant, useTheme } from "../../theme";
import { styles } from "./styles";

interface ThemedInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  variant?: InputVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
}

const ThemedInput: React.FC<ThemedInputProps> = ({
  value,
  onChangeText,
  placeholder,
  variant = "text",
  style,
  textStyle,
  keyboardType = "default",
}) => {
  const theme = useTheme();
  const inputVariant = theme.inputVariants[variant];
  const isPassword = variant === "password";

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[
          styles.input,
          {
            borderColor: inputVariant.borderColor,
            backgroundColor: inputVariant.backgroundColor,
            borderWidth: inputVariant.borderWidth,
            fontSize: inputVariant.fontSize,
          },
          textStyle,
        ]}
        secureTextEntry={isPassword}
        keyboardType={keyboardType}
        placeholderTextColor={inputVariant.placeholderTextColor}
      />
    </View>
  );
};

export default ThemedInput;
