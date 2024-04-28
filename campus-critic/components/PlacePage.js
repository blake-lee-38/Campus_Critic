import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Ratings } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../assets/colors/colors'; // Assuming this import path is correct


export default function PlacePage({ navigation }) {

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {/*Blake Change this to the places image this rectangle is just placeholder */}
                <Text style = {styles.rectangle}> </Text>
            </View>
            <View style={styles.buisnessNameContainer}>
                <Text style={styles.buisnessName}>Buisness Name Here</Text>
            </View>
            <View style={styles.ratingContainer}>
                {displayRating(place)}
                <Text style={styles.totalReviews}>{place.rating} ({place.reviews} reviews) </Text>
            </View>
            <View style={styles.infoRow}>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>{place.category}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>{place.price}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>0.5 Miles</Text>
                </View>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 50,
        backgroundColor: colors.background,
      },
    imageContainer: {
        flexDirection: 'row',
        width: 393,
        height: 245,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
      },
    
    buisnessNameContainer:{
        flexDirection: 'row',
        width: 370,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },

    buisnessName: {
        width: 370,
        flexShrink: 0,
        color: colors.primary,
        fontFamily: 'Urbanist',
        fontSize: 42,
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: -0.42,
      },

    rectangle: {
        width: 393,
        height: 245,
        flexShrink: 0,
        backgroundColor: colors.gray,
      },
    
    ratingContainer:{
        flexDirection: 'row',
        width: 395,
        paddingLeft: 10,
        justifyContent: 'left',
        flexShrink: 0,
    },

    totalReviews: {
        color: colors.secondary,
        fontFamily: 'Urbanist',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        padding: 10
    },

    infoRow:{
        flexDirection: 'row',
        width: 350,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
        
    },
    
    infoContainer:{
        width: 87,
        height: 34,
        flexShrink: 0,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.placeholderGray,
    },

    info: {
        color: colors.darkGray,
        fontFamily: 'Urbanist',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        alignContent: 'center',
    },

    open: {
        color: colors.open,
        fontFamily: 'Urbanist',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        alignContent: 'center',
    },

    closed: {
        color: colors.darkGray,
        fontFamily: 'Urbanist',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        alignContent: 'center',
    },
        


})

const place = {
    name: "Business Name",
    rating: 4,
    address: "123 Lindsey St",
    reviews: 5,
    category: "Restaurant",
    hours: "3am - 5pm",
    price: "$$",
  
  };

function displayRating(place){
    let rating = place.rating;
    let stars = [];
    for (let i = 0; i < 5; i){
        if (rating >= 1){
            stars.push(<MaterialIcons name="star" size={36} color={colors.gold} />);
            rating--;
        } else if (rating >= 0.5){
            stars.push(<MaterialIcons name="star-half" size={36} color={colors.gold} />);
            rating = 0;
        } else {
            stars.push(<MaterialIcons name="star" size={36} color={colors.lightGray} />);
        }
    }
    return stars;
}
