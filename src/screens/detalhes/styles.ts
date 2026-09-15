import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start", // mantém tudo no topo
  },
  image: {
    width: "100%",
    height: 220, // reduz um pouco a altura da imagem
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    marginBottom: 15,
    color: "#e0e0e0",
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 8,
    textAlign: "center",
  },
  discount: {
    fontSize: 15,
    color: "#00FF7F",
    textAlign: "center",
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: "#3B82F6",
  },
  cartButton: {
    backgroundColor: "#9333EA",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
