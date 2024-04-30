import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Ratings,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors"; // Assuming this import path is correct

const mapsKey = "AIzaSyAI5kG4qxfsry5Tnw09xQmmm5elqU3TKxk";
const BaseUrl = "https://maps.googleapis.com/maps/api/place/photo?";

export default function PlacePage({ navigation, route }) {
  const placeInfo = route.params.place;

  function handleReviewButton() {
    navigation.navigate("Review Screen", {
      place: placeInfo,
      user: route.params.user,
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            {/*Blake Change this to the places image this rectangle is just placeholder */}
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
          <View style={styles.buisnessNameContainer}>
            <Text style={styles.buisnessName}>{placeInfo.name}</Text>
          </View>
          <View style={styles.ratingContainer}>
            {displayRating(placeInfo)}
            <Text style={styles.totalReviews}>
              {/*Blake Change this to the places rating and number of reviews this is just placeholder */}
              {placeInfo.rating} ({place.reviews} Reviews){" "}
            </Text>
          </View>
          <View style={styles.categoryInfoRow}>
            <View style={styles.categoryInfoContainer}>
              <Text style={styles.categoryInfo}>
                {typeFormat[placeInfo.type]}
              </Text>
            </View>
            <View style={styles.categoryInfoContainer}>
              <Text style={styles.categoryInfo}>{place.price}</Text>
            </View>
            <View style={styles.categoryInfoContainer}>
              {/*Blake Change this to the places distance from the user this is just placeholder */}
              <Text style={styles.categoryInfo}>0.5 Miles</Text>
            </View>
          </View>
          <View style={styles.placeInfoRow}>
            <View style={styles.placeInfoContainer} paddingTop={10}>
              <Feather name="map-pin" size={36} color={colors.primary} />
              <Text style={styles.placeInfo}>{placeInfo.address}</Text>
            </View>
          </View>
          <View style={styles.placeInfoRow}>
            <View style={styles.placeInfoContainer}>
              <AntDesign name="clockcircleo" size={36} color={colors.primary} />
              <Text style={styles.placeInfo}>Open {place.hours}</Text>
            </View>
          </View>
          <View style={styles.placeInfoRow}>
            <View style={styles.placeInfoContainer}>
              <Ionicons name="globe-outline" size={36} color={colors.primary} />
              {/*Blake Change this to the places website this is just placeholder */}
              <Text style={styles.placeInfo}>Website.com</Text>
            </View>
          </View>
          <View style={styles.seeMoreContainer}>
            <View style={styles.seeMoreRectangle}>
              <TouchableOpacity style={styles.seeMoreTextBox}>
                <Text style={styles.seeMore}>See More</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.recentReviewsTextBox}>
            <Text style={styles.recentReviewsText}>Recent Reviews</Text>
          </View>
          {/*Blake Change this to the places recent reviews in the place object these are just placeholders */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
          >
            <View style={styles.recentReviewsContainer}>
              {displayRecentReviews(place)}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addReviewButton}
        onPress={handleReviewButton}
      >
        <Feather name="plus-circle" size={36} color={colors.white} />
        <Text style={styles.addReviewButtonText}>Add A Review</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const typeFormat = {
  restaurant: "Restaurant",
  car_repair: "Car Repair",
  hair_care: "Hair Salon",
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background, // Assuming this is the color you want for your safe area
  },

  horizontalScrollView: {
    flexDirection: "row",
    width: "100%",
    height: 275,
    flexShrink: 0,
    paddingHorizontal: 20,
  },

  scrollView: {
    flex: 1,
    width: "100%",
  },
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 50,
    backgroundColor: colors.background,
  },
  imageContainer: {
    flexDirection: "row",
    width: "100%",
    height: 280,
    marginTop: -40,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },

  buisnessNameContainer: {
    flexDirection: "row",
    width: "100%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },

  buisnessName: {
    width: "100%",
    flexShrink: 0,
    color: colors.primary,
    fontSize: 42,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: -0.42,
  },

  rectangle: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    backgroundColor: colors.lightGray,
  },

  ratingContainer: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    justifyContent: "left",
    flexShrink: 0,
  },

  totalReviews: {
    color: colors.secondary,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    padding: 10,
  },

  categoryInfoRow: {
    flexDirection: "row",
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },

  categoryInfoContainer: {
    width: 100,
    height: 34,
    flexShrink: 0,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.placeholderGray,
  },

  categoryInfo: {
    color: colors.darkGray,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
  },

  placeInfoRow: {
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center", // Align items vertically
    flexShrink: 0,
  },
  placeInfoContainer: {
    flexDirection: "row", // Arrange icon and text in a row
    width: "100%", // Take up the full widths
    justifyContent: "flex-start", // Align children to the start
    alignItems: "center", // Align items vertically
    borderBottomWidth: 1, // Set the border bottom width
    borderBottomColor: colors.placeholderGray, // Set the border color
    backgroundColor: colors.background,
    paddingHorizontal: 10, // Add some padding on the sides
    paddingBottom: 20, // Add some padding on the bottom
  },
  placeInfo: {
    marginLeft: 20, // Add some margin to the left of the address text
    // Remove the height and flexDirection as they are not necessary
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "600",
  },

  seeMoreContainer: {
    flexDirection: "row",
    width: "100%",
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderBottomColor: colors.placeholderGray,
  },
  seeMoreRectangle: {
    width: "100%",
    height: 26,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.placeholderGray,
    backgroundColor: colors.background,
  },

  seeMoreTextBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  seeMore: {
    color: colors.darkGray,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },

  addReviewButtonContainer: {
    flexDirection: "row",
    height: 56,
    width: 56,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
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

  recentReviewsContainer: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    width: "100%",
    height: 150,
    flexShrink: 0,
    borderBottomColor: colors.placeholderGray,
  },
  recentReviewsText: {
    color: colors.secondary,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    paddingVertical: 20,
  },

  recentReviewsTextBox: {
    flexDirection: "row",
    alignSelf: "left",
    marginLeft: 20,
    flexShrink: 0,
  },

  recentReviewsContentContainer: {
    flexDirection: "row",
    width: 300,
    height: 200,
    flexShrink: 0,
    justifyContent: "left",
    alignItems: "left",
    backgroundColor: colors.placeholderGray,
    borderRadius: 25,
    marginLeft: 20,
  },

  recentReviewsContent: {
    fontSize: 14,
    fontWeight: "600",
    padding: 20,
    color: colors.darkGray,
  },
});

const place = {
  name: "Business Name Here",
  rating: 4,
  address: "123 Lindsey St",
  reviews: 5,
  category: "Restaurant",
  hours: "9AM - 8PM",
  price: "$$",
  website: "Website.com",
  recentReviews: ["Review 1", "Review 2", "Review 3", "Review 4", "Review 5"],
};

//display the rarting of the place out of 5 stars
function displayRating(place) {
  let rating = place.rating;
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(<MaterialIcons name="star" size={36} color={colors.gold} />);
      rating--;
    } else if (rating >= 0.5) {
      stars.push(
        <MaterialIcons name="star-half" size={36} color={colors.gold} />
      );
      rating = 0;
    } else {
      stars.push(
        <MaterialIcons name="star" size={36} color={colors.placeholderGray} />
      );
    }
  }
  return stars;
}

function displayRecentReviews(place) {
  let reviews = place.recentReviews;
  let reviewContent = [];
  for (let i = 0; i < reviews.length; i++) {
    reviewContent.push(
      <View style={styles.recentReviewsContentContainer}>
        <Text style={styles.recentReviewsContent}>{reviews[i]}</Text>
      </View>
    );
  }

  return reviewContent;
}
