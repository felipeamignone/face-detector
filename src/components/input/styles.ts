import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    textAlign: "center",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    padding: 12,
    width: "100%",
    marginVertical: width * 0.02,
    fontSize: width * 0.04,
  },
});
