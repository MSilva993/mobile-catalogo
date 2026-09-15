import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20, // espaço lateral maior
    backgroundColor: "#ddd",
    borderRadius: 8,
    marginHorizontal: 6,
    minWidth: 100, // largura mínima para caber nomes longos
    alignItems: "center",
    justifyContent: "center",
  },

  activeTab: {
    backgroundColor: "#007bff",
  },

  tabText: {
    color: "#333",
    fontWeight: "600",
    textAlign: "center",
  },

  activeTabText: {
    color: "#fff",
    fontWeight: "700",
  },
});
