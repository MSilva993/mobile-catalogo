import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleLogin() {
    if (!username || !senha) {
      setErro("Campo obrigatório");
      return;
    }

    if (username !== "admin" || senha !== "123") {
      setErro("Username ou senha inválidos");
      return;
    }

    setErro("");
    router.replace("/tabs");
  }

  return (
    <LinearGradient
      colors={["#1E3A8A", "#9333EA"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>
          Insira seus dados para entrar na sua conta.
        </Text>

        {erro ? <Text style={styles.error}>{erro}</Text> : null}

        {/* Campo Username */}
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor="#666"
        />

        {/* Campo Senha com ícone de olho */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
            style={styles.passwordInput}
            placeholderTextColor="#666"
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Ionicons
              name={mostrarSenha ? "eye-off" : "eye"}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* Botão de login com ícone */}
        <TouchableOpacity style={styles.buttonWithIcon} onPress={handleLogin}>
          <Ionicons
            name="log-in-outline"
            size={20}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
