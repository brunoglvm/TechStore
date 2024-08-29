import { StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack, router, useLocalSearchParams } from "expo-router";

import { getCategoryById } from "@/services/category";
import { getProductsByCategory } from "@/services/product";
import { ProductItem } from "@/components/product-item";
import { colors } from "@/styles/colors";

export default function DynamicHome() {
  const { id } = useLocalSearchParams();
  const idCategory = parseInt(id as string);

  const category = getCategoryById(idCategory);
  if (!category) {
    router.back();
    return null;
  }

  const products = getProductsByCategory(idCategory);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerTitle: category.title }} />
        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <ProductItem
              data={item}
              isLastItem={index === products.length - 1}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
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
  list: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
  },
});
