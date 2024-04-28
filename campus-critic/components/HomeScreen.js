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
                  <Text style={styles.recentReviewText}>{recent.name}</Text>
                  <Text style={styles.recentReviewText}>{`Rating: ${recent.rating}`}</Text>
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
    width: 330,
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
    // Remove paddingHorizontal if you want it to start from x=0 or adjust accordingly
  },
  recentReviewWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
    width: 150, // Set a fixed width for your gray boxes
  },
  recentReview: {
    backgroundColor: colors.placeholderGray, // Use the gray color from your color palette
    borderRadius: 10,
    width: '100%', // The width will be taken from the recentReviewWrapper
    height: 120,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    padding: 10, // Add some padding for the content
  },
  recentReviewText: {
    color: colors.primary, // Set the color for text inside the gray boxes
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center', // Center the text horizontally
    marginBottom: 5, // Space out the name and the rating
  },
});

