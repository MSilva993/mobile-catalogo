import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  card: {
    width: "48%", // dois cards por linha
    minHeight: height * 0.3, // altura proporcional à tela
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  image: {
    width: "100%", // ocupa toda a largura do card
    height: height * 0.22, // imagem proporcional à tela
    borderRadius: 10,
    resizeMode: "cover",
  },

  info: {
    marginTop: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  description: {
    fontSize: 12,
    color: "#555",
    marginVertical: 4,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginTop: 4,
  },
});
