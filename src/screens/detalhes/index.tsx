import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import api from "../../services/api";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

type Produto = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
};

export default function DetalhesScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => setProduto(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!produto) return <Text style={{ color: "#fff" }}>Carregando...</Text>;

  return (
    <LinearGradient
      colors={["#1E3A8A", "#9333EA"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={localStyles.container}>
        {/* Botão Voltar */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={localStyles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
          <Text style={localStyles.backText}>Voltar</Text>
        </TouchableOpacity>

        {/* Bloco de detalhes */}
        <View style={localStyles.detailsBlock}>
          <Image
            source={{ uri: produto.thumbnail }}
            style={localStyles.image}
          />
          <Text style={localStyles.title}>{produto.title}</Text>
          <Text style={localStyles.description}>{produto.description}</Text>

          <Text style={localStyles.price}>
            {produto.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>

          <Text style={localStyles.discount}>
            Desconto: {produto.discountPercentage}%
          </Text>
        </View>

        {/* Botões de ação */}
        <View style={localStyles.buttons}>
          <TouchableOpacity
            style={localStyles.buyButton}
            onPress={() => console.log("Comprar Agora")}
          >
            <Ionicons
              name="cash-outline"
              size={20}
              color="#fff"
              style={{ marginRight: 8 }}
            />
            <Text style={localStyles.buttonText}>Comprar Agora</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={localStyles.cartButton}
            onPress={() => console.log("Adicionar ao Carrinho")}
          >
            <Ionicons
              name="cart"
              size={20}
              color="#fff"
              style={{ marginRight: 8 }}
            />
            <Text style={localStyles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#fff",
  },
  detailsBlock: {
    flexShrink: 1,
    marginBottom: 20,
  },
  image: {
    width: width * 0.9,
    height: height * 0.35,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 16,
    resizeMode: "contain", // ← mostra a imagem inteira sem cortes
    backgroundColor: "#fff", // fundo branco para preencher áreas vazias
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: "#eee",
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00ffcc",
    marginBottom: 6,
  },
  discount: {
    fontSize: 15,
    color: "#ffd700",
  },
  buttons: {
    marginTop: 10,
  },
  buyButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  cartButton: {
    backgroundColor: "#9333EA",
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
