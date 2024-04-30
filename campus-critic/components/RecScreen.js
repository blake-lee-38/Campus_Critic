import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../assets/colors/colors"; // Assuming you have color definitions here
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { signIn } from "../methods/auth";

const townMap = {
  univ_of_oklahoma: "Norman, OK",
};

export default function RecScreen({ navigation, route }) {
  const user = route.params.user;
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [recommendations, setRecommendations] = React.useState(""); // Add this line

  const [category, setCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    { label: "Food", value: "restaurant" },
    { label: "Mechanic", value: "car_repair" },
    { label: "Barber/Salon", value: "hair_care" },
  ]);
  const getRecommendations = async () => {
    setLoading(true);
    console.log(
      "Getting recommendations for",
      user.uid,
      category,
      townMap[user.college]
    );
    if (category === "") {
      setErrorMessage("Please select a category");
      setLoading(false);
      return;
    }

    const apiUrl = "http://192.168.4.24:5000/api/get_ai_recs";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: user.uid,
        category: category,
        where: townMap[user.college],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecommendations(data.recommendations);
      })
      .catch((error) => console.error("Error:", error));

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeBack}>AI-Powered Recommendations</Text>
      <Text style={styles.welcomeBack2}>Select a Category to Get Started</Text>
      <DropDownPicker
        open={open}
        value={category}
        items={items}
        setOpen={setOpen}
        setValue={setCategory}
        setItems={setItems}
        style={styles.inputField}
        containerStyle={{ width: 331, height: 56 }}
        textStyle={styles.inputText}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={getRecommendations}>
          <Text style={styles.buttonText}>Get My Recommendations</Text>
        </TouchableOpacity>
      )}
      <Text>{errorMessage}</Text>
      <Text>{recommendations}</Text>
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
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: 35,
  },
  welcomeBack2: {
    color: colors.darkGray,
    fontSize: 18,
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
