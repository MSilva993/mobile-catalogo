import { View, Text } from "react-native";
import styles from "./styles";

type HeaderTabsProps = {
  title: string;
};

export default function HeaderTabs({ title }: HeaderTabsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
