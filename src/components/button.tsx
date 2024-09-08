import { Text, Pressable, StyleProp, ViewStyle } from "react-native";

import { globalStyles } from "@/styles/global";

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export function Button({ title, onPress, style }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.btn,
        { opacity: pressed ? 0.8 : 1.0 },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={globalStyles.btnText}>{title}</Text>
    </Pressable>
  );
}
