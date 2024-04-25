import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import LoginScreen from "./LoginScreen";

export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo and Title Group */}
        <Text style={styles.hiUserFirst}>
          {`Hi, UserFirst!`}
          </Text>
        <View style={styles.logoTitleGroup}>
          <Image
            source={require("../assets/images/critic-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.campusCritic}>Campus Critic</Text>
        </View>

        <Text style={styles.campusCritic}>
          Welcome to the Home Screen User!
        </Text>
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
  root: {
    width: 305.12799,
    height: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 6,
    columnGap: 6,
    flexShrink: 0,
  },
  hiUserFirst: {
    width: 305.12799,
    color: colors.primary,
    fontFamily: 'Urbanist',
    fontSize: 42,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: -0.42,
  },
  letsExploreTownNameHere: {
    width: 305.12799,
    color: colors.secondary,
    fontFamily: 'Urbanist',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});
