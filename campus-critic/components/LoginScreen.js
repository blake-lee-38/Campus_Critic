import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';  // Assuming you have color definitions here

export default function LoginScreen() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleLogin = () => {
        // Handle login logic here using the email and password state variables
        console.log(`Email: ${email}, Password: ${password}`);
    };

    const handleRegister = () => {
        // Handle navigation to the register screen or any other action
        console.log('Navigate to Register screen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeBack}>Welcome Back!</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your email"
                    placeholderTextColor={colors.gray}  // Assuming colors.gray is defined
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    textAlignVertical="center"  // Vertically center the text
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your password"
                    placeholderTextColor={colors.gray}  // Assuming colors.gray is defined
                    secureTextEntry={true}  // Obscure the password
                    value={password}
                    onChangeText={setPassword}
                    textAlignVertical="center"  // Vertically center the text
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
        backgroundColor: colors.background,  // Assuming colors.background is defined
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
