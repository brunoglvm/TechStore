import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

import { Product } from "@/types/product";
import { colors } from "@/styles/colors";
import { globalStyles } from "@/styles/global";

type Props = {
  data: Product;
  isLastItem: boolean;
};

export function ProductItem({ data, isLastItem }: Props) {
  return (
    <Link
      href={`/product/${data.id}`}
      asChild
      style={[styles.container, isLastItem && { marginBottom: 20 }]}
    >
      <Pressable>
        <Image
          source={{ uri: data.image }}
          resizeMode={"cover"}
          style={styles.img}
        />
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
    marginTop: 20,
    flexDirection: "row",
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
