import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type HeaderLogoutProps = {
  title: string;
  onLogout: () => void;
};

export default function HeaderLogout({ title, onLogout }: HeaderLogoutProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.button} onPress={onLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
