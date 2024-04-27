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

  // Array of category details
  const categories = [
    { icon: "fast-food-outline", label: "Food" },
    { icon: "cafe-outline", label: "Coffee" },
    { icon: "barbell-outline", label: "Gym" },
    { icon: "book-outline", label: "Study" },
    { icon: "ice-cream-outline", label: "Desserts" },
    { icon: "ellipsis-horizontal", label: "More" }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Text style={styles.hiUserFirst}>
            {`Hi, UserFirst!`}
          </Text>
          <Text style={styles.subHeading}>
            {`Let’s explore townNameHere.`}
          </Text>
          <SearchBar
            placeholder="Search for restaurants, cafes, and more"
            onChangeText={updateSearch}
            value={search}
            lightTheme
            inputContainerStyle={styles.search}
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
          />
          <ScrollView horizontal={true} style={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <View key={index} style={styles.categoryWrapper}>
                <TouchableOpacity style={styles.categoryButton}>
                  <Ionicons name={category.icon} size={45} style={styles.iconFormat} />
                </TouchableOpacity>
                <Text style={styles.categoryText}>
                  {category.label}
                </Text>
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
    marginTop: 5,
    marginBottom: 20,
  },
});

