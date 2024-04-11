import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { signUp, signUpGoogle } from "../methods/auth";

export default function SignUp({ promptAsync }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onHandleSignUp = async () => {
    const signUpResult = await signUp(email, password);
    if (signUpResult.message === "Success") {
      console.log("User created!", signUpResult.user);
    } else {
      setErrorMessage(signUpResult.message);
      console.log(signUpResult.message);
    }
  };

  const onGoogleButtonPress = async () => {
    const googleSignUpResult = await signUpGoogle();
    console.log(googleSignUpResult);
    if (googleSignUpResult.message === "Success") {
      console.log("User created!", googleSignUpResult.user);
    } else {
      setErrorMessage(googleSignUpResult.message);
      console.log(googleSignUpResult.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Sign Up</Text>

        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            showSoftInputOnFocus={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            autoCorrect={false}
            showSoftInputOnFocus={false}
            secureTextEntry={true}
            textContentType="password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          <TouchableOpacity style={styles.button} onPress={onHandleSignUp}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onGoogleButtonPress}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              Sign Up WITH GOOGLE
            </Text>
          </TouchableOpacity>

          <Text>{errorMessage}</Text>

          {/* Navigation to Login Screen */}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 200,
  },
});
