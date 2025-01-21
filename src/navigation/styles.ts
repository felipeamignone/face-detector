import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const tabStyles = StyleSheet.create({
  tabBar: {
    height: responsiveHeight(8),
  },
  tabLabel: {
    fontSize: responsiveFontSize(1.5),
  },
  tabIcon: {
    fontSize: responsiveFontSize(2),
  },
});
