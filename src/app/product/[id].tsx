import { StyleSheet, ScrollView, View, Image, Text, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack, router, useLocalSearchParams } from "expo-router";

import { getProductById } from "@/services/product";
import { colors } from "@/styles/colors";
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
    Alert.alert(`${product?.title}`, `You have selected ${product?.title}.`);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            title: "",
            headerStyle: {
              backgroundColor: colors.offWhite,
            },
            headerShadowVisible: false,
          }}
        ></Stack.Screen>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={{ uri: product.image }}
            resizeMode={"cover"}
            style={styles.img}
          />

          <Text
            style={[globalStyles.productTitle, { fontSize: 28, marginTop: 12 }]}
          >
            {product.title}
          </Text>
          <Text style={[globalStyles.productDesc, { fontSize: 14 }]}>
            {product.description}
          </Text>
          <Text style={[globalStyles.productPrice, { fontSize: 28 }]}>
            ${product.price.toFixed(2)}
          </Text>

          <View style={styles.btnArea}>
            <Button title={"Buy Now"} onPress={handleBuyBtn}></Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 12,
  },
  btnArea: {
    marginTop: 24,
  },
});
