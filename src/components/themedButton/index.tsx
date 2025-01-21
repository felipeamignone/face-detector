import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonVariant, useTheme } from "../../theme";
import { styles } from "./styles";

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: keyof typeof MaterialIcons.glyphMap;
  iconSize?: number;
  iconColor?: string;
  disabled?: boolean;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
  title,
  onPress,
  variant = "contained",
  style,
  textStyle,
  icon,
  iconSize = 20,
  iconColor,
  disabled = false,
}) => {
  const theme = useTheme();
  const buttonVariant = theme.buttonVariants[variant];

  return (
    <TouchableOpacity
      style={[
        styles.baseButton,
        {
          backgroundColor: disabled
            ? theme.colors.secondary
            : buttonVariant.backgroundColor,
          borderColor: buttonVariant.borderColor,
          borderWidth: buttonVariant.borderWidth,
          borderRadius: buttonVariant.borderRadius,
        },
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.content}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={iconSize}
            color={iconColor || buttonVariant.textColor}
            style={styles.icon}
          />
        )}
        <Text
          style={[
            styles.baseText,
            {
              color: buttonVariant.textColor,
              fontSize: buttonVariant.fontSize,
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ThemedButton;
