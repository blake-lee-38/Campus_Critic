import { FlatList, StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function SplashScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={
                    require('./assets/critic-logo.png')
                }
            />
            <Text>See Restaurants in Your Area!</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#F9F0D8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      width: 200,
    },
    logo: {
        width: 200,
        height: 200,
      },
  });