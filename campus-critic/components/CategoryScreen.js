import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { getCategoryData } from "../methods/dbMethods";

// Mock data
const businesses = [
  {
    id: "1",
    name: "Business Name 1",
    rating: 4.0,
    reviewCount: 5,
  },
  {
    id: "2",
    name: "Business Name 2",
    rating: 4.5,
    reviewCount: 10,
  },
  {
    id: "3",
    name: "Business Name 3",
    rating: 3.5,
    reviewCount: 15,
  },
  {
    id: "4",
    name: "Business Name 4",
    rating: 5.0,
    reviewCount: 1,
  },
];

// for displaying number of stars based on rating
const displayRating = (business) => {
  let rating = business.rating;
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(<MaterialIcons name="star" size={13} color={colors.star} />);
      rating--;
    } else if (rating >= 1) {
      stars.push(
        <MaterialIcons name="star-half" size={13} color={colors.star} />
      );
      rating = 0;
    } else {
      stars.push(
        <MaterialIcons name="star" size={13} color={colors.placeholderGray} />
      );
    }
  }
  return stars;
};

const townMap = {
  univ_of_oklahoma: "Norman",
};

const mapsKey = "AIzaSyAI5kG4qxfsry5Tnw09xQmmm5elqU3TKxk";
const BaseUrl = "https://maps.googleapis.com/maps/api/place/photo?";

export default function CategoryScreen({ navigation, route }) {
  const user = route.params.user;
  const category = route.params.category;
  const [places, setPlaces] = React.useState([{}]);
  const [loading, setLoading] = React.useState(true);

  function navigatePlace(place) {
    navigation.navigate("Place Page", { place: place, user: user });
  }

  React.useEffect(() => {
    //Make API Calls here
    const fetchData = async () => {
      const data = await getCategoryData(category.value, user.college);
      setPlaces(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            {category.label} in {townMap[user.college]}
          </Text>
        </View>
        {places.map(
          (
            place // list of businesses within category
          ) => (
            <View key={place.id} style={styles.cardWrapper}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigatePlace(place)}
              >
                <Image
                  source={{
                    uri:
                      BaseUrl +
                      `maxwidth=400&photoreference=${place.photo_ref}` +
                      `&key=${mapsKey}`,
                  }}
                  style={{
                    width: "100%",
                    height: "65%",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <View style={styles.cardContentWrapper}>
                  <Text style={styles.cardTitle}> {place.name} </Text>
                  <View style={styles.ratingContainer}>
                    {displayRating(place)}
                    <Text style={styles.ratingText}>
                      {" "}
                      {place.rating} (5 reviews)
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "left",
    justifyContent: "flex-start",
    paddingVertical: 20,
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.primary,
    fontFamily: "urbanist-bold",
    lineHeight: 54.6,
  },
  cardWrapper: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    width: 370,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "visible",
  },
  card: {
    backgroundColor: colors.placeholderGray,
    borderRadius: 10,
    width: "100%",
    height: 171,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "flex-end",
    overflow: "visible",
  },
  cardContentWrapper: {
    width: "100%",
    height: 56,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardTitle: {
    color: colors.secondary,
    fontSize: 18,
    fontFamily: "urbanist-semibold",
    paddingTop: 5,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    paddingLeft: 5,
  },
  ratingText: {
    marginLeft: 10,
    fontSize: 12.5,
    color: colors.secondary,
    fontWeight: "600",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});
