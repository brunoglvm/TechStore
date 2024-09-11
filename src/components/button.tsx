import { Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

import { globalStyles } from "@/styles/global";

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export function Button({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[globalStyles.btn, style]}
      onPress={onPress}
    >
      <Text style={globalStyles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}
