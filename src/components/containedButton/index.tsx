import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getStyles } from "./styles";

interface ContainedButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  width?: number;
  startIcon?: keyof typeof MaterialIcons.glyphMap;
}

const ContainedButton: React.FC<ContainedButtonProps> = ({
  startIcon,
  width,
  children,
  onPress,
}) => {
  const styles = getStyles(width);
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {startIcon && (
        <View style={styles.iconContainer}>
          <MaterialIcons name={startIcon} size={24} color="white" />
        </View>
      )}
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ContainedButton;
