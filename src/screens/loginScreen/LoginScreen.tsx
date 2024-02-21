import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import IconGoogle from '../../assets/icons/icongoogle.svg'
import IconFacebook from '../../assets/icons/iconfacebook.svg'

const LoginScreen = () => {
    return (
        <View style={styles.LoginContainer}>
            <View style={styles.TitleContainer}>
                <LinearGradient colors={['#5E4EA0', '#E693BF', ]} style={styles.gradient}>
                    <Text style={styles.titleStyle}>Everyone loves <Text style={{ color: '#E693BF' }}>VNPIC</Text>.</Text>
                </LinearGradient>
            </View>
            <View style = {styles.ButtonLoginContainer}>
                <TouchableOpacity style = {styles.ButtonLogin}>
                    <Text style = {styles.ButtonLoginTitle}>Login with google</Text>
                    <IconGoogle />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.ButtonLogin}>
                    <Text style = {styles.ButtonLoginTitle}>Login with Facebook</Text>
                    <IconFacebook />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    ButtonLoginTitle:{
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'black',
        fontWeight: '400',
    },
    ButtonLogin:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 10,
    },
    ButtonLoginContainer:{
        marginTop: 150,
    },
    titleStyle:{
        fontSize: 36,
        fontFamily: 'Roboto',
        color: 'white',
        fontWeight: '700',
        width: 217,
        height: 84,
        marginTop: 94,
        marginLeft: 16,
    },
    gradient: {
        flex: 1,
    },
    TitleContainer: {
        width: '100%',
        height: '40%',
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        overflow: 'hidden',
    },
    LoginContainer: {
        flex: 1,
    },
})