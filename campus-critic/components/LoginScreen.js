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

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeBackGladToSeeYouAgain}>Welcome Back!</Text>
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
    welcomeBackGladToSeeYouAgain: {
        color: colors.primary,  // Assuming colors.primary is defined
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: -0.3,
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
        fontFamily: 'Urbanist',
        fontSize: 15,
        padding: 10,
        color: colors.gray,  // Assuming colors.gray is defined
        textAlignVertical: 'center',  // Vertically center the text
    },
    button: {
        width: 331,
        height: 56,
        borderRadius: 8,
        backgroundColor: colors.primary,  // Assuming colors.primary is defined
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
