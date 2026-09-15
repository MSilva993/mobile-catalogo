import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

type ProductCardProps = {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  };
  onPress: () => void;
};

export default function ProductCard({ item, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <Text style={styles.price}>
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
