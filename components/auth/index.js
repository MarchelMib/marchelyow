import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Routes from './Routes'
import { requestReview } from 'expo/build/StoreReview/StoreReview';

const Auth = () => {
    return (
        <View
            style={authStyles.container}
        >
            <View
                style={authStyles.formContainer}
            >
                <Image
                    resizeMmode="contain"
                    style={authStyles.logo}
                    source={require('./logo.svg')}
                />
            </View>

            <Routes />
        </View>
    )

}

const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    formContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 150,
        height: 150
    }
})
export default Auth;