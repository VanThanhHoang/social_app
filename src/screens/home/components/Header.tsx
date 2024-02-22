import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '@/assets'


type HeaderProps = {
        onClick?: () => void    
    }
const Header:React.FC<HeaderProps> = ({onClick}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={icons.logo} />
            <TouchableOpacity onPress={onClick}>
                <Image style={styles.backup} source={icons.backup} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    logo: {
        width: 36,
        height: 36
    },
    backup: {
        width: 25,
        height: 24,
        marginTop: 5
    }
})