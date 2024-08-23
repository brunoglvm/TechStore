import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, { opacity: pressed ? 0.8 : 1.0 }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
});
