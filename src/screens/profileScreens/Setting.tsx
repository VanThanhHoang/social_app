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
import AccountScreen from './AccountScreen'
import PrivacyScreen from './PrivacyScreen'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '@/navigation/config'
import { ProfileNavigatorProps, ProfileStackNames } from '@/navigation/ProfileNavigator/config'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { t } from 'i18next'


const dataOptionSetting = [
    {
        id: 1,
        title: 'Follow and invite friends',
        icon: <IconFollow />,
        screenName: "FollowAndFriendsScreen"
    },
    {
        id: 2,
        title: 'Notification',
        icon: <IconNotification />,
        screenName: "NotificationScreen"
    },
    {
        id: 3,
        title: 'Privacy',
        icon: <IconPrivacy />,
        screenName: "PrivacyScreen"
    },
    {
        id: 4,
        title: 'Account',
        icon: <IconAccount />,
        screenName: "AccountScreen"
    },
    {
        id: 5,
        title: 'Change password',
        icon: <IconHelp />,
        screenName: "HelpScreen"
    },
    {
        id: 6,
        title: 'About',
        icon: <IconAbout />,
        screenName: "AboutSreen"
    },
]

const handleLogout = () => {
    console.log('Logout')
}

const Setting = () => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    const {t} = useTranslation();
    
    return (
        <View style={styles.Container}>
            <HeaderBar title='Settings' />
            <ButtonSwitch title={t('Language')} textOff='Eng' textOn='Vie' />
            <View style = {styles.ListStyle}>
                {dataOptionSetting.map((item, index) => (
                    <ItemSetting 
                        key={index} 
                        title={t(item.title)} 
                        icon={item.icon} 
                        color='#2C2B2B'
                        onPress={() => navigation.navigate(item.screenName)}/>
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