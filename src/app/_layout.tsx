import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "@/components/loading";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"index"} />
        <Stack.Screen name={"(tabs)"} options={{ title: "All Products" }} />
        <Stack.Screen name={"product/[id]"} options={{ headerShown: true }} />
      </Stack>
    </>
  );
}
