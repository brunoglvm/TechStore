import { ActivityIndicator, View } from "react-native";
import { colors } from "@/styles/colors";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.offWhite,
      }}
    >
      <ActivityIndicator size="large" color={colors.blue[400]} />
    </View>
  );
}
