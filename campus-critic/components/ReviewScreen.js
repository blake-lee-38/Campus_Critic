import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import LoginScreen from "./LoginScreen";
import {
  MaterialIcons,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { postReview } from "../methods/dbMethods";

const mapsKey = "AIzaSyAI5kG4qxfsry5Tnw09xQmmm5elqU3TKxk";
const BaseUrl = "https://maps.googleapis.com/maps/api/place/photo?";

export default function SplashScreen({ navigation, route }) {
  const user = route.params.user;
  const placeInfo = route.params.place;
  const [numStars, setNumStars] = React.useState(0);

  const handleAddReview = async () => {
    console.log("Adding Review", user, numStars, placeInfo);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: "center", paddingVertical: 10 }}>
          {/* Logo and Title Group */}
          <View style={styles.logoTitleGroup}>
            <Text style={styles.campusCritic}>Leave Your Review!</Text>
          </View>
          <View style={styles.CompanyImage}>
            <Image
              source={{
                uri:
                  BaseUrl +
                  `maxwidth=400&photoreference=${placeInfo.photo_ref}` +
                  `&key=${mapsKey}`,
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View style={styles.businessTitleGroup}>
            <Text style={styles.business}>Business Name: {placeInfo.name}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="star"
              size={48}
              color={numStars > 0 ? colors.star : colors.placeholderGray}
              onPress={() => setNumStars(1)}
            />
            <MaterialIcons
              name="star"
              size={48}
              color={numStars > 1 ? colors.star : colors.placeholderGray}
              onPress={() => setNumStars(2)}
            />
            <MaterialIcons
              name="star"
              size={48}
              color={numStars > 2 ? colors.star : colors.placeholderGray}
              onPress={() => setNumStars(3)}
            />
            <MaterialIcons
              name="star"
              size={48}
              color={numStars > 3 ? colors.star : colors.placeholderGray}
              onPress={() => setNumStars(4)}
            />
            <MaterialIcons
              name="star"
              size={48}
              color={numStars > 4 ? colors.star : colors.placeholderGray}
              onPress={() => setNumStars(5)}
            />
          </View>
          <TextInput
            style={styles.form}
            placeholder="  Write your review here!"
            multiline={true}
            numberOfLines={4}
          />
          <View style={{ height: 200 }}></View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addReviewButton}
        onPress={handleAddReview}
      >
        <Feather name="plus-circle" size={36} color={colors.white} />
        <Text style={styles.addReviewButtonText}>Post Review!</Text>
      </TouchableOpacity>
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
  addReviewButton: {
    flexDirection: "row", // Arrange icon and text in a row
    width: 250, // Diameter of the button
    height: 56, // Diameter of the button
    alignItems: "center", // Center the icon horizontally
    justifyContent: "center", // Center the icon vertically
    alignSelf: "center", // Center the button horizontally
    backgroundColor: colors.primary, // Button color
    borderRadius: 28, // Half the width/height to make it perfectly round
    elevation: 8, // Shadow for Android (optional)
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.25, // Shadow for iOS
    shadowRadius: 3.84, // Shadow for iOS
  },
  addReviewButtonText: {
    color: colors.white, // Text color
    fontSize: 24, // Font size
    fontWeight: "bold", // Font weight
    paddingHorizontal: 20, // Add some margin to the left of the text
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  largeContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 50,
  },
  logoTitleGroup: {
    alignItems: "center",
    marginBottom: 20, // Space between logo/title and buttons
  },
  businessTitleGroup: {
    alignItems: "center",
    margin: 10,
  },
  buttonsGroup: {
    width: "100%",
    alignItems: "center",
  },
  CompanyImage: {
    width: "100%",
    height: 300,
    alignItems: "center",
  },
  star: {
    width: 100,
    height: 100,
    alignItems: "center",
    marginLeft: 100,
  },
  form: {
    width: "90%",
    height: 200,
    borderWidth: 2,
    borderColor: colors.placeholderGray,
    borderRadius: 8,
  },
  campusCritic: {
    color: colors.primary,
    fontSize: 42,
    fontWeight: "700",
    letterSpacing: -0.42,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  business: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "700",
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
