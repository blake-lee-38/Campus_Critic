import * as React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import UserProfile from "./components/UserProfile";
import colors from "../campus-critic/assets/colors/colors.js";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen";
import PlacePage from "./components/PlacePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import { getUser } from "./methods/dbMethods";
import ReviewScreen from "./components/ReviewScreen";
import CategoryScreen from "./components/CategoryScreen.js";
import RecScreen from "./components/RecScreen.js";
const LoginStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function InsideLayout(user) {
  return (
    <InsideStack.Navigator>
      {/* Use the TabScreen as a stack screen */}
      <InsideStack.Screen
        name="Home Screen"
        component={TabScreen}
        initialParams={{ user: user }}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="Place Page"
        component={PlacePage}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="Review Screen"
        component={ReviewScreen}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="Category Screen"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
    </InsideStack.Navigator>
  );
}

function LoginLayout() {
  return (
    <LoginStack.Navigator initialRouteName="Splash Screen">
      <LoginStack.Screen
        name="Splash Screen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="Login Screen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="Register Screen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
}

// Tab Navigator
function TabScreen({ route }) {
  const user = route.params.user;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AI Recommendations") {
            iconName = focused ? "sparkles" : "sparkles-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={40} color={colors.primary} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.placeholderGray,
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: 25,
          paddingVertical: 15,
          height: 80,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ user: user }}
      />
      <Tab.Screen
        name="AI Recommendations"
        component={RecScreen}
        initialParams={{ user: user }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        initialParams={{ user: user }}
      />

      {/* Add the AddReviewScreen component */}
      {/* Add the ProfileScreen component */}
    </Tab.Navigator>
  );
}

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const getInfo = async (userID) => {
        const user = await getUser(userID);
        user["uid"] = userID;
        console.log("Document data:", user);
        setUser(user);
      };

      user ? getInfo(user.uid) : setUser(null);
    });
  }, []);

  return (
    <NavigationContainer>
      {user ? InsideLayout(user) : LoginLayout()}
    </NavigationContainer>
  );
}

export default App;
