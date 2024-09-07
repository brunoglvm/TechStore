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
          title: "All Products",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name={"categories"}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "folder" : "folder-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name={"about"}
        options={{
          title: "About",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
