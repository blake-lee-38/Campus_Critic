import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors'; // Assuming you have color definitions here
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function LoginScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleRegister = () => {
        // Implement your register functionality here
        console.log('Register button pressed');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Splash Screen')}
            >
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.welcomeBack}>Hello! Register to get started.</Text>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your username"
                    placeholderTextColor={colors.gray}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email"
                    placeholderTextColor={colors.gray}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your password"
                    placeholderTextColor={colors.gray}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Confirm your password"
                    placeholderTextColor={colors.gray}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <TouchableOpacity
                style={styles.rectangle173}
                onPress={handleRegister}
            >
                <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
            <View style={styles.root}>
                <Text style={styles.alreadyHaveAnAccount}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login Screen')}>
                    <Text style={[styles.loginNow, styles.underline]}>Login now!</Text>
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
        color: colors.primary,
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 35,
    },
    inputField: {
        width: 331,
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: 'rgba(247, 248, 249, 1)',
        marginBottom: 10,
        justifyContent: 'center',
    },
    inputText: {
        color: colors.gray,
        fontSize: 15,
        paddingHorizontal: 10,
    },
    rectangle173: {
        width: 331,
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    register: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
    },
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    alreadyHaveAnAccount: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: '700',
    },
    loginNow: {
        color: colors.secondary,
        fontSize: 15,
        fontWeight: '600',
    },
    underline: {
        textDecorationLine: 'underline',
    },
});
