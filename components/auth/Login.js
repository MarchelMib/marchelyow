import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const Login = () => {
    return (
        <View
            style={loginStyle.container}
        >
            <TextInput
                style={loginStyle.input}
                autoCapitalize="none"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder='Username or Email'
                placeholderTextColor='rgba(225, 225, 225, 0.7)'
            />

            <TextInput
                style={loginStyle.input}
                returnKeyType="go"
                ref={(input) => this.passwordInput = input}
                placeholder='Password'
                placeholderTextColor='rgba(225, 225, 225, 0.7)'
                secureTextEntry
            />

            <TouchableOpacity
                style={loginStyle.buttonContainer}

            >
                <Text
                    style={loginStyle.buttonText}>
                    LOGIN
             </Text>
            </TouchableOpacity>
            <Text
            >
                Don't have an Account. Please
     </Text>
            <TouchableOpacity

                onPress={goRoRegister}
            >
                <Text
                >
                    Register
             </Text>
            </TouchableOpacity>
        </View>
    );

}
const goRoRegister = () => {
    Actions.register();
}
const loginStyle = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225, 225, 225, 0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})
export default Login;