import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Following from "./pages/Following";
import ComingSoon from "./pages/Following/ComingSoon";
import colors from "./styles/colors";
import { color } from "react-native-reanimated";

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "roboto_400",
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-heart"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
      <Screen
        name="Discover"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="compass-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
      <Screen
        name="Browse"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-browsers"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
      <Screen
        name="E-Sports"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="trophy-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
