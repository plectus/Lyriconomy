import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Import all the screens
import LoadingScreen from "./LoadingScreen";
import Home from "./HomeScreen";
import Settings from "./Settings";
//import Help from "./Help";
//import OfflineLyrics from "./OfflineLyrics";

const Stack = createStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
