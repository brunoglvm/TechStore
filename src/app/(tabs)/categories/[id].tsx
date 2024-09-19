import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack, router, useLocalSearchParams } from "expo-router";

import { colors } from "@/styles/colors";
import { getCategoryById } from "@/services/category";
import { getProductsByCategory } from "@/services/product";
import { SearchFilter } from "@/components/search-filter";
import { ProductItem } from "@/components/product-item";

export default function DynamicHome() {
  const { id } = useLocalSearchParams();
  const idCategory = parseInt(id as string);

  const category = getCategoryById(idCategory);
  if (!category) {
    router.back();
    return null;
  }

  const products = getProductsByCategory(idCategory);

  const [search, setSearch] = useState<string>("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerTitle: category.title }} />
        <SearchFilter search={search} setSearch={setSearch} />
        <FlatList
          data={filteredProducts}
          renderItem={({ item, index }) => (
            <ProductItem
              data={item}
              isLastItem={index === filteredProducts.length - 1}
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
    paddingHorizontal: 24,
    backgroundColor: colors.offWhite,
  },
  list: {
    flex: 1,
    width: "100%",
  },
});
