import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import HeaderBarEditProfile from '@/component/HeaderBarEditProfile'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import ButtonBottom from '@/component/ButtonBottom'
const JoinVerses = () => {
    return (
        <View style={styles.Container}>
            <LinearGradient colors={['#5E4EA0', '#E693BF',]} style={styles.gradient}>
                <ImageBackground source={require('@/assets/images/backgroundjoinverses.png')} style={{ width: '100%', height: '100%', justifyContent: 'space-between', padding:16}}>
                  
                        <View>
                            <View style={styles.HeaderContainer}>
                                <FontAwesomeIcon icon={faChevronLeft} size={15} color="#fff" />
                                <Text style={styles.BackStyle}>Back</Text>
                            </View>
                            <View style={styles.TitleContainer}>
                                <View style={styles.ProfileSetup}>
                                    <FontAwesomeIcon icon={faCircleCheck} size={15} color="#fff" />
                                    <Text style={styles.ProfileSetupText}>Profile set up</Text>
                                </View>
                                <View>
                                    <Text style={styles.CongratsLiftx}>Congrats Liftx!</Text>
                                    <Text style={styles.CongratsLiftx}>You’re set to start!</Text>
                                </View>
                                <View style={styles.Thankyou}>
                                    <Text style={styles.ThankyouText}>Thank you for choosing us as your trusted</Text>
                                    <Text style={styles.ThankyouText}>trusted social media app, enjoy!</Text>
                                </View>
                            </View>
                        </View>
                        <ButtonBottom title="Join Verses"  backgroundColor= '#FFF' color='#5E4EA0'/>
                        
                </ImageBackground>

            </LinearGradient>
        </View>
    )
}

export default JoinVerses

const styles = StyleSheet.create({
    Thankyou: {
        marginTop: 20,
    },
    ThankyouText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center',
    },
    CongratsLiftx: {
        fontSize: 28,
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
    },
    ProfileSetupText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#fff',
        marginLeft: 8,
    },
    ProfileSetup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 21,
    },
    TitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 250,
    },
    BackStyle: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: '#fff',
        marginLeft: 8,
    },
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    gradient: {
        width: '100%',
        height: '100%',

    },
    Container: {
        flex: 1,
    },
})