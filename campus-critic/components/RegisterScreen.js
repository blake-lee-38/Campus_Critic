import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import colors from "../assets/colors/colors"; // Assuming you have color definitions here
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { signUp, signUpGoogle } from "../methods/auth";
import DropDownPicker from "react-native-dropdown-picker";
import { storeUserData } from "../methods/dbMethods";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  //Dropdown picker for college selection
  const [college, setCollege] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    { label: "University of Oklahoma", value: "univ_of_oklahoma" },
    { label: "University of Texas at Austin", value: "univ_of_texas" },
  ]);

  const handleRegister = async () => {
    setLoading(true);
    // Implement your register functionality here
    if (
      college === null ||
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorMessage("Please fill out all fields");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setLoading(false);
      return;
    }
    const signUpResult = await signUp(email, password);
    if (signUpResult.message === "Success") {
      console.log("User created!", signUpResult.user);
      await storeUserData(signUpResult.user.uid, {
        email: email,
        username: username,
        college: college,
        firstName: firstName,
        lastName: lastName,
      });
      setLoading(false);
    } else {
      setErrorMessage(signUpResult.message);
      console.log(signUpResult.message);
      setLoading(false);
    }
  };

  const onGoogleButtonPressed = async () => {
    const googleSignUpResult = await signUpGoogle();
    console.log(googleSignUpResult);
    if (googleSignUpResult.message === "Success") {
      console.log("User created!", googleSignUpResult.user);
      navigation.navigate("Home Screen");
    } else {
      setErrorMessage(googleSignUpResult.message);
      console.log(googleSignUpResult.message);
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Splash Screen")}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.welcomeBack}>Hello! Register to get started.</Text>
        <Text style={styles.category}>Personal Information</Text>
        <View style={styles.inputField}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your First Name"
            placeholderTextColor={colors.gray}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your Last Name"
            placeholderTextColor={colors.gray}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your username"
            placeholderTextColor={colors.gray}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <Text style={styles.category}>Account Sign-In Information</Text>
        <View style={styles.inputField}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your email"
            placeholderTextColor={colors.gray}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your password"
            placeholderTextColor={colors.gray}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={styles.inputText}
            placeholder="Confirm your password"
            placeholderTextColor={colors.gray}
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <Text style={styles.category}>Choose Your Home College!</Text>
        <DropDownPicker
          open={open}
          value={college}
          items={items}
          setOpen={setOpen}
          setValue={setCollege}
          setItems={setItems}
          style={styles.inputField}
          containerStyle={{ width: 331, height: 56 }}
          textStyle={styles.inputText}
        />
        <Text style={styles.underline}>{errorMessage}</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity
            style={styles.rectangle173}
            onPress={handleRegister}
          >
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        )}
        <View style={styles.root}>
          <Text style={styles.alreadyHaveAnAccount}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login Screen")}>
            <Text style={[styles.loginNow, styles.underline]}>Login now!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
    marginLeft: 35,
  },
  category: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 20,
    marginLeft: 35,
    justifyContent: "center",
  },
  inputField: {
    width: 331,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "rgba(247, 248, 249, 1)",
    marginBottom: 10,
    justifyContent: "center",
  },
  inputText: {
    color: colors.gray,
    fontSize: 15,
    paddingHorizontal: 10,
  },
  rectangle173: {
    width: 331,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  register: {
    color: colors.white,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
  root: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  alreadyHaveAnAccount: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "700",
  },
  loginNow: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "600",
  },
  underline: {
    textDecorationLine: "underline",
  },
});
