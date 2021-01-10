import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Main from "./pages/Main";
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  headerTitleStyle: {
    alignSelf: "center",
  },
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={screenOptions} />

        <Stack.Screen name="Main" component={Main} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
