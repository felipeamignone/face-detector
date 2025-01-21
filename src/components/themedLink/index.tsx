import React from "react";
import { TouchableOpacity, StyleProp, TextStyle, Linking } from "react-native";
import ThemedText from "../themedText";

interface ThemedLinkProps {
  title: string;
  url: string;
  style?: StyleProp<TextStyle>;
}

const ThemedLink: React.FC<ThemedLinkProps> = ({
  title,
  url,
  style,
}) => {
  const handleLinkPress = () => {
    Linking.openURL(url);
  };
  
  return (
    <TouchableOpacity onPress={() => handleLinkPress()}>
      <ThemedText variant="link" style={style}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default ThemedLink;
