import { View, StyleSheet, Text, Image, Pressable } from "react-native";

import { Product } from "@/types/product";
import { Link } from "expo-router";
import { colors } from "@/styles/colors";
import { globalStyles } from "@/styles/global";

type Props = {
  data: Product;
};

export function ProductItem({ data }: Props) {
  return (
    <Link href={`/product/${data.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.img} />
        <View style={styles.info}>
          <Text style={globalStyles.productTitle}>{data.title}</Text>
          <Text style={globalStyles.productDesc}>{data.description}</Text>
          <Text style={globalStyles.productPrice}>
            ${data.price.toFixed(2)}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginRight: 20,
    backgroundColor: colors.gray[300],
  },
  info: {
    flex: 1,
  },
});
