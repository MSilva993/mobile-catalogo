import { ScrollView, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

type Categoria = {
  label: string;
  value: string;
};

type Props = {
  categories: Categoria[];
  selected: string;
  onSelect: (cat: string) => void;
};

export default function CategoryTabs({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.value}
          style={[styles.tab, selected === cat.value && styles.activeTab]}
          onPress={() => onSelect(cat.value)}
        >
          <Text
            style={[
              styles.tabText,
              selected === cat.value && styles.activeTabText,
            ]}
          >
            {cat.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
