import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { colors } from "@/styles/colors";
import { globalStyles } from "@/styles/global";
import { Button } from "@/components/button";

export default function Screen() {
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
    backgroundColor: colors.offWhite,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
