import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  tab: {
    flex: 1,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
