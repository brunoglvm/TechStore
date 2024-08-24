import { Text, Pressable } from "react-native";
import { globalStyles } from "../styles/global";

type Props = {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.btn,
        { opacity: pressed ? 0.8 : 1.0 },
      ]}
      onPress={onPress}
    >
      <Text style={globalStyles.btnText}>{title}</Text>
    </Pressable>
  );
}
