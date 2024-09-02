import { StyleSheet, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/styles/colors";
import { getAllCategories } from "@/services/category";
import { CategoryItem } from "@/components/category-item";

export default function List() {
  const categories = getAllCategories();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryItem data={item} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
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
