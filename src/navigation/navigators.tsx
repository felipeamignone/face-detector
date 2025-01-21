import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home";
import FaceDetectorScreen from "../screens/faceDetector";
import LoginScreen from "../screens/login";
import { MaterialIcons } from "@expo/vector-icons";
import { tabStyles } from "./styles";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabStyles.tabBar,
        tabBarLabelStyle: tabStyles.tabLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"home"} size={tabStyles.tabIcon.fontSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Face Detector"
        component={FaceDetectorScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"person"} size={tabStyles.tabIcon.fontSize} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export type RootTabParamList = {
  Home: undefined;
  FaceDetector: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
};

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
