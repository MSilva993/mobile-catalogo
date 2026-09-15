import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#1E3A8A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  button: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  buttonText: {
    color: "#1E3A8A",
    fontSize: 14,
    fontWeight: "bold",
  },
});
