import { Stack } from "expo-router";

import { fontFamily } from "@/styles/fontFamily";
import { colors } from "@/styles/colors";

export default function CategoryLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Categories",
        headerStyle: {
          backgroundColor: colors.offWhite,
        },
        headerTitleStyle: {
          color: colors.blue[700],
          fontFamily: fontFamily.interSb,
          fontSize: 18,
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name={"list"} />
      <Stack.Screen name={"[id]"} />
    </Stack>
  );
}
