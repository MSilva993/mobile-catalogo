import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="masculino" />
      <Stack.Screen name="feminino" />
      <Stack.Screen name="detalhes" />
    </Stack>
  );
}
