import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { fontFamily } from "@/styles/fontFamily";
import { colors } from "@/styles/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
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
        tabBarStyle: { backgroundColor: colors.white },
        tabBarInactiveTintColor: colors.gray[300],
        tabBarActiveTintColor: colors.blue[400],
      }}
    >
      <Tabs.Screen
        name={"home"}
        options={{
          title: "Products",
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name={"categories"}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "folder" : "folder-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name={"about"}
        options={{
          title: "About me",
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
