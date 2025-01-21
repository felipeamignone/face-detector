import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { Theme } from "./types";

const theme: Theme = {
  colors: {
    primary: "#6200ea",
    secondary: "#03dac6",
    background: "#ffffff",
    text: "#000000",
    link: "#1e90ff",
  },
  textVariants: {
    title: {
      fontSize: responsiveFontSize(3),
      fontWeight: "bold",
      color: "#000",
    },
    subtitle: {
      fontSize: responsiveFontSize(2.5), // Slightly smaller than title
      fontWeight: "bold",
      color: "#333",
    },
    description: {
      fontSize: responsiveFontSize(1.5),
      color: "#666",
    },
    link: {
      fontSize: responsiveFontSize(1.5),
      color: "#1e90ff",
      textDecorationLine: "underline",
    },
  },
  buttonVariants: {
    contained: {
      backgroundColor: "#6200ea",
      borderRadius: 8,
      textColor: "#ffffff",
      fontSize: responsiveFontSize(1.5),
    },
    outlined: {
      backgroundColor: "transparent",
      borderColor: "#6200ea",
      borderWidth: 2,
      borderRadius: 5,
      textColor: "#6200ea",
      fontSize: responsiveFontSize(1.5),
    },
    text: {
      backgroundColor: "transparent",
      textColor: "#6200ea",
      fontSize: responsiveFontSize(1.5),
    },
  },
  inputVariants: {
    text: {
      borderColor: "#6200ea",
      backgroundColor: "#ffffff",
      borderWidth: 1,
      fontSize: responsiveFontSize(1.5),
      placeholderTextColor: "#666",
    },
    number: {
      borderColor: "#03dac6",
      backgroundColor: "#ffffff",
      borderWidth: 1,
      fontSize: responsiveFontSize(1.5),
      placeholderTextColor: "#666",
    },
    password: {
      borderColor: "#6200ea",
      backgroundColor: "#ffffff",
      borderWidth: 1,
      fontSize: responsiveFontSize(1.5),
      placeholderTextColor: "#666",
    },
  },
  spacing: {
    small: responsiveHeight(1),
    medium: responsiveHeight(2),
    large: responsiveHeight(3),
  },
};

export default theme;
