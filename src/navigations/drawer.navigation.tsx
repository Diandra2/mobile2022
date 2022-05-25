import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { ChatScreen, MapScreen, PerfilScreen } from "../screens";
import DrawerNavigation from "./drawer.navigation";
const Drawer = createDrawerNavigator();
export default function HomeRoute() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primaryLight},
        headerTintColor: colors.white,
        drawerStyle: {
          backgroundColor: colors.primaryLight,
        },
        drawerInactiveTintColor: colors.white,
        drawerActiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerLabel: "Perfil",
          drawerIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          drawerLabel: "Chat",
          drawerIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          drawerLabel: "Mapa",
          drawerIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});