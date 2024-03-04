import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBar from './component/HeaderBar'
import ButtonSwitch from './component/ButtonSwitch'
import IconFollow from '@/assets/icons/IconFollow'
import IconAbout from '@/assets/icons/IconAbout'
import IconNotification from '@/assets/icons/IconNotification'
import IconAccount from '@/assets/icons/IconAccount'
import IconHelp from '@/assets/icons/IconHelp'
import IconPrivacy from '@/assets/icons/IconPrivacy'
import ItemSetting from './component/ItemSetting'
import IconLogout from '@/assets/icons/IconLogout'


const dataOptionSetting = [
    {
        title: 'Follow and invite friends',
        icon: <IconFollow />,
    },
    {
        title: 'Notification',
        icon: <IconNotification />,
    },
    {
        title: 'Privacy',
        icon: <IconPrivacy />,
    },
    {
        title: 'Account',
        icon: <IconAccount />,
    },
    {
        title: 'Help',
        icon: <IconHelp />,
    },
    {
        title: 'About',
        icon: <IconAbout />,
    },
]

const Setting = () => {
    return (
        <View style={styles.Container}>
            <HeaderBar title='Settings' />
            <ButtonSwitch title='Language' textOff='Eng' textOn='Vie' />
            <View style = {styles.ListStyle}>
                {dataOptionSetting.map((item, index) => (
                    <ItemSetting key={index} title={item.title} icon={item.icon} color='#2C2B2B'/>
                ))}
            </View>
            <View style = {styles.LogoutContainer}>
                <ItemSetting title='Log out' icon={<IconLogout/>} color='#5E4EA0'/>
            </View>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    LogoutContainer:{
        marginTop: 26,
    },
    ListStyle:{
        marginTop: 26,
    },
    Container: {
        flex: 1,
    },
})