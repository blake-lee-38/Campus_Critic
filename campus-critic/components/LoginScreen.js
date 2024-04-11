import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors'; // Assuming you have color definitions here
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function LoginScreen() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation(); // Get the navigation object

    const handleLogin = () => {
        console.log(`Email: ${email}, Password: ${password}`);
    };

    const handleRegister = () => {
        console.log('Navigate to Register screen');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Splash Screen')}
            >
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.welcomeBack}>Welcome Back!</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={colors.gray}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    textAlignVertical="center"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor={colors.gray}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    textAlignVertical="center"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.root}>
                <Text style={styles.registerNow}>Don't have an account? </Text>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={[styles.registerNow, styles.underline]}>Register now!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 15,
        padding: 10,
    },
    backButtonText: {
        color: colors.primary,
    },
    welcomeBack: {
        color: colors.primary,  // Assuming colors.primary is defined
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: -0.3,
        alignSelf: 'flex-start',
        marginLeft: 35,  // Adjust this value to match the input boxes' alignment
    },
    inputContainer: {
        width: 331,
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.border,  // Assuming colors.border is defined
        backgroundColor: 'rgba(247, 248, 249, 1)',
        marginBottom: 20,  // Add spacing between inputs
    },
    input: {
        width: '100%',
        fontSize: 15,
        paddingHorizontal: 10,  // maintain horizontal padding
        paddingTop: 18,  // adjust top padding if necessary
        paddingBottom: 0,  // adjust bottom padding if necessary
        color: colors.gray,
        textAlignVertical: 'center',
    },
    button: {
        width: 331,
        height: 56,
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '600',
    },
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Add margin top to separate from the button
    },
    registerNow: {
        color: colors.secondary,  // Assuming colors.secondary is defined
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: 0.15,
    },
    underline: {
        textDecorationLine: 'underline',
    },
});
