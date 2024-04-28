import * as React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen";
import colors from "../campus-critic/assets/colors/colors.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator
function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddReview') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={40} color={colors.primary} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.placeholderGray,
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 25, 
          paddingVertical: 15, 
          height: 80,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} /> 
      {/* Add the AddReviewScreen component */}
      {/* Add the ProfileScreen component */}
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Screen">
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login Screen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register Screen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        {/* Use the TabScreen as a stack screen */}
        <Stack.Screen
          name="Home Screen"
          component={TabScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
