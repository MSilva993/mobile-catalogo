import { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard";
import CategoryTabs from "../../components/CategoryTabs";
import GenderTabs from "../../components/GenderTabs";
import styles from "./styles";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

type Produto = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

const categorias = [
  { label: "Camisas", value: "mens-shirts" },
  { label: "Sapatos", value: "mens-shoes" },
  { label: "Relógios", value: "mens-watches" },
];

export default function MasculinoScreen() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("mens-shirts");
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    api
      .get(`/products/category/${selectedCategory}`)
      .then((res) => setProdutos(res.data.products))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  return (
    <LinearGradient
      colors={["#1E3A8A", "#3B82F6"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        {/* Tabs de gênero */}
        <GenderTabs />

        {/* Tabs de categoria */}
        <CategoryTabs
          categories={categorias}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Lista de produtos */}
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100, paddingTop: 20 }} // espaçamento extra
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPress={() => router.push(`/tabs/detalhes?id=${item.id}`)}
            />
          )}
        />

        {/* Botão Sair da Conta com ícone */}
        <TouchableOpacity
          style={{
            backgroundColor: "#d9534f",
            paddingVertical: 12,
            borderRadius: 8,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.replace("/login")}
        >
          <Ionicons
            name="exit-outline"
            size={20}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Sair da Conta
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
