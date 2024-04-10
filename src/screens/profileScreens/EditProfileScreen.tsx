import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarEditProfile from '../createProfileScreen/component/HeaderBarEditProfile'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { ProfileNavigatorProps } from '@/navigation/ProfileNavigator/config';
import { ProfileStackNames, ProfileStackParamList } from '@/navigation/ProfileNavigator/config';
import EditProfileCard from './component/EditProfileCard'



const EditProfileScreen = () => {
    const navigation = useNavigation<ProfileNavigatorProps>();
    const handleNext = () => {
        navigation.navigate(ProfileStackNames.Profile);
    }
    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.Container}>
            <HeaderBarEditProfile
                back='Back'
                next='Done'
                IconBackComponent={<FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" style={{ marginRight: 8 }} />}
                IconNextComponent={<FontAwesomeIcon icon={faChevronRight} size={15} color="#000" style={{ marginLeft: 8 }} />}
                onPressBack={handleBack}
                onPressNext={handleNext} />
            <EditProfileCard />
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
})