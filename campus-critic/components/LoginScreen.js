import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import colors from "../assets/colors/colors"; // Assuming you have color definitions here
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { signIn } from "../methods/auth";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation(); // Get the navigation object
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleLogin = async () => {
    setLoading(true);
    if (email === "" || password === "") {
      setErrorMessage("Please fill out all fields");
      setLoading(false);
      return;
    }
    const signInResult = await signIn(email, password);
    if (signInResult.message === "Success") {
      console.log("User signed in!", signInResult.user);
      setLoading(false);
    } else {
      setErrorMessage(signInResult.message);
      console.log(signInResult.message);
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log("Navigate to Forgot Password screen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Splash Screen")}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeBack}>Welcome Back!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={colors.gray}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          textAlignVertical="center"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={colors.gray}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          textAlignVertical="center"
        />
      </View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
      <View style={styles.root}>
        <Text style={styles.dontHaveAnAccount}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register Screen")}
        >
          <Text style={[styles.registerNow, styles.underline]}>
            Register now!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 15,
    padding: 10,
  },
  backButtonText: {
    color: colors.primary,
  },
  welcomeBack: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 35,
  },
  inputContainer: {
    width: 331,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "rgba(247, 248, 249, 1)",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    fontSize: 15,
    paddingHorizontal: 10,
    paddingTop: 18,
    paddingBottom: 0,
    color: colors.gray,
    textAlignVertical: "center",
  },
  button: {
    width: 331,
    height: 56,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Add margin top to separate from the forgot password button
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
  root: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dontHaveAnAccount: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "700",
    marginTop: 50,
  },
  registerNow: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 50,
  },
  underline: {
    textDecorationLine: "underline",
  },
  forgotPasswordButton: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 20, // Add spacing between this button and the login button
  },
  forgotPassword: {
    color: colors.darkGray,
    fontSize: 14,
    fontWeight: "600",
    marginRight: 35,
  },
});
