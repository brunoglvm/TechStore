import { StyleSheet, ScrollView, View, Image, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack, router, useLocalSearchParams } from "expo-router";

import { getProductById } from "@/services/product";
import { globalStyles } from "@/styles/global";
import { Button } from "@/components/button";

export default function DynamicProduct() {
  const { id } = useLocalSearchParams();
  const idProduct = parseInt(id as string);

  const product = getProductById(idProduct);
  if (!product) {
    router.back();
    return null;
  }

  function handleBuyBtn() {
    alert(`Test ${product?.title}`);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ title: "" }}></Stack.Screen>
        <ScrollView style={styles.area}>
          <Image
            source={{ uri: product.image }}
            resizeMode={"cover"}
            style={styles.img}
          />
          <Text style={globalStyles.productTitle}>{product.title}</Text>
          <Text style={globalStyles.productDesc}>{product.description}</Text>
        </ScrollView>

        <View style={styles.btnArea}>
          <Button title={"Buy Now"} onPress={handleBuyBtn}></Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: 250,
    marginBottom: 20,
    borderRadius: 8,
  },
  area: {
    flex: 1,
    padding: 12,
  },
  btnArea: {
    padding: 12,
  },
});
