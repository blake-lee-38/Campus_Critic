import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import LoginScreen from "./LoginScreen";
import { getPlaces } from "../methods/dbMethods.js";

export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo and Title Group */}
        <View style={styles.logoTitleGroup}>
          <Image
            source={require("../assets/images/critic-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.campusCritic}>Campus Critic</Text>
        </View>

        {/* Buttons Group */}
        <View style={styles.buttonsGroup}>
          {/* Login Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login Screen")}
          >
            <View style={styles.loginButtonBack}>
              <Text style={styles.login}>Login</Text>
            </View>
          </TouchableOpacity>
          {/* Register Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Register Screen")}
          >
            <View style={styles.registerButtonBack}>
              <Text style={styles.register}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  logoTitleGroup: {
    alignItems: "center",
    marginBottom: 100, // Space between logo/title and buttons
  },
  buttonsGroup: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  campusCritic: {
    color: colors.primary,
    fontSize: 42,
    fontWeight: "700",
    letterSpacing: -0.42,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    width: 331,
    height: 56,
    marginBottom: 10, // Space between buttons
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
  },
  loginButtonBack: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  registerButtonBack: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  login: {
    color: colors.white,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
  register: {
    color: colors.primary,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
});
