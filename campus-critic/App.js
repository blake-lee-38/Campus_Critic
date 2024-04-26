import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import { getUser } from "./methods/dbMethods";

const LoginStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(user) {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen
        name="Home Screen"
        component={HomeScreen}
        initialParams={{ user: user }}
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

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const getInfo = async (userID) => {
        const user = await getUser(userID);
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
