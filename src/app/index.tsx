import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button } from "../components/button";
import { globalStyles } from "../styles/global";

export default function Teste() {
  function handleStart() {
    router.replace("/home");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <Image
          source={require("")}
          style={styles.logo}
          resizeMode="cover"
        /> */}
        <Text style={[globalStyles.header, { marginBottom: 4 }]}>
          TechStore
        </Text>
        <Text style={[globalStyles.text, { marginBottom: 12 }]}>
          new tech arrivals—explore now!
        </Text>
        <Button title={"Explore"} onPress={handleStart} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9F0F7",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
