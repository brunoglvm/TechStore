import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/styles/colors";
import { getAllProducts } from "@/services/product";
import { SearchFilter } from "@/components/search-filter";
import { ProductItem } from "@/components/product-item";

export default function Home() {
  const products = getAllProducts();

  const [search, setSearch] = useState<string>("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
