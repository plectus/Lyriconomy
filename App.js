import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HomeScreen from "./components/HomeScreen";
//import TopBar from "./components/TopBar";
//import Name from "./components/Name";
//import BottomBar from "./components/BottomBar";
import LoadingScreen from "./components/LoadingScreen";
import Settings from "./components/Settings";
//import { render } from "react-dom";
//import Navigator from "./components/Homestack";
//import { createStackNavigator } from "@react-navigation/stack";
//import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Offline from "./components/OfflineLyrics";
import TopBar from "./components/TopBar";

export default function App() {
  //if (this.state.isLoading) return <LoadingScreen />;
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Settings"
          style={{ marginBottom: 40 }}
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => (
              <Icon
                style={[{ color: "white" }]}
                size={25}
                name={"settings-outline"}
              />
            )
          }}
        />
        <Tab.Screen
          name="Home"
          style={{ marginBottom: 40, backgroundcolor: "red" }}
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <Icon style={[{ color: "white" }]} size={25} name={"home"} />
            )
          }}
        />
        <Tab.Screen
          name="Loading"
          style={{ marginBottom: 40, color: "red" }}
          component={Offline}
          options={{
            tabBarLabel: "Offline",
            tabBarIcon: () => (
              <Icon
                style={[{ color: "white" }]}
                size={25}
                name={"content-save-outline"}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
