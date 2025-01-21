import { Dimensions, StyleSheet } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

export const getStyles = (width?: number) =>
  StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#6200ee",
      padding: windowWidth * 0.03,
      borderRadius: 4,
      width: width ?? "100%",
    },
    iconContainer: {
      position: "absolute",
      left: windowWidth * 0.02,
    },
    textContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "white",
      marginLeft: windowWidth * 0.02,
      fontSize: windowWidth * 0.04,
    },
  });
