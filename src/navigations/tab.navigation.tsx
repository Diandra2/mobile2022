import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilScreen } from "../screens";
import colors from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarBadgeStyle: { backgroundColor: colors.orange },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.greenLight,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.orange} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}