import * as React from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = React.useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  const categories = [
    { icon: "fast-food-outline", label: "Food" },
    { icon: "cafe-outline", label: "Coffee" },
    { icon: "barbell-outline", label: "Gym" },
    { icon: "book-outline", label: "Library" },
    { icon: "ice-cream-outline", label: "Desserts" },
    { icon: "beer-outline", label: "Bars" },
    { icon: "ellipsis-horizontal", label: "More" }
  ];

  const recents = [
    { name: "Place 1", rating: 4.5},
    { name: "Place 2", rating: 3.5},
    { name: "Place 3", rating: 4.0},
    { name: "Place 4", rating: 5.0},
    { name: "Place 5", rating: 2.5},
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Text style={styles.hiUserFirst}>Hi, UserFirst!</Text>
          <Text style={styles.subHeading}>Let’s explore townNameHere.</Text>
          <SearchBar
            placeholder="Search for restaurants, cafes, and more"
            onChangeText={updateSearch}
            value={search}
            lightTheme
            inputContainerStyle={styles.search}
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
          />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <View key={index} style={styles.categoryWrapper}>
                <TouchableOpacity style={styles.categoryButton}>
                  <Ionicons name={category.icon} size={45} style={styles.iconFormat} />
                </TouchableOpacity>
                <Text style={styles.categoryText}>{category.label}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.heading}>My Recent Reviews</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.recentReviewsContainer}>
          {recents.map((recent, index) => (
            <View key={index} style={styles.recentReviewWrapper}>
              <TouchableOpacity style={styles.recentReview}>
                <View style={styles.recentReviewTextWrapper}>
                  <Text style={styles.recentReviewText}>{recent.name}</Text>
                  <Text style={styles.recentReviewTextSmall}>{`You gave this: ${recent.rating}`}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
          </ScrollView>
        </View>
      </ScrollView>
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
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    width: '100%',
  },
  hiUserFirst: {
    color: colors.primary,
    fontSize: 42,
    fontWeight: '700',
    marginTop: 30,
    alignSelf: 'flex-start', // Add this line to align text to the left
    marginLeft: 30, // Adjust this value to set your desired margin from the left
  },
  subHeading: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    alignSelf: 'flex-start', // Add this line to align text to the left
    marginLeft: 30, // Adjust this value to set your desired margin from the left
  },
  heading: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'flex-start', // This will align the text to the left
    marginLeft: 30, // This value sets your desired margin from the left, keeping it consistent with the ScrollView padding
    width: '100%', // You might need to set a width of 100% if alignSelf doesn't work as expected.
  },
  search: {
    width: 331,
    height: 50,
    backgroundColor: colors.placeholderGray,
    borderRadius: 25,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    elevation: 0,
    padding: 0,
  },
  searchInput: {
    fontSize: 16,
  },
  categoriesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFormat: {
    color: 'white',
  },
  categoryText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 7,
    marginBottom: 20,
  },
  recentReviewsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  recentReviewWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    width: 150, // Set a fixed width for your gray boxes
    shadowColor: "#000", // This is the color of the shadow
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
  },
    shadowOpacity: 0.25, // The opacity of the shadow
    shadowRadius: 3.84, // The blur radius of the shadow
    elevation: 5, // The elevation of the shadow (for Android)
  },
  recentReview: {
    backgroundColor: colors.placeholderGray, // background color for the top part of the box
    borderRadius: 10,
    width: '100%', // full width of the wrapper
    height: 120, // fixed height of the box
    justifyContent: 'flex-end', // aligns the white background text container to the bottom
    padding: 0, // padding is now moved to the text wrapper
  },
  recentReviewText: {
    color: colors.secondary, // Set the color for text inside the gray boxes
    backgroundColor: 'white', // Set the background color to transparent
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left', // Center the text horizontally
    marginBottom: 0, // Space out the name and the rating
  },
  recentReviewTextSmall: {
    color: colors.secondary, // Set the color for text inside the gray boxes
    backgroundColor: 'white', // Set the background color to transparent
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left', // Center the text horizontally
    marginBottom: 0, // Space out the name and the rating
  },
  recentReviewTextWrapper: {
    width: '100%', // Take up the full width of the parent
    backgroundColor: 'white', // Set background color to white
    padding: 5, // Add some padding inside the white container
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10, 
  },
});

