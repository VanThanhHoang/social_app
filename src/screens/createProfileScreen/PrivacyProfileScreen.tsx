import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderBarEditProfile from '@/screens/createProfileScreen/component/HeaderBarEditProfile'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PrivacyComponent from '@/screens/createProfileScreen/component/PrivacyComponent';
import PlantIcon from '@/assets/icons/PlantIcon'
import PrivateIcon from '@/assets/icons/PrivateIcon';
import ButtonBottom from '@/screens/createProfileScreen/component/ButtonBottom';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackEnum, LoginStackParamList } from '@/navigation/login';
import { useTranslation } from 'react-i18next';
const PrivacyProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
  const { t } = useTranslation()
  const [selectedPrivacyOption, setSelectedPrivacyOption] = useState('Public Profile');
  const handleNext = () => {
    navigation.navigate(LoginStackEnum.FollowAccountScreen);
  }
  const handleBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.Container}>
      <View>
        <HeaderBarEditProfile 
                back={t('Back')}
                IconBackComponent={<FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" style={{ marginRight: 8 }} />}
                onPressBack={handleBack}/>
        <View style={styles.TitleProfileContainer}>
          <Text
            style={styles.TitleProfile}>{t('Privacy')}</Text>
          <Text style={styles.TitleProfileCustomize}>{t("Your privacy on VNPIC can be different")}</Text>
        </View>
        <TouchableOpacity onPress={() => setSelectedPrivacyOption('Public Profile')}>
          <PrivacyComponent 
            TitleStatus={t('Public')}
            TitleDetail={t('Anyone on VNPIC can see, share and interact with your content.')} 
            borderColor={selectedPrivacyOption === 'Public Profile' ? '#5E4EA0' : '#C8C8C8'}
            IconComponent={<PlantIcon />}
            isSelected={selectedPrivacyOption === 'Public Profile'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedPrivacyOption('Private Profile')}>
          <PrivacyComponent 
          TitleStatus={t('Private')} 
          TitleDetail={t('Only your approve followers can see and interact with your content.')} 
          borderColor={selectedPrivacyOption === 'Private Profile' ? '#5E4EA0' : '#C8C8C8'}
          IconComponent={<PrivateIcon />}
          isSelected={selectedPrivacyOption === 'Private Profile'} />
        </TouchableOpacity>
      </View>
      <ButtonBottom onPress={handleNext} title='Next' backgroundColor='#5E4EA0' color='#FFFFFF' />
    </View>
  )
}

export default PrivacyProfileScreen

const styles = StyleSheet.create({
  TitleProfileCustomize: {
    fontSize: 15.5,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: '#767676',
    marginTop: 12,
    marginBottom: 82,
  },
  TitleProfile: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginTop: 104,
    color: '#5E4EA0',
  },
  TitleProfileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'space-between',
  },
})