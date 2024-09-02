import { StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/styles/colors";
import { getAllProducts } from "@/services/product";
import { ProductItem } from "@/components/product-item";

export default function Home() {
  const products = getAllProducts();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
    backgroundColor: colors.offWhite,
  },
  list: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
  },
});
