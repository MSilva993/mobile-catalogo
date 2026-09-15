import { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import api from "../../src/services/api"; // mesmo caminho usado no Feminino
import ProductCard from "../../src/components/ProductCard";
import CategoryTabs from "../../src/components/CategoryTabs";
import GenderTabs from "../../src/components/GenderTabs";
import styles from "./styles";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

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
    <LinearGradient colors={["#1E3A8A", "#3B82F6"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Botões Masculino / Feminino */}
        <GenderTabs />

        {/* Categorias */}
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
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPress={() => router.push(`/tabs/detalhes?id=${item.id}`)}
            />
          )}
        />

        {/* BOTÃO SAIR */}
        <TouchableOpacity
          style={{
            backgroundColor: "#d9534f",
            paddingVertical: 12,
            borderRadius: 8,
            marginTop: 20,
          }}
          onPress={() => router.replace("/login")}
        >
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
