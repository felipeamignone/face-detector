import { StyleSheet } from "react-native";

export type JustifyOptions =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type AlignOptions =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline";

export const getStyles = (
  justifyContent?: JustifyOptions,
  alignItems?: AlignOptions
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: justifyContent ?? "center",
      alignItems: alignItems ?? "center",
      padding: 16,
      backgroundColor: "#fff",
    },
  });
