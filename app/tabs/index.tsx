import { useEffect } from "react";
import { router } from "expo-router";

export default function TabsIndex() {
  useEffect(() => {
    router.replace("/tabs/masculino");
  }, []);

  return null;
}
