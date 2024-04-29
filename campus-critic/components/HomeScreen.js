import * as React from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { auth } from "../config/firebaseConfig";

export default function HomeScreen({ navigation, route }) {
  const user = route.params.user;
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

  const popular = [
    { name: "Place 1", category: "Food"},
    { name: "Place 2", category: "Coffee"},
    { name: "Place 3", category: "Gym"},
    { name: "Place 4", category: "Food"},
    { name: "Place 5", category: "Desserts"},
  ];

  const topPicks = [
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollContainer}>
          {recents.map((recent, index) => (
            <View key={index} style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardContentWrapper}>
                  <Text style={styles.cardTitle}>{recent.name}</Text>
                  <Text style={styles.cardSubtitle}>{`You gave this: ${recent.rating}`}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
          </ScrollView>
          <Text style={styles.heading}>Popular Near You</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollContainer}>
          {popular.map((popular, index) => (
            <View key={index} style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardContentWrapper}>
                  <Text style={styles.cardTitle}>{popular.name}</Text>
                  <Text style={styles.cardSubtitle}>{popular.category}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
          </ScrollView>
          <Text style={styles.heading}>Top Picks for You</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollContainer}>
          {topPicks.map((topPicks, index) => (
            <View key={index} style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardContentWrapper}>
                  <Text style={styles.cardTitle}>{topPicks.name}</Text>
                  <Text style={styles.cardSubtitle}>{`Rating: ${topPicks.rating}`}</Text>
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
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  subHeading: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  heading: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginLeft: 30,
    width: '100%',
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
  horizontalScrollContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cardWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    width: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: colors.placeholderGray,
    borderRadius: 10,
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
  },
  cardContentWrapper: {
    width: '100%',
    backgroundColor: colors.white,
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10, 
  },
  cardTitle: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
  },
  cardSubtitle: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
  },
});
