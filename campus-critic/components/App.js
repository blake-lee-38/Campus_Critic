import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import SignUp from "./SignUp";

export default function App() {
  return <SignUp />;

  //return SplashScreen();
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 200,
  },
});
