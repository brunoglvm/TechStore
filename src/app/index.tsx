import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button } from "../components/button";

export default function Teste() {
  function handleStart() {
    router.replace("/home");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <Text style={styles.h1}>Test</Text>
        <Text style={styles.h2}>...</Text>
        <Button title={"Start"} onPress={handleStart} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    marginBottom: 10,
  },
});
