import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});
