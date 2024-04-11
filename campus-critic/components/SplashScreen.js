import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                 {/* Logo */}
                <Image 
                    source={require('../assets/images/critic-logo.png')}
                    style={styles.logo}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center', // Center content horizontally in the safe area
        backgroundColor: 'white', // Set background color for the entire safe area
    },
    container: {
        flex: 1,
        width: '100%',
        marginTop: 150, // Adjust the vertical position as needed
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center', // Center the logo horizontally in its container
    },
});
