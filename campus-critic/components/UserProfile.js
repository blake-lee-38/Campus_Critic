import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors'; // Assuming you have color definitions here
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package

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
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
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
    shadowColor: colors.black, // To give an elevation effect if needed
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android elevation effect
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
    fontSize: 16,
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
    backgroundColor: colors.white,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  logoutButtonText: {
    color: colors.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
