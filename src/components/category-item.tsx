import { StyleSheet, Image, Pressable, View, Text } from "react-native";
import { Link } from "expo-router";

import { Category } from "@/types/category";
import { colors } from "@/styles/colors";
import { globalStyles } from "@/styles/global";

type Props = {
  data: Category;
};

export function CategoryItem({ data }: Props) {
  return (
    <Link href={`/categories/${data.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: data.cover }}
          resizeMode={"cover"}
          style={styles.img}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{data.title}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 4,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 4,
    backgroundColor: colors.gray[300],
  },
  overlay: {
    height: 150,
    marginTop: -150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlayText: {
    ...globalStyles.header,
    color: colors.offWhite,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
});
