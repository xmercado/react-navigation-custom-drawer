import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";
import Header from "../navigation/Header";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MomentsScreen from "../screens/MomentsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const screenOptions = {
    drawerActiveBackgroundColor: "#aa18ea",
    drawerActiveTintColor: "#FFF",
    drawerInactiveTintColor: "#333",
    drawerLabelStyle: {
      marginLeft: -25,
      fontSize: 15,
    },
  };

  const icon = (name) => ({
    drawerIcon: ({ color }) => <Ionicons name={name} size={22} color={color} />,
  });

  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
        ...screenOptions,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={icon("home-outline")}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={icon("person-outline")}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={icon("chatbox-ellipses-outline")}
      />
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={icon("timer-outline")}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={icon("settings-outline")}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;