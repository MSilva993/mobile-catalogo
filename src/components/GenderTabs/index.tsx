import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function GenderTabs() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
        onPress={() => router.replace("/tabs/masculino")}
      >
        <Ionicons
          name="man-outline"
          size={20}
          color="#000"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.text}>Produtos Masculinos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
        onPress={() => router.replace("/tabs/feminino")}
      >
        <Ionicons
          name="woman-outline"
          size={20}
          color="#000"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.text}>Produtos Femininos</Text>
      </TouchableOpacity>
    </View>
  );
}
