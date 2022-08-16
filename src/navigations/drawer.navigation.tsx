import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { ChatScreen, MapScreen, PerfilScreen, QrCodeScreen, CameraScreen } from "../screens";

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
      <Drawer.Screen
      name="QrCode"
      component={QrCodeScreen}
      options={{
        drawerLabel: "QrCode",
        drawerIcon: () => (
          <MaterialCommunityIcons
          name="qrcode-scan"
          size={24}
          color={colors.white}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Camera"
      component={CameraScreen}
      options={{
        drawerLabel: "Câmera",
        drawerIcon: () => (
          <MaterialCommunityIcons
          name="camera"
          size={24}
          color={colors.white}
        />
      ),
    }}
    />
    </Drawer.Navigator>
  );
}

