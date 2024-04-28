import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import colors from '../assets/colors/colors'; // Assuming you have color definitions here
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package

const recents = [
    { name: "Place 1", rating: 4.5},
    { name: "Place 2", rating: 3.5},
    { name: "Place 3", rating: 4.0},
    { name: "Place 4", rating: 5.0},
    { name: "Place 5", rating: 2.5},
  ];

export default function UserProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View 
          style={styles.circle}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="edit" size={25} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.name}>First Last</Text>
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.infoContainer}>
      <Text style={styles.emailLabel}>Your Email</Text>
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color={colors.primary} />
          <Text style={styles.email}>email@school.edu</Text>
        </View>
      </View>
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
          <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    backgroundColor: colors.placeholderGray,
    },
  profileHeader: {
    alignItems: 'center',
    marginTop: 70,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.lightGray,
  },
  editIcon: {
    position: 'absolute',
    right: 140, // Adjust this value as needed to position the edit icon correctly
    bottom: 40, // Adjust this value as needed to position the edit icon correctly
    backgroundColor: colors.primary, // Assuming this is the color of the background circle
    borderRadius: 35/2, // Half the height/width for a perfect circle
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30, // Adjust this value as needed to position the edit icon correctly
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
  username: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    margin: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.placeholderGray,
    padding: 15,
  },
  emailLabel: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 7,
    marginBottom: 10,
  },
  email: {
    fontSize: 14,
    color: colors.darkGray,
    marginLeft: 10,
    },
  logoutButton: {
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: colors.white,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 3,
    width: '85%',
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
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
  horizontalScrollContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
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
  heading: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginLeft: 30,
    width: '100%',
  },
});
