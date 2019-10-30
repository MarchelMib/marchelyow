import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const Register = () => {
    return (
        <View
            style={RegisterStyle.container}
        >
            <TextInput
                style={RegisterStyle.input}
                autoCapitalize="none"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder='Username or Email'
                placeholderTextColor='rgba(225, 225, 225, 0.7)'
            />

            <TextInput
                style={RegisterStyle.input}
                returnKeyType="go"
                ref={(input) => this.passwordInput = input}
                placeholder='Password'
                placeholderTextColor='rgba(225, 225, 225, 0.7)'
                secureTextEntry
            />

            <TouchableOpacity
                style={RegisterStyle.buttonContainer}

            >
                <Text
                    style={RegisterStyle.buttonText}>
                    Register
             </Text>
            </TouchableOpacity>
            <Text
            >
                Don't have an Account. Please
     </Text>
            <TouchableOpacity

                onPress={goRoLogin}
            >
                <Text
                >
                    Register
             </Text>
            </TouchableOpacity>
        </View>
    );

}
const goRoLogin = () => {
    Actions.login();
}
const RegisterStyle = StyleSheet.create({
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
export default Register;